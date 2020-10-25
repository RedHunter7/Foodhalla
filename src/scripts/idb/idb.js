import {openDB} from 'idb';

const DATABASE_NAME = 'resto-favor-database';
const OBJECT_STORE_NAME = 'resto';

const dbPromise = openDB(DATABASE_NAME, 1, {
  upgrade(database) {
    database.createObjectStore(OBJECT_STORE_NAME, {keyPath: 'id'});
  },
});

const addData = async (restoData) => {
  return (await dbPromise).add(OBJECT_STORE_NAME, restoData);
};

const updateData = async (restoData) => {
  return (await dbPromise).put(OBJECT_STORE_NAME, restoData);
};

const getData = async (restoId) => {
  return (await dbPromise).get(OBJECT_STORE_NAME, restoId);
};

const getAllData = async () => {
  return (await dbPromise).getAll(OBJECT_STORE_NAME);
};

const deleteData = async (restoId) => {
  return (await dbPromise).delete(OBJECT_STORE_NAME, restoId);
};

export {addData, updateData, getData, getAllData, deleteData};
