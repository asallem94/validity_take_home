import _fetch from "./fetch";

export const fetchEvents = (filters) => {
    
    return _fetch('/api/events', {
        method: "GET",
        // params: JSON.stringify({filters})
    }, filters);
};

export const fetchEvent = (id) => {
    return _fetch(`api/events/${id}`, {
        method: "GET",
    });
};

export const createEvent = (event) => {
    return _fetch(`/api/groups/${event.groupId}/events`, {
        method: "POST",
        body: JSON.stringify({event}),
    });
};

export const updateEventImage = ({
    event
}) => {
    return _fetch(`/api/events/${event.id}`, {
        method: "PATCH",
        body: event.formData,
    }, null, {
        headers: {
            "x-csrf-token": document.querySelector("meta[name=csrf-token]").content,
        },
    });
};
export const updateEvent = (event) => {
    return _fetch(`/api/events/${event.id}`, {
        method: "PATCH",
        body: JSON.stringify({event})
    });
};
