/* eslint-disable linebreak-style */
import {addRestoData, getRestoData, getAllRestoData, deleteRestoData} from '../src/scripts/idb/resto-favor-db';
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
      addRestoData(restoData).then(() => {
        const resto = getRestoData('rqdv5juczeskfw1e867');
        expect(resto).toEqual(restoData);
        deleteRestoData('rqdv5juczeskfw1e867');
      });
    });
    favorBtn.dispatchEvent(new Event('click'));
  });

  it('Should not add the resto when its already added', () => {
    const favorBtn = document.getElementById('favor');
    favorBtn.addEventListener('click', () => {
      addRestoData(restoData).then(() => {
        const allRestoData = getAllRestoData();
        expect(allRestoData).toEqual(restoData);
        deleteRestoData('rqdv5juczeskfw1e867');
      });
    });
    addRestoData(restoData).then(() => {
      favorBtn.dispatchEvent(new Event('click'));
    });
  });

  it('Should not add Resto when it has no ID', () => {
    const favorBtn = document.getElementById('favor');
    favorBtn.addEventListener('click', () => {
      addRestoData({}).then(() => {
        const allRestoData = getAllRestoData();
        expect(allRestoData).toEqual({});
      });
    });
    favorBtn.dispatchEvent(new Event('click'));
  });
});
