#

# [vue.js 공부 목차]

[TOC]

# [2022 07 10]

---

## [computed]

- **Computed속성** : 단순한 연산 이외에 연산 작업을 사용할 시 Computed속성을 사용해서 하면 캐싱도 될 뿐더러 속도에 용이하다. vue.js의 Dom 생성 전 연산을 끝낸 결과 값을 캐싱하여 불러온다. methods로도 사용 가능하지만 method로 사용하게 되면 Dom생성 후 연산 작업때 마다 함수를 호출하기 때문에 복잡한 연산 작업은 Computed 속성으로 사용하는 것이 좋다. 더 나아가 변경점이 생길 시에는 재연산을 해준다. computed안에 정의된 함수는() 없이 호출한다.

- ```vue
  <div> 
      {{reversedMessage}}
      {{reversedMessage}}
      {{reversedMessage}}
  </div>
  <Script>
  	export default{
          data() {
              return {
                  message:'다된전반'
              }
          },
          // Dom생성 전 연산을 저장
          computed: {
              reversedMessage() {
                  return {
                      this.mesaage.split('').reverse().join('')
                  }
              }
          }
      }
  </Script>
  ```

---

## [Vue.js 생명주기]

### 중요 4가지

1. created() {}
2. mounted() {}
3. updated() {}
4. destroyed() {}

```vue
<script>
created() {
   	데이터 준비 Dom생성 전
   },
   mounted() {
       Dom생성 후
   },
   updated() {
       Data의 변화가 생겼을 때
   },
   destroyed() {
       Vue 인스턴스 종료시
   }
</script>
```

---

## [Watch]

- watch속성은 데이터를 감시하고 있다가 데이터가 변경 됐을 때 매게변수로 **newVal**와 **oldVal**을 **순서대로** 매게변수로 받는다. 사용법은 아래와 같다.

```vue
<div>
    <h1>{{ message }}</h1>
    <button @click='changeData'>클릭</button>
    {{ watch }}
</div>
<Script>
	export default{
        data() {
            return {
                message:'감시하냐?',
                watch: '감시전',
            }
        },
        watch: {
            message(newVal, oldVal) {
                console.log(newVal, oldVal);
                this.watch = '감시후'
            }
        },
        
        methods: {
            changeData() {
                this.message = this.message.split('').reverse().join('');
            }
        }
    }
</Script>
```

---

# [2022 07 11]

---

## [Vue.js 버튼 토글 컨트롤]

- v-for문으로 (item, index) 배열 돌린 후 배열에 :class={active : isActive} 바인딩 후 onclick methods 실행

```vue
<div v-for="(item, index) in btnArr" :key="item.id" class="btn-item" :class="{ active: isAcitve }" @click="toggleActive(index)">
    {{ item.name }}
</div>
<script>
data() {
    return {
        btnArr: [
            {id:1, name:'gd', isActive: true},
            {id:2, name:'gdd', isActive: false},
            {id:3, name:'gddd', isActive: false},
        ]
    }
}
method: {

    toggleActive(index) {
        this.btnArr.forEach(function(item){
            item.isActive=false;
        });
    	this.btnArr[index].isActive = !this.btnArr[index].isActive;
    },

}
</script>
```

# **[2022 07 13]**

---

## [props]

부모 컴포넌트에서 자식 컴포넌트로 데이터를 전달하기 위해서 사용한다. props로 받은 데이터는 자식 컴포넌트에서 변경하면 데이터의 일관성에 맞지 않아 데이터 변경을 하면 안된다. type을 명시하지 않으면 esLint에 걸리니 참고 하도록 하자!

```vue
props: { title : { type: String, default:'' }, soundUrl : { type: String, default:'' } },
```

# [2022 07 26]

---

## [splice를 사용하면 안됨 ]

SPA 싱글 페이지 어플리케이션에선 데이터 배열을 splice로 제어 하지말고 slice로 제어를 해야함.

