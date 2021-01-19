const Agenda = require('agenda');
const mongoose = require('mongoose');

const agenda = new Agenda({
  db: {
    address: process.env.MONGO_URI,
  },
});

agenda.define('log', job => {
  console.log(job);
  console.log('tst');
});

(async function () {
  // IIFE to give access to async/await
  await agenda.start();

  // await agenda.every('3 minutes', 'log');

  // Alternatively, you could also do:
  await agenda.every('* * * * * *', 'log');
})();
