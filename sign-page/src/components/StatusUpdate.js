import classes from "./StatusUpdate.module.css";
import CloseIcon from "@mui/icons-material/Close";
import { Button, Select, MenuItem } from "@mui/material";
import VerticalAlignTopIcon from "@mui/icons-material/VerticalAlignTop";
import Typography from "@mui/material/Typography";

const StatusUpdate = () => {
  return (
    <div className={classes.box}>
      <div className={classes.first}>
        <h1 className={classes.h1}>STATUS UPDATE</h1>
        <CloseIcon className={classes.CloseIcon} />
      </div>
      <div className={classes.third}>
        <label className={classes.one}>Order Number</label>
        <Typography className={classes.two}>12345678</Typography>
        <label className={classes.line}>Open Date</label>
        <Typography className={classes.text}>29-01-2022</Typography>
      </div>
      <div className={classes.fourth}>
        <label className={classes.three}>Current Status</label>
        <Typography className={classes.next}>Open</Typography>
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
          // value={age}
          // // label="Age"
          // onChange={handleChange}
        >
          <MenuItem value={0}>Pending</MenuItem>
          <MenuItem value={1}>Closed</MenuItem>
        </Select>
      </div>
      <div className={classes.fifth}>
        <label>Illustration</label>
      </div>
      <Button
        style={{
          width: "auto",
          display: "flex",
          marginLeft: "22px",
          borderRadius: "7px",
          marginBottom: "147px",
          padding: "8px 11px",
          borderColor: "#00508F",
          color: "#00508F",
        }}
        variant="outlined"
        startIcon={<VerticalAlignTopIcon />}
      >
        Upload File
      </Button>
      <div className={classes.ten}>
        <div>
          <Button
            style={{
              padding: "8px 31px",
              right: "20px",
              width: "auto",
              borderRadius: "6px",
              bottom: "96px",
              color: "rgba(20, 24, 31, 0.8)",
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
              bottom: "96px",
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

export default StatusUpdate;
