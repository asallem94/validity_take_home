import * as MaritalFormAPIUtil from "../util/marital_util";

export const RECEIVE_MARITAL_FORM = "RECEIVE_MARITAL_FORM";

const receiveMaritalForm = (maritalForm) => {
    return {
        type: RECEIVE_MARITAL_FORM,
        maritalForm
    };
};

export const updateMaritalForms = (maritalForm) => {
    return (dispatch) => {
        return MaritalFormAPIUtil.updateMaritalForm(maritalForm).then((response) => {
            return dispatch(receiveMaritalForm(response));
        });
    };
};

export const createMaritalForms = (maritalForm) => {
    return (dispatch) => {
        return MaritalFormAPIUtil.createMaritalForm(maritalForm).then((response) => {
            return dispatch(receiveMaritalForm(response));
        });
    };
};