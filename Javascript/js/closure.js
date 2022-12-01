// 함수형 프로그래밍 언어에서 일어나는 현상
// 변수의 접근을 폐쇠하는데 의의가 있음.
function closure() {
  let cnt = 1;
  function inner() {
    cnt = cnt + 1;
  }
  function print() {
    console.log(cnt);
  }
  return {
    inner,
    print,
  };
}
const cntClosure = closure();
console.log(cntClosure);
cntClosure.print();
cntClosure.inner();
cntClosure.print();
