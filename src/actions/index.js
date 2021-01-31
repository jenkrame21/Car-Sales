export const ADD_ADDITIONAL_FEATURE = "ADD_ADDITIONAL_FEATURE";
export const REMOVE_ADDITIONAL_FEATURE = "REMOVE_ADDITIONAL_FEATURE";

export const addAdditionalFeature = (feature) => {
    return { type: ADD_ADDITIONAL_FEATURE, payload: feature };
};

export const removeAdditionalFeature = (feature) => {
    return { type: REMOVE_ADDITIONAL_FEATURE, payload: feature};
};