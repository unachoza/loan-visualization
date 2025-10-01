import { useEffect } from "react";
import { useFetch } from "../../api/fetchData";
import Card from "../../components/Card/Card";
import type { LoanType } from "../../types/types";

const DisplayAvailableLoans = () => {
	const { loans, fetchLoans, errorFetchMessage } = useFetch();

	useEffect(() => {
		fetchLoans({ user_id: 1 });
	}, []);
	if (errorFetchMessage) return <div className="error">{errorFetchMessage}</div>;

      console.log({loans})
	return (
		<div>
			<h3>Available Loans</h3>

			{loans.length > 0 && loans.map((loan: LoanType) => <Card key={loan.id} {...loan} />)}

			<p>No loans found for this user.</p>
		</div>
	);
};

export default DisplayAvailableLoans;
