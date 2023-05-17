# [React.js]

## [readt 서버 실행 전]

1. 아래의 코드 제거 나중에 생명주기 함수를 여러 번 실행하는 원인이 되므로 사용하지 않는다. 
2. 그럼 운영 환경에서는 어떻게 동작할까?
생명주기 메서드들은 프로덕션 모드에서 이중으로 호출되지 않습니다.
```javascript
// src/index.js 아래 코드 제거
<React.StricMode></React.StricMode>
```

## [주로 JSX문법 사용]


## [최상위 부모요소 태그 대체 <React.Fragment>]
```javascript
<React.Fragment>
  <h1>asdasdasd</h1>
</React.Fragment>

```
- react import 필요

---

## [react에서 props사용]

```javascript
const counterProps = {
  a:1,
  b:2,
  c:3,
  initialValue: 5,
}
// App.js에서 Counter컴포넌트로 props전달
<div className="App" style={style.App}>
  <MyHeader />
  <Counter {...counterProps} countStart={5} />
  <MyFooter />
</div>

// Counter.js
const Counter = (props) => {
  return console.log(props);
  // result object { couterStart:5 }
}

// Counter.js 전달 받지 못한 props기본값세팅
Counter.defaultProps = {
  initialValue: 0,
}
```
- 몇개를 보내던 객체에 담겨서 온다.
- 여러개 보낼 땐 스프레드 연산자를 사용해 객체로 보내는게 좋다. 
- 전달받지 못한 props 기본값은 defaultProps를 사용해서 한다.
- 컴포넌트로 props로 전달 할 수 있으며 children으로 받을 수 있다.
---


## [컴포넌트가 Rerender가 되는 경우]
1. 본인이 가진 state가 변경되는 경우
2. 내려온 props가 변경되는 경우
3. 부모의 컴포넌트의 Rerender되는 경우

---

## [react의 생명주기 lifecycle]

1. Mount
- ComponentDidMount (class형 컴포넌트에서만 사용 가능)

2. update
- ComponentDidUpdate (class형 컴포넌트에서만 사용 가능)

3. Unmount
- ComponentWillUnmount (class형 컴포넌트에서만 사용 가능)

## [React Hooks]
- 함수형 컴포넌트에서 class형 컴포넌트의 기능을 훔처와서 사용할 수 있도록 개발된 Hooks 
(2019.06년 출시)
- Class형 컴포넌트의 길어지는 코드 길이 문제 가독성 문제 등을 해결하기 위해 등장

1. useState

2. useEffect

- 빈 배열전달 Mount
- 2번째 인자 없을 땐 Update
- 의존성 배열에 있는 값이 변경되면 콜백 함수 실행 vue(watch)
- useEffect 안에서 함수를 return하면 Unmount시점에 useEffect 실행
```javascript
useEffect(()=>{
  // callback
}.[]// 의존성 배열)

useEffect(()=> {
  console.log("mount")

  return () => {
    console.log("Unmount");
  }
},[])
```

https://velog.io/@gwangseok2 밸로그에 정리

---

## [React.memo]

- HOC 고차 컴포넌트 이며 특정한 조건을 걸어 쓸대없는 랜더링을 막고 성능향상을 위해 사용함