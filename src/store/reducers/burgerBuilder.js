import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';


const initialState = {
    ingredients: null,
    totalPrice: 4,
    error: false,
    building: false
};

var INGREDIENT_PRICES = {};

const addIngredient = ( state, action ) => {
    const updatedIngredient = { [action.ingredientName]: state.ingredients[action.ingredientName] + 1 }
    const updatedIngredients = updateObject( state.ingredients, updatedIngredient );
    const updatedState = {
        ingredients: updatedIngredients,
        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
        building: true
    }
    return updateObject( state, updatedState );
};

const removeIngredient = (state, action) => {
    const updatedIng = { [action.ingredientName]: state.ingredients[action.ingredientName] - 1 }
    const updatedIngs = updateObject( state.ingredients, updatedIng );
    const updatedSt = {
        ingredients: updatedIngs,
        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
        building: true
    }
    return updateObject( state, updatedSt );
};

const setIngredients = (state, action) => {
      var ingredientsdata = action.ingredients;
      var rObj = {}; var i = 1;
      for (var key in ingredientsdata) {
        if (ingredientsdata.hasOwnProperty(key)) {
            rObj[key] = ingredientsdata[key];
            INGREDIENT_PRICES[key] = i + 1.5;
        }
        i++;
      }

     return updateObject( state, {
        ingredients: rObj,
        totalPrice: 4,
        error: false,
        building: false
    } );
};

const fetchIngredientsFailed = (state, action) => {
    return updateObject( state, { error: true } );
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.ADD_INGREDIENT: return addIngredient( state, action );
        case actionTypes.REMOVE_INGREDIENT: return removeIngredient(state, action);
        case actionTypes.SET_INGREDIENTS: return setIngredients(state, action);    
        case actionTypes.FETCH_INGREDIENTS_FAILED: return fetchIngredientsFailed(state, action);
        default: return state;
    }
};

export default reducer;