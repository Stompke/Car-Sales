export const addFeature = id => {
    return {
        type: 'ADD_FEATURE',
        payload: id
    }
}

export const removeFeature = () => {
    return {
        type: 'REMOVE_FEATURE'
    }
}