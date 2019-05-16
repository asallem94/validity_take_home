import * as NationalityAPIUtil from '../util/nationality_util';

export const RECEIVE_NATIONALITY = "RECEIVE_NATIONALITY";
export const REMOVE_NATIONALITY = "REMOVE_NATIONALITY";

const receiveNationality = ({
    users
}) => {
    return {
        type: RECEIVE_NATIONALITY,
        users
    };
};

const removeNationality = ({nationality, country}) => {
    return {
        type: REMOVE_NATIONALITY,
        nationality,
        country
    };
};

export const destroyNationality = (nationalityId) => {
    return (dispatch) => {
        return NationalityAPIUtil.destroyNationality(nationalityId).then((response) => {
            return dispatch(removeNationality(response));
        });
    };
};

export const createNationality = (nationalityId) => {
    return (dispatch) => {
        return NationalityAPIUtil.createNationality(nationalityId).then((response) => {
            return dispatch(receiveNationality(response));
        });
    };
};
