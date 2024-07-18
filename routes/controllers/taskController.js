const Task = require('../models/Task');

const createTask = async (req, res) => {
    const { title } = req.body;
    const userId = req.user.userId;
    try {
        const task = new Task({ userId, title });
        await task.save();
        res.status(201).send(task);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};

const getTasks = async (req, res) => {
    const userId = req.user.userId;
    try {
        const tasks = await Task.find({ userId });
        res.send(tasks);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};

const updateTask = async (req, res) => {
    const { id } = req.params;
    const { title, completed } = req.body;
    try {
        const task = await Task.findByIdAndUpdate(id, { title, completed }, { new: true });
        res.send(task);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};

const deleteTask = async (req, res) => {
    const { id } = req.params;
    try {
        await Task.findByIdAndDelete(id);
        res.send({ message: 'Task deleted successfully' });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};

module.exports = { createTask, getTasks, updateTask, deleteTask };
