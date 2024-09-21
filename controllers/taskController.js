const Task = require('../models/Task');

// Get all tasks for authenticated user
exports.getTasks = async (req, res) => {
  const tasks = await Task.find({ user: req.user.id });
  res.json(tasks);
};

// Create a new task
exports.createTask = async (req, res) => {

  console.log("mmmmmmm");
  
  const { title, description } = req.body;
  console.log(req,"req");
  console.log(req.user.id,"req.user.id");
  
  
  const task = new Task({
    title,
    description,
    user: req.user.id,
  });
  await task.save();
  res.status(201).json(task);
};

// Update a task
exports.updateTask = async (req, res) => {
  const task = await Task.findById(req.params.id);
  if (!task) return res.status(404).json({ message: 'Task not found' });

  if (task.user.toString() !== req.user.id) {
    return res.status(401).json({ message: 'Not authorized' });
  }

  task.title = req.body.title || task.title;
  task.description = req.body.description || task.description;
  task.completed = req.body.completed ?? task.completed;

  await task.save();
  res.json(task);
};

// Delete a task
exports.deleteTask = async (req, res) => {
  const task = await Task.findById(req.params.id);
  if (!task) return res.status(404).json({ message: 'Task not found' });

  if (task.user.toString() !== req.user.id) {
    return res.status(401).json({ message: 'Not authorized' });
  }

  await task.remove();
  res.json({ message: 'Task deleted' });
};
