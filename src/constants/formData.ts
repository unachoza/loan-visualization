export const CREATE_USER_FORM = {
    "username": "",
}

export const CREATE_LOAN_FORM = {
    "amount": 0,
    "apr": 0,
    "term": 0,
    "status": "active",
    "owner_id": 0
}

export const SHARE_LOAN_FORM = {
    "user_id": 0,
    "owner_id": 0,
    "loan_id": 0
}

export const SHOW_USER_LOANS = {
    "user_id": 10
}
export const SHOW_LOAN_SCHEDULE = {
    "loan_id": 0,
    "user_id": 0
}
export const formData = {
    CREATE_USER_FORM,
    CREATE_LOAN_FORM,
    SHARE_LOAN_FORM,
    SHOW_USER_LOANS,
    SHOW_LOAN_SCHEDULE
}