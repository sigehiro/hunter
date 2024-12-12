// app/store/actions.js
export const ADD_ITEM = 'ADD_ITEM'
export const REMOVE_ITEM = 'REMOVE_ITEM'
export const UPDATE_LIST = 'UPDATE_LIST'
export const SAVE_RECIPE = 'SAVE_RECIPE'
export const UPDATE_PROFILE = 'UPDATE_PROFILE'

export const addItem = (item) => ({
    type: ADD_ITEM,
    payload: item,
})

export const removeItem = (itemId) => ({
    type: REMOVE_ITEM,
    payload: itemId,
})

export const updateList = (items) => ({
    type: UPDATE_LIST,
    payload: items,
})

export const saveRecipe = (recipe) => ({
    type: SAVE_RECIPE,
    payload: recipe,
})

export const updateProfile = (profile) => ({
    type: UPDATE_PROFILE,
    payload: profile,
})
