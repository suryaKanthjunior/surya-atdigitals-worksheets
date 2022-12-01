import classes from "./StatusUpdates.module.css";
import CloseIcon from "@mui/icons-material/Close";
import { Button, Select, MenuItem } from "@mui/material";
import Typography from "@mui/material/Typography";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";

const StatusUpdates = () => {
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
        <Typography className={classes.next}>Pending</Typography>
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
          <MenuItem value={0}>Revision(s)</MenuItem>
          <MenuItem value={1}>Closed</MenuItem>
        </Select>
      </div>
      <div className={classes.fifth}>
        <label>Illustration</label>
      </div>
      <Button
        style={{
          width: "auto",
          left: "20px",
          bottom: "6px",
          backgroundColor: "#E5E5E5",
          color: "black",
          textTransform: "lowercase",
          paddingRight: "100px",
        }}
        // uppercase={false}
        startIcon={<InsertDriveFileIcon />}
      >
        593f18a6...jpeg
      </Button>
      <header>Revision Notes</header>
      <div
        style={{
          width: "630px",
          height: "105px",
          border: "1px solid",
          marginLeft: "22px",
          borderColor: "#7090B0",
        }}
      >
        <p>
          This is what I would like Stewie to look like but in a sitting
          position. With his arms crossed and this look on his face. Then it
          will be done! Please, check the image uploded in the software.
        </p>
      </div>
      <div className={classes.ten}>
        <div>
          <Button
            style={{
              padding: "9px 31px",
              right: "20px",
              width: "auto",
              borderRadius: "6px",
              top: "27px",
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
              background: "#004474",
              width: "auto",
              borderRadius: "6px",
              top: "27px",
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

export default StatusUpdates;
