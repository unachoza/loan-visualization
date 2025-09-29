import { useState, type ChangeEvent, type FormEvent, type SetStateAction } from "react";
import "../Form.css"

interface TextInputProps {
	name: string;
	label: string;
	placeholder: string;
	setFormValues: SetStateAction<string | any>;
}
export default function TextInput({ name, label, placeholder, setFormValues }: TextInputProps) {
	const [currentValue, setCurrentValue] = useState("");

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { value } = e.currentTarget;
		setCurrentValue(value);
	};
	return (
		<div className="text-input-container">
			<label htmlFor={name}>{label}</label>
			<input
				data-testid="textInput-test"
				name={name}
				type="text"
				value={currentValue}
				placeholder={placeholder}
				onChange={handleChange}
				onBlur={setFormValues}
			/>
		</div>
	);
}
