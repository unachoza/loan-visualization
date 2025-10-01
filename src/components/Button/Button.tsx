import type { FormEvent } from "react";
import "./Button.css";

interface ButtonProps {
	text: string;
	type: "submit" | "reset" | "button";
	name?: string;
	handleClick: (e: FormEvent) => void | Promise<void>;
}

// data-testid="button-test" className="button" name={name}
const Button = ({ text, type, name, handleClick }: ButtonProps) => {
	return (
		<button className="button-container" type={type} name={name} onClick={handleClick}>
			{text}
		</button>
	);
};

export default Button;
