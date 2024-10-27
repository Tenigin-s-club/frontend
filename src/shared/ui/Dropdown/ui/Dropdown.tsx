import { useEffect, useState, useRef, ReactNode } from "react";
import Input from "../../Input";
import style from "./Dropdown.module.scss";
import classNames from "classnames";

interface DropdownProps<T> {
  options: ReactNode[];
  selectedOption: T;
  setSelectedOption: (n: T) => void;
}

const Dropdown = <T,>({
  options = [],
  selectedOption,
  setSelectedOption,
}: DropdownProps<T>) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (e: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(e.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  const handleOptionClick = (option: T) => {
    setSelectedOption(option);
    handleClick();
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={dropdownRef}
      style={{ position: "relative", maxWidth: 400, width: "100%" }}
    >
      <span className={style.DropdownClickZone}>
        <Input
          onClick={handleClick}
          value={selectedOption as string}
          className={style.input}
          readOnly
        />
        <span
          className={classNames([
            style.DropdownArrow,
            isOpen && style.DropdownArrowOpen,
          ])}
        >
          <svg
            width="45"
            height="25"
            viewBox="0 0 45 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M41.7857 3.125L22.5 21.875L3.21427 3.125"
              stroke="#7E8C9A"
            />
          </svg>
        </span>
      </span>
      {isOpen && (
        <ul className={style.Dropdown}>
          {options.map((option, index) => (
            <li
              key={index}
              onClick={() => handleOptionClick(index as T)}
              className={style.DropdownItem}
            >
              <span>{option}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
