export const RECEIVE_MARITAL_FORM = "RECEIVE_MARITAL_FORM";


export const updateMaritalForm = ({maritalFilters, maritalInterests}) => {
    return {
        type: RECEIVE_MARITAL_FORM,
        maritalFilters,
        maritalInterests
    }
}