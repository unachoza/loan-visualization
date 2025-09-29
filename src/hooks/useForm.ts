import { useState } from "react";

export const useForm = (initialValues: any) => {
	const [values, setValues] = useState(initialValues);

	const clearForm = () => setValues(initialValues);

	return [clearForm, values, (e: any) => setValues({ ...values, [e.target.name]: e.target.value })];
};