---

# [2022 08 07]

## [exLint multi-word-component error 제거]

```javascript
'vue/multi-word-component-names': [
    'error',
    {
        ignores: ['index'],
    },
],
```

---

## [component 쉽게 import 하는 방법]

```javascript
// 아래처럼 컴포넌트 명 까지만 입력하고 텝을 치면 자동으로 import 된다.
<Component
```

---

## [component v-model]

- 컴포넌트에서도 v-model 사용 가능 search검색 같은 value값을 양방향 바인딩 할 때

```javascript
// 부모 v-model 값을 props에 value로 전달
<inputComponent v-model="keyWord"/>
data() {
    return{
        keyWord:''
    }
}

// 자식 컴포넌트 emit으로 인풋 이벤트 위로 올림.
<input :value="value" @input="$emit('input', $event.target.value)"/>
props: {
    value{
        type:String,
        default:''
    }
}

```

---

## [$emit]

-자식 컴포넌트 이벤트를 부모에게 전달함.

- $emit('전달 할 이벤트 이름')

```javascript
// 부모
<InputComponent @search="method"/>

// 자식 컴포넌트 @click 이벤트 발동시 emit안에 있는 이벤트로 넘김
<input type="text" @click="$emit('search')"/>
```

---

## [Vue.js 새로고침시 데이터 사라지는 현상]

- vue.js는 자바 스크립트이기 때문에 새로고침하면 데이터를 다시 불러온다.
- 백엔드 서버 쪽에 데이터를 저장해서 불러오거나 로컬 스토리지를 이용해야 한다.

## [Vue.js에서 스크롤 이벤트]

- mounted때 리스너 부착해서 이벤트 바인딩을 해야함.

---

## [route.query]

파라메터가 ? 를 통해서 들어올 경우

https://github.com/gwangseok2?text=hello&size=30

router 설정

{
    path: '/search',
    components: {
      header: Header,
      default: SearchBody,
      footer: Footer
    }
  }

파라메터 접근은 $route.query 입니다.

<template> 
{{ $route.query.text }} <!-- hello --> 
{{ $route.query.size }} <!-- 20 --> 
</template>

---

## [vue2 router 설치 관련]

22년 2월 7일부터 뷰 라우터를 NPM으로 설치할 때 버전을 꼭 명시해 주셔야 Vue 2 버전과 호환됩니다.

```javascript
npm i vue-router@3.5.3
```

---

## [vue router 코드 스플리팅]

app.js에 모든 페이지의 정보를 들고 옴 
위의 경우 속도가 느려지기 때문에 아래의 방식처럼 코드 스플리팅 처리가 필요한 이유임

```javascript
component: () => import('@/views/LoginPage.vue'),
```

---

## [history mode]

vue 프로젝트 배포시 서버에서 history mode 관련되어 처리를 해줘야함.
https://router.vuejs.org/guide/essentials/history-mode.html

---

## [input password 에러]

Input elements should have autocomplete attributes (suggested: "current-password") 에러 발생 시 

- autoComplete="on" 추가

---

## [vue2 vuex version issue]

vue2는 vuex3버전 사용
vue3는 vuex4버전 사용
https://velog.io/@reum107/Vuex-%EC%84%A4%EC%B9%98-%EC%97%90%EB%9F%AC

---

## [전역 필터 사용]

main.js에 filters.js 임포트 후
Vue.fillter('사용 할 이름','함수명');
하면 전역 필터 등록 가능하다.

---

## [라우터 네비게이션 가드]

const router 변수를 만들어 기존에 있는 라우터를 변수에 담고

router.beforeEach를 사용하면 된다
beforeEach의 콜백은 to, from, next가 있다.

to = 이동하려는 페이지
from = 어디서 왔는지 (현재 페이지)
next = 다음페이지로 넘어갈 수 있도록 호출할 수 있는 API

