console.log("test");
const dog = {
  name: "강아지",
  age: 2,
  say: function () {
    console.log(this.name);
  },
};

dog.say();
