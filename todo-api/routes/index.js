var express = require("express");
var router = express.Router();
const todos = [
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
router.get("/hi", function (req, res, next) {
  res.render("index", { title: "carami" });
});

router.get("/api/todos", function (req, res) {
  res.status(200).json(todos);
});

router.get("/api/todos/:id", function (req, res) {
  const id = req.params.id;
  console.log(id);
  const todo = todos.find((todo) => todo.id === parseInt(id));
  res.status(200).json(todo);
});
module.exports = router;
