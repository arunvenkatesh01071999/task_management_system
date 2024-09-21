const express = require('express');
const { getTasks, createTask, updateTask, deleteTask } = require('../controllers/taskController');
const { protect } = require('../middlewares/authMiddleware');
const { validateTask } = require('../middlewares/validateMiddleware');

const router = express.Router();

router.route('/')
  .get(protect, getTasks)
  .post(protect, validateTask, createTask);

router.route('/:id')
  .put(protect, validateTask, updateTask)
  .delete(protect, deleteTask);

module.exports = router;
