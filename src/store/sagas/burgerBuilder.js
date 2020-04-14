import * as actions from '../actions/burgerBuilder';
/* import axios from '../../axios-orders'; */
import { put } from 'redux-saga/effects';
import axios from "axios";

export function* initIngredientsSaga(action) {
	try {
		/* const response = yield axios.get('https://food-order-application-8958b.firebaseio.com/ingredients.json'); */
		var response;		
		yield axios.get('http://localhost:3001/api/ingredients').then((data) => {
			response = data;
			console.log("Store Response: ", response);
		}).catch(err => console.log(err));
 		yield put(actions.setIngredients(response.data));
	} catch (error) {
		yield put(actions.fetchIngredientsFailed());
	}

}
