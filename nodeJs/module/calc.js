const add = (a, b) => a + b;
const sub = (a, b) => a - b;

// node.js 모듈 내보내기
module.exports = {
  moduleName: 'calc',
  add: add,
  sub: sub,
}