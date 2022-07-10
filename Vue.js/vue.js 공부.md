# vue.js 공부

----

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

1) created() {}
2) mounted() {}
3) updated() {}
4) destroyed() {}

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

