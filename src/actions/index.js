export const ADD_ADDITIONAL_FEATURE = "ADD_ADDITIONAL_FEATURE";

export const addAdditionalFeature = (addedFeature) => {
    return { type: ADD_ADDITIONAL_FEATURE, payload: addedFeature };
}