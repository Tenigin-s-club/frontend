import { useEffect, useState, useRef, ChangeEvent } from "react";
import Input from "../../Input";
import style from "./TextDropdown.module.scss";
import { useDebounce } from "@/shared/hooks/useDebounce";
import { EmptyTextDropdown } from "./EmptyTextDropdown";
import MapMarker from "@/shared/assets/MapMarker.svg";

interface TextDropdownProps<T> {
  options: T[];
  selectedOption: T;
  setSelectedOption: (n: T) => void;
  placeholder?: string;
}

const TextDropdown = ({
  options = [],
  selectedOption,
  setSelectedOption,
  placeholder,
}: TextDropdownProps<string>) => {
  const [inputValue, setInputValue] = useState(selectedOption);
  const [isOpen, setIsOpen] = useState(false);
  const value = useDebounce(inputValue, 300);
  const inputRef = useRef<HTMLInputElement>(null);
  const TextdropdownRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    setSelectedOption(value);
  }, [value]);

  useEffect(() => {
    if (value !== selectedOption) {
      setInputValue(selectedOption);
    }
  }, [selectedOption]);

  const handleOptionClick = (option: string) => {
    setInputValue(option);
    setSelectedOption(option);
    setIsOpen(false);
  };

  const handleClickOutside = (e: MouseEvent) => {
    if (
      TextdropdownRef.current &&
      !TextdropdownRef.current.contains(e.target as Node) &&
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
    <div style={{ position: "relative", maxWidth: 400, width: "100%" }}>
      <Input
        className={style.input}
        placeholder={placeholder}
        ref={inputRef}
        value={inputValue}
        onChange={handleClick}
      />
      {isOpen && (
        <ul className={style.TextDropdown} ref={TextdropdownRef}>
          {!!options.filter((el) =>
            el.toLowerCase().includes(value.toLowerCase())
          ).length &&
            options
              .filter((el) => el.toLowerCase().includes(value.toLowerCase()))
              .map((option, index) => (
                <li
                  key={index}
                  onClick={() => handleOptionClick(option)}
                  className={style.TextDropdownItem}
                >
                  <MapMarker />
                  <span>{option}</span>
                </li>
              ))}
          {!options.filter((el) =>
            el.toLowerCase().includes(value.toLowerCase())
          ).length && <EmptyTextDropdown />}
        </ul>
      )}
    </div>
  );
};

export default TextDropdown;
