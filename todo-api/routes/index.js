var express = require("express");
var router = express.Router();

let todos = [
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
  //DB에서 꺼내던지...  비지니스로직을 통해 얻어올...

  res.status(200).json(todos);
});

router.get("/api/todos/:id", function (req, res) {
  const id = parseInt(req.params.id);
  const todo = todos.find((todo) => todo.id === id);
  res.status(200).json(todo);
});
let idGen = 3;
router.post("/api/todos", function (req, res) {
  const title = req.body.title;
  const newTodo = { id: ++idGen, title: title, done: false };
  todos.unshift(newTodo);

  res.status(200).json(newTodo);
});

router.patch("/api/todos/:id", function (req, res) {
  const id = parseInt(req.params.id);
  const todo = todos.find((todo) => todo.id === id);
  todo.done = !todo.done;

  res.status(200).json(todos);
});

router.delete("/api/todos/:id", function (req, res) {
  const id = parseInt(req.params.id);
  todos = todos.filter((todo) => todo.id !== id);
  res.status(200).json(todos);
});

router.patch("/api/todos", function (req, res) {
  const id = parseInt(req.body.id);
  const title = req.body.title;

  todos.map((todo) => {
    if (todo.id === id) {
      todo.title = title;
    }
  });

  res.status(200).json({ result: "ok" });
});
/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "carami" });
});

module.exports = router;
