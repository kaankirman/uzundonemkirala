import React from "react";
import Select from "react-select";

interface Option {
  id?: any;
  name: string;
}

interface DropdownProps {
  options: Option[];
  onSelect: (value: number) => void;
  currentOption?: any | null;
}

const DropdownMenu: React.FC<DropdownProps> = ({
  options,
  onSelect,
  currentOption,
}) => {
  const selectOptions = options.map((option) => ({
    value: option.id,
    label: option.name,
  }));

  const handleChange = (selectedOption: any) => {
    onSelect(selectedOption.value);
  };

  return (
    <Select
      className="input pl-0 border-none accent-white"
      placeholder="Seçiniz"
      value={selectOptions.find((option) => option.value === currentOption)}
      options={selectOptions}
      onChange={handleChange}
      menuPortalTarget={document.body} // Render menu in the portal
      menuPosition="fixed" // Use fixed positioning
      styles={{
        control: (styles, { isFocused }) => ({
          ...styles,
          borderRadius: "6px",
          width: "210px",
          cursor: "pointer",
          borderColor: isFocused ? "orange" : styles.borderColor,
          boxShadow: isFocused ? "0 0 0 1px orange" : styles.boxShadow,
          "&:hover": {
            borderColor: "orange",
          },
        }),
        option: (styles, { isFocused, isSelected }) => ({
          ...styles,
          zIndex: 999,
          cursor: "pointer",
          backgroundColor:
            isFocused || isSelected ? "orange" : styles.backgroundColor,
          color: isFocused || isSelected ? "white" : styles.color,
        }),
        menuPortal: (styles) => ({
          ...styles,
          zIndex: 9999, // Ensure the menu is on top
        }),
      }}
    />
  );
};

export default DropdownMenu;
