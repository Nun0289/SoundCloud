import React from "react";
import "../../css/Nevbar_Side.css";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import * as fi from "react-icons/fi";
import * as md from "react-icons/md";
const SideNavbar = () => {
  return (
    <div id="header">
      <ProSidebar collapsed={true}>
        <Menu>
          <MenuItem icon={<fi.FiHome size={30} style={{ color: "#FFF" }} />}>
            <Link to="/" />
          </MenuItem>
          <MenuItem
            icon={<fi.FiMusic size={30} style={{ color: "#FFF" }} />}
          ></MenuItem>
          <SubMenu
            icon={<md.MdLibraryMusic size={30} style={{ color: "#FFF" }} />}
          >
            <MenuItem>
              Create Album
              <Link to="/createalbum" />
            </MenuItem>
            <MenuItem>
              List Album
              <Link to="/" />
            </MenuItem>
          </SubMenu>
          <MenuItem
            icon={<fi.FiDownload size={30} style={{ color: "#FFF" }} />}
          >
            <Link to="/uploadmusic" />
          </MenuItem>
          <SubMenu icon={<fi.FiPlus size={30} style={{ color: "#FFF" }} />}>
            <MenuItem>
              Create Post
              <Link to="/createpost" />
            </MenuItem>
            <MenuItem>
              Post To Day
              <Link to="/" />
            </MenuItem>
          </SubMenu>
        </Menu>
      </ProSidebar>
    </div>
  );
};
export default SideNavbar;
