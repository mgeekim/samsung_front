const array = [1, 2, 3, 4, 5];
console.log(array[0]);

const objects = [{ name: "kang" }, { name: "kim" }];

console.log(objects[0]);

objects.push({ name: "hong" });

console.log(objects.length);

const superheroes = ["아이언맨", "캡틴 아메리카", "토르", "닥터 스트레인지"];

superheroes.forEach((hero) => {
  console.log(hero);
});

function print(hero) {
  console.log(hero);
}

console.log("===================");
superheroes.forEach(print);
