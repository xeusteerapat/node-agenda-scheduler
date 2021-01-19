const Agenda = require('agenda');
const mongoose = require('mongoose');

const agenda = new Agenda({
  db: {
    address: process.env.MONGO_URI,
  },
});
