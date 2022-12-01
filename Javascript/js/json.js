// JSON
// JAVSCRIPT Object Notation

// 1. 오브젝트에서 to 제이슨으로 컨트롤 클릭해서 확인.
// stringfy(obj);
// '' to json --> ""
let json = JSON.stringify(true);
// console.log(json);
// console.log(1);

json = JSON.stringify(["apply", "banana"]);
// console.log(json);

const nunu = {
  q: "fight",
  w: "snowball",
  passive: null,
  active(skill) {
    console.log(skill, "123123");
  },
};
nunu.active();
// 두번째 인자에 원하는 프로퍼티만 정하면 그것만 json화 시켜줌.
json = JSON.stringify(nunu, ["q"]);
// console.log(json, "1");
//
json = JSON.stringify(nunu, (key, value) => {
  console.log(`key:${key}, value:${value}`);
  return key === "q" ? "Q스킬" : value;
});
console.log(json, "2");
obj = JSON.parse(json);
console.log(obj, "3");
