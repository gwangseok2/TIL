# [순정스크립트 remind]

---

## [ ` ]

**백틱**  **`**  은 줄 바꿈이 가능하다.

![image-20220713165511457](C:\Users\ck154\AppData\Roaming\Typora\typora-user-images\image-20220713165511457.png)



---

## [switch]

- break 빼면 밑에 다 실행 됨.

```javascript
switch문에서는 if문에서의 else와 같은 default가 맨 위에 있어도 된다.
let val = 1
switch (val) {
	default:
        console.log('뭐고');
        break;
	case: '1' :
        console.log('1');
        break;
    case: '2' :
    	console.log('2');
        break;
}
```



---

## [조건부 연산자  === 삼항 연산자]

- let value = 5 > 0 ? "참" : "거짓";
- 잘 쓰면 함축 가능하지만 코드의 가독성은 떨어질 수 있다.
- 조건부 연산자 안에 조건부 연산자를 사용할 땐 괄호를 사용해주는 것이 가독성에 좋다

---

## [반복문]

1. **while 문**

   - 조건이 true면 계속 반복한다.

   ```
   while (조건식)
   	동작문;
   ```

2. **for 문**

   - 시작 순서 : **처음시작** (시작 > 조건식 > 동작문 > 종료식)  그 후 (조건식 > 동작문 > 종료식) 

   ```
   for ( 시작; 조건식; 종료식){
   	동작문 console.log('hi');
   }
   
   for (i=0; i < 100; i++) {
   	console.log(i+1);
   }
   ```

3. **이중 for 문**

   ```
   for (i=0; i < 10; i++) {
   	for (j=0; j < 10; j++) {
           console.log(i , j);
       }
   }
   
   문제 1. 홀수만 출력되는 구구단을 만들어 보시오.
   
   for( i=0; i < 10; i++) {
   	if(i%2 === 0) continue;
   	for(j=0; j < 10; j++){
   		if(j%2 === 0) continue;
   		console.log(i ,'*',j ,'=', i*j);
   	}
   }
   ```

4. **continue**

   - 컨티뉴를 만나면 그 즉시 반복문을 한 번 건너뛴다.

     ```
     let i = 0;
     while (i < 10) {
     	console.log(i);
     	if(i % 2 === 0) {
     		continue; //건너뛰기
     	}
     }
     result = 1, 3 ,5 ,7 ,9
     ```

     

5. **별찍기** 

   ```
   for (i=0; i < 5; i++) {
       console.log(' '.repeat(i) + '*'.repeat(5-i));
   }
   
   Result
    *****
     ****
      ***
       **
        *
   ```

   

   ---

   ## [Array 배열]

   - 배열안에 배열 삽입가능. 
   - 배열안의 요소는 elment

   ```javascript
   const arrayOfArray = [[1, 2, 3], [4, 5]]
   const arrayLength = arrayOfArray.length;
   
   // 배열의 마지막 요소를 찾는 방법 arrayIndex = arrayLength - 1;
   문제 arr라는 배열이 있을 때 마지막에서 3번째 요소를 찾아보시오
   답 : arr[arr.length -3];
   
   // 항상 배열의 마지막에 요소를 추가 하는법
   arrayOfArray[arrayOfArray.length] = '6';
   arrayOfArray.push('6');
   
   // 배열 마지막요소 제거하기.
   arrayOfArray.pop();
   
   // 배열 제일 앞에 요소를 추가 하는법
   arrayOfArray.unshift('0');
   
   // 배열의 첫 번째 요소 제거하기.
   arrayOfArray.shift();
   
   
   ```

   1. **.splice(지울 인덱스, 인덱스로부터 지울 개수)**

      - 배열의 중간 요소를 지울 수 있다.


      - 배열의 중간 요소를 지우고 다른 요소를 추가 할 수 있다.


      - 배열의 중간에 요소를 지우지 않고 추가 할 수 있다. 넣을 곳 .splice(넣을곳 인덱스, 0 , 값);
    
        ```
        const arr = [1, 2, 3, 4, 5];
        arr.splice(1,2);
        console.log(arr);
        [1, 4, 5]
        
        const arr = [1, 2, 3, 4, 5];
        arr.splice(0,2,11,22);
        console.log(arr);
        [11, 22, 3, 4, 5]
        
        const arr = [1, 2, 3, 4, 5];
        arr.splice(2,0,22);
        console.log(arr);
        ```


​        

   2. **includes**

      - 배열에서 특정 요소를 찾을 수 있다. 있을 시 true 없을 시 false 반환.

        ```
        const arr = [1, 2, 3, 4, 5];
        const result = arr.includes(2);
        console.log(result);
        ```


   3. **indexOf**

      - 배열에서 특정 요소를 찾아서 인덱스 반환 

        ```javascript
        const arr = ['가', '라', '다', '라', '마', '라'];
        console.log(arr.indexOf('다'));
        
        // 문제 
        // 위의 배열에서 라를 찾아 모두 지우세요 
        
        // 답
        const arr = ['가', '라', '다', '라', '마', '라'];
        while(arr.indexOf('라') > -1) {
            console.log(arr);
            arr.splice(arr.indexOf('라'),1);
        }
        ```

        

---

## **[function 함수]**

- 함수 선언문 function a() {}

- 함수 표현식 const b = function() {};

- 화살표 함수 const c = () => {};

   ```javascript
   // 매게변수 , 인수
   
   function a(x, y, z) {
   	console.log(x, y, z);
   	// 함수 선언문 안에서만 인수 들을 배열로 출력해준다.
   	console.log(arguments);
   }
   a('hi', 'hellow', 'argument');
   
   // 문제 화살표 함수로 곱하기 기능을 만드시오
   const multiple = (a, b, c) => {
       return a * b * c;
   }
   const b = multiple(1, 5, 7);
   console.log(b);
   
   // 화살표 함수는 중괄호 뒤에 바로 리턴이 오면 생략을 할 수 있다.
   const mutiple = (a, b, c) => a * b * c;
   ```

---

## [**객체 리터럴**]

- 숫자로 시작하거나, 특수 문자 들어갈 땐 문자열 '' 처리를 해줘야 함.
- 대괄호로 객체 참조시 '' 로 감싸줘야 함.

```javascript
const sging = {
	age: '27',
	yeer: '1996',
	name: '송광석',
}

// 접근 방법
console.log(sging.age);

// 대괄호 쓸 땐 문자열 '' 표시 필요.
console.log(sging['age']);

// 수정
sging.age = '28';

// 속성 제거
delete sging.age;
```

---

## [**method (매서드)**]

- 객체의 속성 값으로 함수를 넣었을 때 이 속성을 매서드라고 합니다.

  ```javascript
  const debug = {
  	log: function(value) {
  		console.log(value);
  	}
  }
  debug.log('ㅁㄴㅇㄴㅁㅇ','Method');
  ```

---

## [객체의 비교]

1. 객체끼리 {} === {} 비교 하면 항상 false를 반환 true가 나오려면 변수 안에 담아서 해야한다.

   ```javascript
   const a = { name: 'sging'};
   const array = [1, 2, a];
   // true;
   console.log(a === array[2]);
   
   // false
   const b = [];
   const c = [];
   console.log(b === c)
   
   // true
   const b = [];
   const c = [b,'f', 'd'];
   console.log(b === c[0]);
   ```

   
