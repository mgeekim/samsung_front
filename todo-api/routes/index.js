var express = require("express");
var router = express.Router();

let todos = [
  {
    id: 3,
    title: "Todo 3",
    done: false,
  },
  {
    id: 2,
    title: "Todo 2",
    done: false,
  },
  {
    id: 1,
    title: "Todo 1",
    done: false,
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/hi", function (req, res, next) {
  res.render("index", { title: "carami" });
});
router.get("/hello", function (req, res, next) {
  res.render("index", { title: "kang" });
});

router.get("/api/todos", function (req, res) {
  res.status(200).json(todos);
});

router.get("/api/todos/:id", function (req, res) {
  const id = parseInt(req.params.id);
  const todo = todos.find((todo) => todo.id === id);
  res.status(200).json(todo);
});

router.delete("/api/todos/:id", function (req, res) {
  const id = parseInt(req.params.id);
  todos = todos.filter((todo) => todo.id !== id);
  res.status(200).json(todos);
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
  res.status(200).json({ result: "ok" });
});

router.patch("/api/todos", function (req, res) {
  const id = parseInt(req.body.id);
  const title = req.body.title;

  todos.map((todo) => {
    if (todo.id === id) {
      todo.title = title;
    }
  });
  res.status(200).json(todos);
});
module.exports = router;
