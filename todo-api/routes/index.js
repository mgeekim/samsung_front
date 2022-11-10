var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "carami!!!" });
});

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

router.get("/api/todos", function (req, res) {
  res.status(200).json(todos);
});

router.get("/api/todos/:id", function (req, res) {
  const id = parseInt(req.params.id);

  const todo = todos.find((todo) => todo.id === id);
  res.status(200).json(todo);
});

let idGen = 3;
router.post("/api/todos", function (req, res) {
  //리스트에 한건 추가!!
  const title = req.body.title;
  let todo = { id: ++idGen, title: title, done: false };
  todos.unshift(todo);

  res.status(200).json(todo);
});

router.delete("/api/todos/:id", function (req, res) {
  const id = parseInt(req.params.id);
  todos = todos.filter((todo) => todo.id !== id);

  res.status(200).json(todos);
});

router.patch("/api/todos/:id", function (req, res) {
  const id = parseInt(req.params.id);
  const todo = todos.find((todo) => todo.id === id);
  todo.done = !todo.done;
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
  res.status(200).json(todos);
});
module.exports = router;
