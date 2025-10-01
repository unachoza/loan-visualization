import { useState } from "react";
import Button from "../../components/Button/Button";
import Form from "../../components/Form/Form";
import "./UserInput.css";

const UserInput = () => {
	const [showForm, setShowForm] = useState({
		show: false,
		title: "",
		formValues: null,
	});

	const toggleShowForm = (form: any) => {
		const { innerHTML, name } = form.target;
		setShowForm({ show: true, title: innerHTML, formValues: name });
	};

	return (
		<div className="user-journey-container">
			<div>
				<div className="option">
					Sign up POST
					<Button type="button" handleClick={(e) => toggleShowForm(e)} name="CREATE_USER_FORM" text="Create User" />
					{/* create new user >> POST user form >> Sucessfully created //USER  */}
					{/* create new Loan >> POST loan form >> Sucessfully created //LOAN */}
					<br />
				</div>
				<div className="option">
					Create Loan POST
					<Button type="button" handleClick={(e: any) => toggleShowForm(e)} name="CREATE_LOAN_FORM" text="Create Loan" />
					<br />
				</div>
				<div className="option">
					Share Loans POST
					<Button type="button" handleClick={(e: any) => toggleShowForm(e)} name="SHARE_LOAN_FORM" text="Share Loan Info" />
					<br />
				</div>

				<div className="option">
					Show Loans GET
					<Button type="button" handleClick={(e: any) => toggleShowForm(e)} name="SHOW_USER_LOANS" text="ShowLoans" />
					<br />
				</div>
			</div>
			<div className="third-page">{showForm.show && <Form title={showForm.title} data={showForm.formValues} />}</div>
		</div>
	);
};

export default UserInput;
