import * as EventAPIUtil from "../util/event_util";

export const RECEIVE_EVENTS = "RECEIVE_FINDABLE_EVENTS";
export const RECEIVE_EVENT = "RECEIVE_EVENT";

const receiveEvents = ({events, users}) => {
    return {
        type: RECEIVE_EVENTS,
        events,
        users,
    };
};

const receiveEvent = ({event, users}) => {
    return {
        type: RECEIVE_EVENT,
        event,
        users
    };
};

export const fetchEvents = (filters) => {
    return (dispatch) => {
        return EventAPIUtil.fetchEvents(filters).then((response) => {
            return dispatch(receiveEvents(response));
        });
    };
};

export const fetchEvent = (id) => {
    return (dispatch) => {
        return EventAPIUtil.fetchEvent(id).then((response) => {
            return dispatch(receiveEvent(response));
        });
    };
};

export const createEvent = (event) => {
    return (dispatch) => {
        return EventAPIUtil.createEvent(event).then((response) => {
            return dispatch(receiveEvent(response));
        });
    };
};

export const updateEventImage = (event) => {
    return (dispatch) => {
        return EventAPIUtil.updateEventImage(event).then((response) => {
            return dispatch(receiveEvent(response));
        });
    };
};
export const updateEvent = (event) => {
    return (dispatch) => {
        return EventAPIUtil.updateEvent(event).then((response) => {
            return dispatch(receiveEvent(response));
        });
    };
};
