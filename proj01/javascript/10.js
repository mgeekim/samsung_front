function work() {
  setTimeout(() => {
    const start = Date.now();
    for (let i = 0; i < 1000000000; i++) {}
    const end = Date.now();
    console.log(end - start + "ms");
  }, 0);
}

console.log("작업 시작!");
work();
console.log("다음 작업");
