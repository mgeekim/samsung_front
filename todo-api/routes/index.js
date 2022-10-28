var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "carami" });
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

let idGen = 3;

router.post("/api/todos", function (req, res) {
  // post parameter
  let title = req.body.title;

  console.log("body::" + req.body);
  // console.log(req.query);
  let todoobj = { id: ++idGen, title: title, done: false };
  // 배열의 가장 앞에 값 추가
  todos.unshift(todoobj);

  res.status(200).json(todoobj);
});

router.delete("/api/todos/:id", function (req, res) {
  const id = req.params.id;

  const intId = parseInt(id);

  todos = todos.filter((todo) => todo.id !== intId);

  res.status(200).json(todos);
});

router.patch("/api/todos/:id", function (req, res) {
  const id = req.params.id;
  const intId = parseInt(id);

  let title = req.query.title;

  let todo = todos.find((todo) => todo.id === intId);
  todo.done = !todo.done;
  todo.title = title;

  res.status(200).json(todos);
});
router.patch("/api/todos", function (req, res) {
  const id = req.body.id;
  const title = req.body.title;

  todos.map((item) => {
    if (item.id === id) {
      item.title = title;
    }
  });

  res.status(200).json({ result: "ok" });
});

module.exports = router;
