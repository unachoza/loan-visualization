import Button from "../Button/Button";
import { useFetch } from "../../api/fetchData";
import { type LoanType } from "../../types/types";
import "./Card.css";

const Card = ({ amount, apr, term, owner_id, id }: LoanType) => {
	const { fetchLoanSchedule } = useFetch();

	return (
		<div key={id} className="loan-details move-left">
			<h2> Loan Details: # {id}</h2>
			<div className="loan-info">
				<div>Amount: ${amount.toLocaleString("en-US")}</div>
				<div>APR: {apr}%</div>
				<div>Term: {term} months</div>
				<div>Owner ID: {owner_id}</div>
			</div>
			<Button handleClick={() => fetchLoanSchedule({ loan_id: id, user_id: owner_id })} name="" text="view" type={"submit"} />
		</div>
	);
};

export default Card;
