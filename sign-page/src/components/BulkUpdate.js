import classes from "./BulkUpdate.module.css";
import CloseIcon from "@mui/icons-material/Close";
import { Button, Select, MenuItem } from "@mui/material";
import Typography from "@mui/material/Typography";
import Dropdown from "./Dropdown";
import { useState } from "react";

const BulkUpdate = () => {
  const [enteredPending, setEnteredPending] = useState();

  const pendingChangeHandler = (event) => {
    setEnteredPending(event.target.value);
    console.log(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(enteredPending);
  };
  const Options= [{
    value: "Pending",
    label: "Pending"
  },
{
  value: "Closed",
  label: "Closed"
}];
  return (
    <div className={classes.box}>
      <div className={classes.first}>
        <h1 className={classes.h1}>BULK UPDATE</h1>
        <CloseIcon className={classes.CloseIcon} />
      </div>
      <div className={classes.third}>
        <label className={classes.one}>Order Number</label>
        <Typography className={classes.two}>
          12345678,12345678,12345678,12345678,
          <span className={classes.order}> +5 Orders</span>
        </Typography>
      </div>
      <div className={classes.fourth}>
        <label className={classes.three}>Current Status</label>
        <Typography className={classes.next}>Open</Typography>
      </div>
      <div>
        <label className={classes.status}>Change Status to</label>
       <Dropdown onChange={pendingChangeHandler} Options={Options}/>
      </div>
      <div className={classes.ten}>
        <div>
          <Button
            style={{
              padding: "8px 31px",
              right: "20px",
              width: "auto",
              borderRadius: "6px",
              color: "rgba(20, 24, 31, 0.8)",
              top: "126px",
              fontSize: "16px",
            }}
            variant="contained"
            disabled
          >
            CANCEL
          </Button>
        </div>
        <div>
          <Button
            style={{
              padding: "8px 31px",
              right: "11px",
              background: "#004474",
              width: "auto",
              borderRadius: "6px",
              top: "126px",
              fontSize: "16px",
            }}
            variant="contained"
            onClick={submitHandler}
          >
            UPDATE
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BulkUpdate;
