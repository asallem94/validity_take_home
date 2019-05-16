import _fetch from "./fetch";

export const fetchInterests = () => {
    return _fetch('/api/interests', {
        method: "GET"
    });
};

export const fetchGroups = (filters) => {
    return _fetch('/api/groups', {
        method: "GET",
        // body: JSON.stringify(filters),
    }, filters);
};

export const fetchGroup = (id) => {
    return _fetch(`/api/groups/${id}`, {
        method: "GET",
    });
};

export const createGroup = (group) => {
    return _fetch(`/api/groups`, {
        method: "POST",
         body: JSON.stringify({group}),
    });
};

export const updateEventResponse = (rsvp) => {
    return _fetch(`/api/events/${rsvp.event_id}/events_rsvps/${rsvp.id}`, {
        method: "PATCH",
        body: JSON.stringify(rsvp)
    });
};

export const updateGroupImage = ({
    group
}) => {
    return _fetch(`/api/groups/${group.id}`, {
        method: "PATCH",
        body: group.formData,
    }, null,
    {
        headers: {
            "x-csrf-token": document.querySelector("meta[name=csrf-token]").content,
        },
    });
};

export const updateGroup = (group) => {
    return _fetch(`/api/groups/${group.id}`, {
        method: "PATCH",
        body: JSON.stringify({ group })
    });
}

