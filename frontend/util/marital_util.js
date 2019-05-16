import _fetch from "./fetch";

export const updateMaritalForm = ({marital_form}) => {
    return _fetch(`/api/marital_forms/${marital_form.id}`, {
        method: "PATCH",
        body: JSON.stringify({marital_form})
    });
};
export const createMaritalForm = ({marital_form}) => {
    return _fetch(`/api/marital_forms`, {
        method: "POST",
        body: JSON.stringify({marital_form})
    });
};