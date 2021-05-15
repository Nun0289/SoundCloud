import React from "react";
import "../css/Popup.css";
import { Button, IconButton, ButtonGroup, ButtonToolbar } from "rsuite";
import * as md from "react-icons/md";
const Authentication = (props) => {
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <IconButton
          onClick={() => props.setTrigger(false)}
          style={{
            position: "absolute",
            top: "16px",
            right: "10px",
            width: "3%",
            borderRadius: "5px",
            backgroundColor: "red",
            zIndex: "10000",
          }}
          icon={<md.MdClose size={"100%"} style={{ color: "#FFF" }} />}
        />
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
};
export default Authentication;
