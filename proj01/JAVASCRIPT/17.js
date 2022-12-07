const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
  }, 1000);
});

console.log("start!!");
myPromise.then((n) => {
  console.log(n);
});

console.log("end!!");
