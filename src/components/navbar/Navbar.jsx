import {
  ChatBubble,
  DarkMode,
  Fullscreen,
  Language,
  List,
  Notifications,
  Search,
} from "@mui/icons-material";
import "./navbar.scss";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";

const Navbar = () => {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <Search />
        </div>
        <div className="items">
          <div className="item">
            <Language className="icon"/>
            English
          </div>
          <div className="item">
            <DarkMode className="icon" onClick={() => dispatch({ type: "TOGGLE" })}/>
          </div>
          <div className="item">
            <Fullscreen className="icon"/>
          </div>
          <div className="item">
            <Notifications className="icon"/>
            <div className="counter">1</div>
            </div>
            <div className="item">
            <ChatBubble className="icon"/>
            <div className="counter">2</div>
          </div>
          <div className="item">
            <List className="icon"/>
          </div>
          <div className="item">
            <img src="https://cdn.vectorstock.com/i/1000x1000/96/92/demon-samurai-mask-logo-vector-42929692.webp" alt="" className="avatar"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
