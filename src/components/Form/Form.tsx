import { useEffect, useState } from "react";
import Button from "../Button/Button";
import TextInput from "./TextInput/TextInput";
import { formData } from "../../constants/formData";
import { useForm } from "../../hooks/useForm";
import "./Form.css";

interface FormProps {
	title: string;
	data: any;
}

const Form = ({ title, data }: FormProps) => {
	const [clearForm, userData, handleChange] = useForm({});
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		clearForm();
	}, [data]);

	const handleSubmit = () => console.log("submit clicked");
	let form = Object.keys(formData[data]).map((key, i) => {
		return (
			<TextInput
				key={`${key}-${i}`}
				name={key}
				label={key.replace("_", " ").toUpperCase()}
				placeholder={key.replace("_", " ")}
				setFormValues={handleChange}
			/>
		);
	});

	return (
		<>
			<form className="form">
				<div className="form-title">{title}</div>
				{form}
				<Button type="submit" handleClick={() => handleSubmit()} text="Submit" />
			</form>
			<br />
		</>
	);
};

export default Form;
