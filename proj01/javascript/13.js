const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
    console.log("set!!");
  }, 1000);
});

console.log("before");
myPromise.then((n) => {
  console.log(n);
});
console.log("after");
