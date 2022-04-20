import { takeLatest, all, call, put } from 'redux-saga/effects';
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';
import { fetchCategoriesSuccess, fetchCategoriesFailed } from './category.action'; 
import { CATEGORIES_ACTION_TYPES } from './category.types';
import SHOP_DATA from '../../shop-data';

export function* fetchCategoriesAsync() {
  try  {
    // From database
    //const categoriesArray = yield call(getCategoriesAndDocuments, 'categories');
    
    // local testing
    const categoriesArray = SHOP_DATA;

    yield put(fetchCategoriesSuccess(categoriesArray));
  } catch (error) {
    yield put(fetchCategoriesFailed(error));
  } 
};

export function* onFetchCategories() {
  yield takeLatest(CATEGORIES_ACTION_TYPES.FECTH_CATEGORIES_START, fetchCategoriesAsync);
};

export function* categoriesSaga() {
  yield all([call(onFetchCategories)]);
}