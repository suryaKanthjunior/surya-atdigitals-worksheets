import classes from "./BulkUpdate.module.css";
import CloseIcon from "@mui/icons-material/Close";
import { Button, Select, MenuItem } from "@mui/material";
import Typography from "@mui/material/Typography";

const BulkUpdate = () => {
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
        >
          <MenuItem value={0}>Pending</MenuItem>
          <MenuItem value={1}>Closed</MenuItem>
        </Select>
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
              background: "#00508f",
              width: "auto",
              borderRadius: "6px",
              top: "126px",
              fontSize: "16px",
            }}
            variant="contained"
          >
            UPDATE
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BulkUpdate;
