import { useState } from "react";
import axios from "axios";
import { type UrlType } from "../types/types";

const url: UrlType = {
	base: "https://gl-interview.azurewebsites.net",
	users: "/users",
	loans: "/loans",
};

export const useFetch = () => {
	const [errorFetchMessage, setFetchErrorMessage] = useState("");
	const [loans, setLoans] = useState([]);
	const [loanScheduleData, setLoanSchedule] = useState([]);
	const [fetchedUsers, setFetchedUsers] = useState([]);

	const fetchLoans = async (params: any) => {
		try {
			const response = await axios.get(`${url.base}${url.users}/${parseInt(params.user_id)}/loans`);
			let data = await response.data;
			return setLoans(data);
		} catch (e: any) {
			if (e.response.status === 422) {
				setFetchErrorMessage("422: this input requires a number");
			} else if (e.response.status === 404) {
				setFetchErrorMessage("404: no loans available for this user");
			}
		}
	};

	const fetchUsers = async () => {
		try {
			const response = await axios.get(`${url.base}${url.users}`);
			let totalUsers = await response.data;
			setFetchedUsers(totalUsers);
		} catch (e: any) {
			if (e.response.status === 422) {
				setFetchErrorMessage("this input requires a number");
			} else if (e.response.status === 404) {
				setFetchErrorMessage("no loans available for this user");
			} else {
				setFetchErrorMessage("oops, there was an error");
			}
		}
	};

	const fetchLoanSchedule = async (params: any = { loan_id: 0, user_id: 0 }) => {
		try {
			const response = await axios.get(`${url.base}/loans/${parseInt(params.loan_id)}?user_id=${parseInt(params.user_id)}`);
			setLoanSchedule(response.data);
		} catch (e: any) {
			if (e.response.status === 422) {
				setFetchErrorMessage("this input requires a number");
			} else if (e.response.status === 403) {
				setFetchErrorMessage("this user doesn't have access to this loan details");
			} else {
				setFetchErrorMessage("oops, there was an error");
			}
		}
	};

	return { errorFetchMessage, fetchLoans, loans, fetchLoanSchedule, loanScheduleData, fetchUsers, fetchedUsers };
};
