import _fetch from "./fetch";

export const fetchDupicateUsers = () => {
    return _fetch('/api/duplicates', {
        method: "GET"
    });
};
export const fetchDupicateCheck = () => {
    return _fetch('/api/check', {
        method: "GET"
    });
};
