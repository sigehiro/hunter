// app/store/reducers.js
import { combineReducers } from 'redux'
import { ADD_ITEM, REMOVE_ITEM, UPDATE_LIST, SAVE_RECIPE, UPDATE_PROFILE } from './actions'

const initialGroceryState = {
    items: [],
}

const groceryReducer = (state = initialGroceryState, action) => {
    switch (action.type) {
        case ADD_ITEM:
            return { ...state, items: [...state.items, action.payload] }
        case REMOVE_ITEM:
            return { ...state, items: state.items.filter((_, index) => index !== action.payload) }
        case UPDATE_LIST:
            return { ...state, items: action.payload }
        default:
            return state
    }
}

const initialRecipeState = {
    recipes: [],
}

const recipeReducer = (state = initialRecipeState, action) => {
    switch (action.type) {
        case SAVE_RECIPE:
            return { ...state, recipes: [...state.recipes, action.payload] }
        default:
            return state
    }
}

const initialProfileState = {
    user: {},
}

const profileReducer = (state = initialProfileState, action) => {
    switch (action.type) {
        case UPDATE_PROFILE:
            return { ...state, user: action.payload }
        default:
            return state
    }
}

export default combineReducers({
    grocery: groceryReducer,
    recipe: recipeReducer,
    profile: profileReducer,
})
