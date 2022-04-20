import { CATEGORIES_ACTION_TYPES } from './category.types';
import { createAction } from '../../utils/reducer/reducer.utils'; 
//import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';

//import SHOP_DATA from '../../shop-data';

/*export const setCategories = (categoriesArray) => 
  createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, categoriesArray);*/

export const fetchCategoriesStart = () => 
  createAction(CATEGORIES_ACTION_TYPES.FECTH_CATEGORIES_START);

export const fetchCategoriesSuccess = (categoriesArray) => 
  createAction(CATEGORIES_ACTION_TYPES.FECTH_CATEGORIES_SUCCESS, categoriesArray); 

export const fetchCategoriesFailed = (error) => 
  createAction(CATEGORIES_ACTION_TYPES.FECTH_CATEGORIES_FAILED, error); 

  /*
export const fetchCategoriesAsync = () => async (dispatch) => {
  dispatch(fetchCategoriesStart());

  try  {
    // From database
    //const categoriesArray = await getCategoriesAndDocuments('categories');
    
    // local testing
    const categoriesArray = SHOP_DATA;
    dispatch(fetchCategoriesSuccess(categoriesArray));
  } catch (error) {
    dispatch(fetchCategoriesFailed(error));
  }
};*/