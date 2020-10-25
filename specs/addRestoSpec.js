/* eslint-disable linebreak-style */
import {addData, getData, getAllData, deleteData} from '../src/scripts/idb/idb';
import restoData from './restoData';
import renderBtn from './renderButton';

describe('Add Resto to favorite list', () => {
  beforeEach(() => {
    renderBtn('favor');
  });

  // eslint-disable-next-line max-len
  it('should show favorite button when the resto has not been saved before', () => {
    // eslint-disable-next-line max-len
    expect(document.querySelector('[aria-label="Add this restaurant to favorite list"]')).toBeTruthy();
  });

  // eslint-disable-next-line max-len
  it('should not show delete button when the resto has not been saved before', () => {
    // eslint-disable-next-line max-len
    expect(document.querySelector('[aria-label="Remove this restaurant from favorite list"]')).toBeFalsy();
  });

  it('should be able to add resto on favorite list', () => {
    const favorBtn = document.getElementById('favor');
    favorBtn.addEventListener('click', () => {
      addData(restoData).then(() => {
        const resto = getData('rqdv5juczeskfw1e867');
        expect(resto).toEqual(restoData);
        deleteData('rqdv5juczeskfw1e867');
      });
    });
    favorBtn.dispatchEvent(new Event('click'));
  });

  it('Should not add the resto when its already added', () => {
    const favorBtn = document.getElementById('favor');
    favorBtn.addEventListener('click', () => {
      addData(restoData).then(() => {
        const allRestoData = getAllData();
        expect(allRestoData).toEqual(restoData);
        deleteData('rqdv5juczeskfw1e867');
      });
    });
    addData(restoData).then(() => {
      favorBtn.dispatchEvent(new Event('click'));
    });
  });

  it('Should not add Resto when it has no ID', () => {
    const favorBtn = document.getElementById('favor');
    favorBtn.addEventListener('click', () => {
      addData({}).then(() => {
        const allRestoData = getAllData();
        expect(allRestoData).toEqual({});
      });
    });
    favorBtn.dispatchEvent(new Event('click'));
  });
});
