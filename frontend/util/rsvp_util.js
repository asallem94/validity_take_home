import _fetch from "./fetch";

export const createEventResponse = (rsvp) => {
    return _fetch(`/api/events/${rsvp.event_id}/events_rsvps`, {
        method: "POST",
        body: JSON.stringify(rsvp)
    });
};

export const updateEventResponse = (rsvp) => {
    return _fetch(`/api/events/${rsvp.event_id}/events_rsvps/${rsvp.id}`, {
        method: "PATCH",
        body: JSON.stringify(rsvp)
    });
};

