import {addData, getAllData, deleteData} from '../src/scripts/idb/idb';
import restoData from './restoData';
import renderBtn from './renderButton';

describe('Remove Resto from favorite list', () => {
  beforeEach(async () => {
    addData(restoData);
    renderBtn('delete');
  });

  it('Should display delete button when resto has been saved', () => {
    // eslint-disable-next-line max-len
    expect(document.querySelector('[aria-label="Remove this restaurant from favorite list"]')).toBeTruthy();
  });

  it('Should not display Favor button when resto has been saved', () => {
    // eslint-disable-next-line max-len
    expect(document.querySelector('[aria-label="Add this restaurant to favorite list"]')).toBeFalsy();
  });

  it('Should be able to remove Resto from favorite list', () => {
    const delBtn = document.getElementById('delete');
    delBtn.addEventListener('click', () => {
      deleteData('rqdv5juczeskfw1e867').then(() => {
        expect(getAllData()).toEqual([]);
      });
    });
    delBtn.dispatchEvent(new Event('click'));
  });

  // eslint-disable-next-line max-len
  it('Should not throw error if the deleted resto is not in the favor list', () => {
    const delBtn = document.getElementById('delete');
    delBtn.addEventListener('click', () => {
      deleteData('rqdv5juczeskfw1e867').then(() => {
        expect(getAllData()).toEqual([]);
      });
    });
    deleteData('rqdv5juczeskfw1e867').then(() => {
      delBtn.dispatchEvent(new Event('click'));
    });
  });
});
