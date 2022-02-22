//create header component
import { Link } from "react-router-dom";
import DashLogo from "../images/dash-logo.svg";
import ConversationChat from "../images/conversation-chat-1.svg";
import Railroad from "../images/railroad.svg";
import Legos from "../images/toys-lego.svg";

const Header = (props) => {
  const menus = [
    { name: "Dashboard", link: "/dashboard", src: DashLogo },
    { name: "Tracks", link: "/tracks", src: Railroad },
    { name: "Mentoring", link: "/mentoring", src: ConversationChat },
    { name: "Contribute", link: "/contribute", src: Legos },
  ];
  return (
    <div className="w-full h-16 bg-background flex items-center border-b-2">
      <div className="text-light-default flex">
        {menus.map((menu) => (
          <Link
            key={menu.name}
            className="text-light-default text-lg mr-4"
            to={menu.link}
          >
            <div className="flex">
              <img src={menu.src} alt={menu.name} />
              <div>{menu.name}</div>
            </div>
          </Link>
        ))}
      </div>
      <div>right</div>
    </div>
  );
};

export default Header;
