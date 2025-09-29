import type { JSX } from "react";
import "./Header.css";

interface HeaderProps {
	text: string;
}

const Header = ({ text }: HeaderProps): JSX.Element => {
	return <header className="header fixed-top">{text}</header>;
};
export default Header;
