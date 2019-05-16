import _fetch from "./fetch";

export const destroyNationality = (nationalityId) => {
    return _fetch(`/api/nationalities/${nationalityId}`, {
        method: "DELETE",
    });
};

export const createNationality = (country) => {
    return _fetch(`/api/nationalities`, {
        method: "POST",
        body: JSON.stringify(country)
    });
};
