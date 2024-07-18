const express = require('express');
const { createTask, getTasks, updateTask, deleteTask } = require('../controllers/taskController');
const authenticate = require('../middleware/authenticate');

const router = express.Router();

router.post('/', authenticate, createTask);
router.get('/', authenticate, getTasks);
router.put('/:id', authenticate, updateTask);
router.delete('/:id', authenticate, deleteTask);

module.exports = router;
