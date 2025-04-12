const express = require('express')
const todoController = require('../controller/todoController')
const todoRouter = express.Router()

todoRouter.get('/create-todo',todoController.displayCreateTodoPage)
todoRouter.post('/create-todo',todoController.createNewTodo)
todoRouter.get('/todos',todoController.displayTodos)
todoRouter.get("/todos/delete/:id",todoController.deleteTodo);
todoRouter.get("/todos/edit/:id",todoController.displayEditTodo);
todoRouter.put('/todos/:id',todoController.updateTodo)
todoRouter.get("/todos/change-status/:id",todoController.changeTodoStatus);
todoRouter.get('/todos/in-complete',todoController.displayIncompleteTodos)
todoRouter.get('/todos/completed',todoController.displayCompleteTodos)

module.exports = todoRouter