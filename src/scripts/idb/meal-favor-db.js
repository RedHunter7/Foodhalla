import {openDB} from 'idb';

const DATABASE_NAME = 'meal-favor-database';
const OBJECT_STORE_NAME = 'meal';

const dbPromise = openDB(DATABASE_NAME, 1, {
  upgrade(database) {
    database.createObjectStore(OBJECT_STORE_NAME, {keyPath: 'id'});
  },
});

const addMealData = async (mealData) => {
  return (await dbPromise).add(OBJECT_STORE_NAME, mealData);
};

const updateMealData = async (mealData) => {
  return (await dbPromise).put(OBJECT_STORE_NAME, mealData);
};

const getMealData = async (mealId) => {
  return (await dbPromise).get(OBJECT_STORE_NAME, mealId);
};

const getAllMealData = async () => {
  return (await dbPromise).getAll(OBJECT_STORE_NAME);
};

const deleteMealData = async (mealId) => {
  return (await dbPromise).delete(OBJECT_STORE_NAME, mealId);
};

export {addMealData, updateMealData, getMealData, getAllMealData, deleteMealData};
