//create header component
import { Link } from "react-router-dom";
import DashLogo from "../images/dash-logo.svg";
import ConversationChat from "../images/conversation-chat-1.svg";
import Railroad from "../images/railroad.svg";
import Legos from "../images/toys-lego.svg";
import Bell from "../images/bell.svg";
import Octagon from "../images/octagon.svg";
import ChatIcon from "../images/chat-icon.svg";
import Badge from "../images/badge.svg";
import Erik from "../images/erik.svg";
import NavMenuV from "../images/navigation-menu-vertical.svg";
import Logo from "../images/logo.svg";

const Header = (props) => {
  const menus = [
    { name: "Dashboard", link: "/dashboard", src: DashLogo },
    { name: "Tracks", link: "/tracks", src: Railroad },
    { name: "Mentoring", link: "/mentoring", src: ConversationChat },
    { name: "Contribute", link: "/contribute", src: Legos },
  ];
  return (
    <div className="w-full h-16 bg-background flex items-center border-b-2 justify-between">
      <div className="text-light-secondary flex items-center">
        <div className="ml-[33.12px] mr-[36.48px]">
          <img src={Logo} alt="profile" />
        </div>
        {menus.map((menu) => (
          <Link
            key={menu.name}
            className="text-light-secondary  mr-4"
            to={menu.link}
          >
            <div className="flex items-center font-semibold">
              <img src={menu.src} alt={menu.name} />
              <div className="ml-4">{menu.name}</div>
            </div>
          </Link>
        ))}
      </div>
      <div className="flex items-center">
        <div>
          <img src={ChatIcon} alt="chat" />
        </div>
        <div className="ml-2.25">
          <img src={Octagon} alt="Badge Indicator" />
        </div>

        <div className="ml-12">
          <img
            src={Bell}
            alt="Notifications"
            className="py-2 px-2.5 border rounded-lg"
          />
        </div>
        <div className="w-c97 h-c31 bg-light-default rounded-[100px] py-0.5 px-3 flex text-white mx-12">
          <img src={Badge} alt="badge icon" className="mr-2" />
          <span>300k</span>
        </div>
        <div className="rounded-full mr-[22.24px]">
          <img src={Erik} alt="profile" />
        </div>
        <div className="mr-[30.25px]">
          <img src={NavMenuV} alt="profile" />
        </div>
      </div>
    </div>
  );
};

export default Header;
