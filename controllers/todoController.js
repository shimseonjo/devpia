const Todo = require("../models/todoModel");
const asyncHandler = require("express-async-handler");

// @desc Get all todos
// @route GET /todo
const getAllTodos = asyncHandler(async (req, res) => {
  const todos = await Todo.find();
  res.send(todos);
});

// @desc Create a todo
// @route POST /todo
const createTodo = asyncHandler(async (req, res) => {
  const {text,done} = req.body;
  const contact = Todo.create({
    text,
    done,
  });
  res.send("입력 성공!!")
});

module.exports = {getAllTodos,createTodo};