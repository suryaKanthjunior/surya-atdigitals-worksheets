import { Select, MenuItem } from "@mui/material";

const Dropdown = ({ onChange, enteredPending }) => {
    const StatusUpdate =[ {
        id: 1,
        value: 'Pending'
    },{
        id: 2,
        value: 'Closed'
    }];


const StatusUpdates =[{
    id: 1,
    value: 'Revision(s)'
}, {
   id: 2,
   value: 'Closed'

}];

const BulkUpdate =[{
    id: 1,
    value: 'Pending'
}, {
    id: 2,
    value: 'Closed'
}];


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
      // value={age}
      // // label="Age"
      // onChange={handleChange}
    >
      <MenuItem value="pending">Pending</MenuItem>
      <MenuItem value="Closed">Closed</MenuItem>
    </Select>
  );
};

export default Dropdown;
