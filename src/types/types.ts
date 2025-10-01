export type UrlType = {
	base: string;
	users: string;
	loans: string;
};

export type LoanParamsType = {
	user_id: number;
	loan_id: number;
};

type CreateUserFormType = {
	username: string;
};

type CreateLoanFormType = {
	amount: number;
	apr: number;
	term: number;
	status: "active" | "inactive";
	owner_id: number;
};

type ShareLoanFormType = {
	user_id: number;
	owner_id: number;
	loan_id: number;
};

type ShowUserLoansType = {
	user_id: number;
};

type ShowLoanScheduleType = {
	loan_id: number;
	user_id: number;
};

export type FormDataType = {
	CREATE_USER_FORM: CreateUserFormType;
	CREATE_LOAN_FORM: CreateLoanFormType;
	SHARE_LOAN_FORM: ShareLoanFormType;
	SHOW_USER_LOANS: ShowUserLoansType;
	SHOW_LOAN_SCHEDULE: ShowLoanScheduleType;
};

export type LoanType = {
	amount: number;
	apr: number;
	term: number;
	status: "active" | "inactive";
	owner_id: number;
	id: number;
};

export type UserType = {
	userName: string;
	user_id: number;
};
