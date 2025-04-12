const Todo = require('../model/Todo')
class TodoController {
  displayCreateTodoPage(req, res) {
    try {
      res.render("create-todo");
    } catch (error) {}
  }

  //This code is to create a new Todo - create
  async createNewTodo(req, res) {
    try {
      const { task, description } = req.body;

      const todo = new Todo({ task, description });
      await todo.save();

      req.flash("success_msg", "Todo created successfully!");
      res.redirect("/todos"); // Redirect after creation
    } catch (error) {
      res.status(500).send("Error creating Todo: " + error.message);
    }
  }
  
  //This code is to read all todos from the database - read
  async displayTodos(req, res) {
    try {
      //this code finds or returns all the records present in the db by latest creation time 
      const todos = await Todo.find().sort({ createdAt: -1 });

      res.render("todos", { todos });
    } catch (error) {
      res.status(500).send("Failed to load todos: " + err.message);
    }
  }

  async displayEditTodo(req, res) {
    try {
      const todo = await Todo.findById(req.params.id);

      res.render("edit-todos", { todo });
    } catch (error) {
      res.send("Error occured in update todo");
    }
  }

  //This code helps to change the status of isCompleted between true and false - update
  async changeTodoStatus(req, res) {
    try {
      const todo = await Todo.findById(req.params.id);
      const update = await Todo.findByIdAndUpdate(req.params.id, {
        isCompleted: !todo.isCompleted,
      });
      req.flash("success_msg",`Updated status for Todoa:${todo.task}`)
      res.redirect(req.get("referer"));
    } catch (error) {
      res.status(500).send("Failed to change status");
      console.log(error)
    }
  }

  async displayIncompleteTodos(req, res) {
    try {
      const todos = await Todo.find({ isCompleted: false });
      res.render("in-complete-todos", { todos });
    } catch (error) {
      res.status(500).send("Failed to load todos: " + err.message);
    }
  }
  async displayCompleteTodos(req, res) {
    try {
      const todos = await Todo.find({ isCompleted: true });
      res.render("completed-todos", { todos });
    } catch (error) {
      res.status(500).send("Failed to load todos: " + error.message);
    }
  }

  async updateTodo(req, res) {
    try {
      const { task, description, isCompleted } = req.body;
      await Todo.findByIdAndUpdate(req.params.id, {
        task,
        description,
        isCompleted: isCompleted === "on", // checkbox returns "on" when checked
      });
      res.redirect("/todos");
    } catch (error) {
      res.status(500).send("Update failed");
    }
  }
  //This code helps us to delete records from database - delete
  async deleteTodo(req, res) {
    try {
      await Todo.findByIdAndDelete(req.params.id);
      req.flash('delete_msg',`Deleted Todo:${req.params.id}`)
      res.redirect("/todos");
    } catch (error) {
      res.send("Error can not delete");
    }
  }
}

module.exports = new TodoController()