function test() {
  console.log("hello!!!");
}

console.log("before");
setTimeout(test, 0);
console.log("after");
