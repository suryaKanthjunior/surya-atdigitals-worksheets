import { Select, MenuItem } from "@mui/material";

const Dropdown = ({ onChange, enteredPending, Options, label, value}) => {
  
  return (
    <Select
      style={{
        borderColor: "rgba(112, 144, 176, 0.4)",
        width: "123px",
        height: "32px",
        borderRadius: "7px",
        left: "12px",
      }}
      labelId="demo-simple-select-helper-label"
      id="demo-simple-select-helper"
      onChange={onChange}
      value={enteredPending}
    >
      {Options.map((Option) => (
      <MenuItem value={Option.value}>{Option.label}</MenuItem>
    ))}
     
    </Select>

  );
};

export default Dropdown;
