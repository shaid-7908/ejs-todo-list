# Todo List Application

A simple Todo list application built with **EJS**, **Express**, and **MongoDB**. The app allows you to create, read, update, and delete todos in a user-friendly interface.

## Features
- Create a new Todo
- View all Todos
- Mark Todos as complete/incomplete
- Edit or Delete Todos

---

## Prerequisites

Before you can run the app, make sure you have the following installed:

- **Node.js** (v12 or higher)
- **MongoDB** (running locally or use a cloud service like [MongoDB Atlas](https://www.mongodb.com/cloud/atlas))

---

## Setup

### 1. **Clone the Repository**
First, clone the repository to your local machine:

```bash
git clone https://github.com/your-username/todo-list-app.git

```
### 2. **Create ```.env``` File**

Create a ```.env ``` file in the root of the project and add the MongoDB connection URL:

```bash
MONGODB_URL=mongodb://your-mongo-db-url
```

### 3. **Install dependency and start**

Run the following command to install the required dependencies and start the application:

```bash
npm install
npm start
```