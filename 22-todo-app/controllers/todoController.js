const mongoose = require('mongoose');

// Connect to MongoDB database

mongoose.connect(
  'mongodb+srv://test:test@nodetodoapp-opthm.mongodb.net/test?retryWrites=true&w=majority',
  { useNewUrlParser: true, useUnifiedTopology: true }
);

// Create a schema
const todoSchema = new mongoose.Schema({
  item: String,
});

// Create a model
const Todo = mongoose.model('Todo', todoSchema);

module.exports = function (app) {
  // get data from MongoDB and pass it to view
  app.get('/todo', (req, res) => {
    Todo.find({}, (err, data) => {
      if (err) throw err;
      res.render('todo', { todos: data });
    });
  });

  app.post('/todo', (req, res) => {
    // get data from the view and add it to MongoDB
    const newTodo = Todo(req.body).save((err, data) => {
      if (err) throw err;
      res.json(data);
    });
  });

  app.delete('/todo/:item', (req, res) => {
    // delete the requested item from MongoDB
    Todo.find({ item: req.params.item.replace(/\-/g, ' ') }).deleteOne(
      (err, data) => {
        if (err) throw err;
        res.json(data);
      }
    );
  });
};
