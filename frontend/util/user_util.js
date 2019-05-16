import _fetch from "./fetch";

export const fetchUser = (id) => {
    return _fetch(`api/users/${id}`,
    {
        method: "GET",
    });
};

export const updateUser = (user) => {
    return _fetch(`api/users/${user.id}`,
    {
        method: "PATCH",
        body: JSON.stringify({ user }),
    });
};
