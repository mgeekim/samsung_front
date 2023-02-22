const callFunc = () => {
  console.log("작업이 끝났어요!!");
};

function work(callback) {
  setTimeout(() => {
    const start = Date.now();
    for (let i = 0; i < 1000000000; i++) {}
    const end = Date.now();
    console.log(end - start + "ms");
    callback();
  }, 0);
}

console.log("작업시작");
work(callFunc);

console.log("다음작업");
