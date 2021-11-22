import {addRestoData, getAllRestoData, deleteRestoData} from '../src/scripts/idb/resto-favor-db';
import restoData from './restoData';
import renderBtn from './renderButton';

describe('Remove Resto from favorite list', () => {
  beforeEach(async () => {
    addRestoData(restoData);
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
      deleteRestoData('rqdv5juczeskfw1e867').then(() => {
        expect(getAllRestoData()).toEqual([]);
      });
    });
    delBtn.dispatchEvent(new Event('click'));
  });

  // eslint-disable-next-line max-len
  it('Should not throw error if the deleted resto is not in the favor list', () => {
    const delBtn = document.getElementById('delete');
    delBtn.addEventListener('click', () => {
      deleteRestoData('rqdv5juczeskfw1e867').then(() => {
        expect(getAllRestoData()).toEqual([]);
      });
    });
    deleteRestoData('rqdv5juczeskfw1e867').then(() => {
      delBtn.dispatchEvent(new Event('click'));
    });
  });
});
