var express = require("express");
var router = express.Router();

const todos = [
  {
    id: 3,
    title: "todo3",
    done: false,
  },
  {
    id: 2,
    title: "todo2",
    done: false,
  },
  {
    id: 1,
    title: "todo1",
    done: false,
  },
];

router.get("/api/todos", function (req, res) {
  res.status(200).json(todos);
});

router.get("/api/todos/:id", function (req, res) {
  const id = parseInt(req.params.id);
  const todo = todos.find((todo) => todo.id === id);
  res.status(200).json(todo);
});

/* GET home page. */
router.get("/hi", function (req, res, next) {
  res.render("index", { title: "carami" });
});

module.exports = router;
