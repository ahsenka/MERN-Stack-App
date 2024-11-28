<<<<<<< HEAD
const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
  task: { type: String, required: true },
  completed: { type: Boolean, default: false },
}, { timestamps: true });

module.exports = mongoose.model('Todo', TodoSchema);
=======
const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
  task: { type: String, required: true },
  completed: { type: Boolean, default: false },
}, { timestamps: true });

module.exports = mongoose.model('Todo', TodoSchema);
>>>>>>> 45e4884cea2addfb4804e4d8a0714ea888e77eb8
