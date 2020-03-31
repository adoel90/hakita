/*
    ````````````````````````````
    NOW, THIS CODE IS NOT USED !

    ````````````````````````````
*/

const asyncActionInPageRegister = (type) => ({
    PENDING: `${type}_PENDING`,
    SUCCESS: `${type}_SUCCESS`,
    ERROR: `${type}_ERROR`
});

const asyncActionInOTP = (type) => ({
    PENDING: `${type}_PENDING`,
    SUCCESS: `${type}_SUCCESS`,
    ERROR: `${type}_ERROR`
});

const asyncActionInUnitStructure = (type) => ({
    PENDING: `${type}_PENDING`,
    SUCCESS: `${type}_SUCCESS`,
    ERROR: `${type}_ERROR`
});

const asyncActionInCompletion = (type) => ({
    PENDING: `${type}_PENDING`,
    SUCCESS: `${type}_SUCCESS`,
    ERROR: `${type}_ERROR`
});

/* 

    ````
    Authentication

    ````

*/

export const REQUEST_DATA_IN_PAGE_REGISTER = "Request...";
export const GET_DATA_IN_PAGE_REGISTER = asyncActionInPageRegister("GET_DATA_IN_PAGE_REGISTER, status...");

export const REQUEST_POST_REGISTER_SIGNUP = "Request POST...";
export const RESULT_POST_REGISTER_SIGNUP = asyncActionInPageRegister("RESULT_POST_REGISTER_SIGNUP, status...");

export const REQUEST_POST_REGISTER_SIGNUP_WITH_VALIDATE = "Request POST...";
export const RESULT_POST_REGISTER_SIGNUP_WITH_VALIDATE = asyncActionInPageRegister("RESULT_POST_REGISTER_SIGNUP_WITH_VALIDATE, status...");


export const REQUEST_POST_SIGNIN = "Request POST...";
export const RESULT_POST_SIGNIN = asyncActionInPageRegister("RESULT_POST_SIGNIN, status...");


/* 

    ````
    OTP

    ````

*/

export const REQUEST_POST_VERIFY_OTP = "Request POST...";
export const RESULT_POST_VERIFY_OTP = asyncActionInOTP("RESULT_POST_VERIFY_OTP, status...");


/* 

    ``````````````````
    UNIT STRUCTURES

    ``````````````````

*/
export const REQUEST_POST_QUICK_FILL_UNIT_STRUCTURE = "Request POST...";
export const RESULT_POST_QUICK_FILL_UNIT_STRUCTURE = asyncActionInUnitStructure('RESULT_POST_QUICK_FILL_UNIT_STRUCTURE, status...');

export const REQUEST_GET_UNIT_STRUCTURE_UMUM = "Request...";
export const GET_UNIT_STRUCTURE_UMUM = asyncActionInUnitStructure('GET_UNIT_STRUCTURE_UMUM, status...');

/* 

    ``````````````````
        COMPLETION

    ``````````````````
    
*/

export const REQUEST_GET_TOKEN_FROM_EMAIL = "Request... ";
export const GET_TOKEN_FROM_EMAIL = asyncActionInOTP("GET_TOKEN_FROM_EMAIL, status...");

export const REQUEST_GET_LABEL_COMPLETION_PROFILE = "Request... ";
export const GET_LABEL_COMPLETION_PROFILE = asyncActionInCompletion('REQUEST_GET_LABEL_COMPLETION_PROFILE, status... ');


// export const REQUEST_GET_TOKEN_FROM_ = "Request... ";
// export const GET_TOKEN_FROM_EMAIL = asyncActionInOTP("GET_TOKEN_FROM_EMAIL, status...");


/* 

    ``````````````````
    UNIT FORM

    ``````````````````

*/

export const REQUEST_GET_LABEL_UNIT = "Request... ";
export const GET_LABEL_UNIT = asyncActionInUnitStructure("GET_LABEL_UNIT, status...");