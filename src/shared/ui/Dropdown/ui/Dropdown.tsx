import { useRef, useEffect, useState, ChangeEvent } from "react";

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
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const dropdownRef = useRef<HTMLUListElement>(null);
  const handleClickOutside = (e: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(e.target as Node)
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
    setSelectedOption(e.target.value);
    console.log(selectedOption, e.target.value);
    if (selectedOption.length > 2) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  };

  return (
    <div style={{ position: "relative" }}>
      <input value={selectedOption} onChange={handleClick} />
      {isOpen && (
        <ul ref={dropdownRef}>
          {options
            .filter((el) =>
              el.toLowerCase().includes(selectedOption.toLowerCase())
            )
            .map((option, index) => (
              <li
                key={index}
                onClick={() => handleOptionClick(option)}
                style={{
                  cursor: "pointer",
                  padding: 5,
                  fontSize: 18,
                }}
              >
                {option}
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
