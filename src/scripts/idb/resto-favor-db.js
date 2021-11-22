import {openDB} from 'idb';

const DATABASE_NAME = 'resto-favor-database';
const OBJECT_STORE_NAME = 'resto';

const dbPromise = openDB(DATABASE_NAME, 1, {
  upgrade(database) {
    database.createObjectStore(OBJECT_STORE_NAME, {keyPath: 'id'});
  },
});

const addRestoData = async (restoData) => {
  return (await dbPromise).add(OBJECT_STORE_NAME, restoData);
};

const updateRestoData = async (restoData) => {
  return (await dbPromise).put(OBJECT_STORE_NAME, restoData);
};

const getRestoData = async (restoId) => {
  return (await dbPromise).get(OBJECT_STORE_NAME, restoId);
};

const getAllRestoData = async () => {
  return (await dbPromise).getAll(OBJECT_STORE_NAME);
};

const deleteRestoData = async (restoId) => {
  return (await dbPromise).delete(OBJECT_STORE_NAME, restoId);
};

export {addRestoData, updateRestoData, getRestoData, getAllRestoData, deleteRestoData};
