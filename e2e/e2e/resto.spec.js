/* eslint-disable linebreak-style */
/* eslint-disable new-cap */
const assert = require('assert');

Feature('Test Foodhalla Web App');

Before(({I}) => {
  I.amOnPage('/#home');
});

Scenario('Add and remove resto', async ({I}) => {
  I.seeElement('.restaurant a');

  const firstResto = locate('.restaurant a').first();
  const firstRestoName = await I.grabTextFrom(firstResto);
  I.click(firstResto);

  I.click('#favor');
  I.click('.swal-button--confirm');

  I.click('#back-btn');

  I.click(locate('nav ul li a').at(2));
  I.seeElement('.restaurant');
  const addedRestoName = await I.grabTextFrom(locate('.restaurant a'));

  assert.strictEqual(firstRestoName, addedRestoName);

  I.click(locate('.restaurant a').first());
  I.click('#delete');
  I.click('.swal-button--danger');
  I.click('.swal-button');
  I.click('#back-btn');

  I.click(locate('nav ul li a').at(2));
  I.dontSeeElement('.restaurant');
});

Scenario('Give a Review about restaurant you have visited', async ({I}) => {
  I.seeElement('.restaurant a');
  I.click(locate('.restaurant a').first());

  I.click('#modal-trigger');

  I.fillField('name', 'Adli');
  I.fillField('review', 'Mantap!!');
  I.click('#send-btn');
});
