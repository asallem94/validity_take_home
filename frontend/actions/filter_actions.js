export const RECEIVE_FILTERS = "RECEIVE_FILTERS";

export const receiveFilters = (filters) => {
    return {
        type: RECEIVE_FILTERS,
        filters
    };
};