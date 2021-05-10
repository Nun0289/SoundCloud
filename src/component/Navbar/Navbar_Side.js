import React from "react";
import "../../css/Nevbar_Side.css";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import * as fi from "react-icons/fi";
import * as md from "react-icons/md";
const SideNavbar = () => {
  return (
    <div id="header">
      <ProSidebar collapsed={true}>
        <Menu>
          <MenuItem icon={<fi.FiHome size={30} style={{ color: "#FFF" }} />} />
          <MenuItem icon={<fi.FiMusic size={30} style={{ color: "#FFF" }} />} />
          <MenuItem
            icon={<md.MdLibraryMusic size={30} style={{ color: "#FFF" }} />}
          />
          <MenuItem
            icon={<fi.FiDownload size={30} style={{ color: "#FFF" }} />}
          />
          <SubMenu icon={<fi.FiPlus size={30} style={{ color: "#FFF" }} />}>
            <MenuItem>Component 1</MenuItem>
            <MenuItem>Component 2</MenuItem>
          </SubMenu>
        </Menu>
      </ProSidebar>
    </div>
  );
};
export default SideNavbar;
