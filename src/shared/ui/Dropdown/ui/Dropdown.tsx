import { useEffect, useState, useRef, ChangeEvent } from "react";
import Input from "../../Input";
import style from "./Dropdown.module.scss";
import { useDebounce } from "@/shared/hooks/useDebounce";
import { EmptyDropdown } from "./EmptyDropdown";
import MapMarker from "@/shared/assets/MapMarker.svg";

interface DropdownProps<T> {
  options: T[];
  selectedOption: T;
  setSelectedOption: (n: T) => void;
}

const Dropdown = ({
  options = [],
  selectedOption,
  setSelectedOption,
}: DropdownProps<string>) => {
  const [inputValue, setInputValue] = useState(selectedOption);
  const [isOpen, setIsOpen] = useState(false);
  const value = useDebounce(inputValue, 300);
  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    setInputValue(selectedOption);
  }, [selectedOption]);

  const handleOptionClick = (option: string) => {
    setInputValue(option);
    setSelectedOption(option);
    setIsOpen(false);
  };

  const handleClickOutside = (e: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(e.target as Node) &&
      inputRef.current &&
      !inputRef.current.contains(e.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClick = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setIsOpen(true);
  };

  return (
    <div style={{ position: "relative", maxWidth: 400 }}>
      <Input ref={inputRef} value={inputValue} onChange={handleClick} />
      {isOpen && (
        <ul className={style.Dropdown} ref={dropdownRef}>
          {!!options.filter((el) =>
            el.toLowerCase().includes(value.toLowerCase())
          ).length &&
            options
              .filter((el) => el.toLowerCase().includes(value.toLowerCase()))
              .map((option, index) => (
                <li
                  key={index}
                  onClick={() => handleOptionClick(option)}
                  className={style.DropdownItem}
                >
                  <MapMarker />
                  <span>{option}</span>
                </li>
              ))}
          {!options.filter((el) =>
            el.toLowerCase().includes(value.toLowerCase())
          ).length && <EmptyDropdown />}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
