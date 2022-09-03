# [Nuxt.js]

---

## [store (Vuex)]

1. Nuxt.js는 Vue와 같이 **Vuex Store 전역 저장소를 패키지에서 기본적으로 제공**한다.

2. **Vuex는 기본적으로 비활성화** 상태이다. 그렇기에, 프로젝트 구조에는 **/store 디렉토리가 존재하나 이는 빈 폴더로 존재**하고 있다.

   여기에 **index.js 파일을 생성하면 Vuex Store가 활성화**되며, Nuxt.js의 **Vuex는 2가지 모드(Classic, Module)가 존재**한다.

---

## [asyncData()]

- 서버사이드 랜더링을 하기 위해 Nuxt.js는 컴포넌트 데이터를 세팅하기 전에 비동기 처리를 할 수 있도록 asyncData()를 제공한다.

1. asyncData()는 컴포넌트를 로드하기 전에 호출된다.
2. asyncData()는 **페이지 컴포넌트에서만** 사용가능하다.
3. asyncData()는 컨텍스트 객체를 첫번째 인수로 받으며, 이를 사용해 일부 데이터를 가져와 컴포넌트 데이터를 반환할 수 있다.
4. asyncData()의 return값은 컴포넌트의 data와 병합된다.
5. asyncData()는 컴포넌트를 초기화 하기 전에 실행되기 때문에 메서드 내부에서는 this를 통해 컴포넌트 인스턴스에 접근할 수 없다.
6. 깜빡임 없이 페이지가 꽉 차있는 상태에서 보여준다 UX 경험 향상 시킬 수 있음.
7. asyncData() 에서 제공하는 파라미터를 이용할 수 있음 3번과 연결. 플러그인 , 미들웨어에서도 사용 가능.

## [process.env 개발 배포 환경 분리]

1. $ npm install @nuxtjs/dotenv 루트 디렉토리에 .env.dev .env.prod 파일 생성. 로컬 환경은 .env.local
2. 각각의 파일 안에 BASE_URL=http://www.naver.com 이런식으로 설정.

```javascript
// npm run dev로 실행했을 때 .env.dev의 파일을 읽는다.
 "scripts": {
    "dev": "nuxt --dotenv .env.dev",
    "build": "nuxt build --dotenv .env.prod",
    "start": "nuxt start --dotenv .env.prod",
 }
```

3. nuxt.config.js에 환경변수 설정

```javascript
require('dotenv').config()
// nuxt.config.js가 실행될 때 env객체 BASE_URL을 만들어 안에 그 값을 저장한다.
export default {
  env: {
    BASE_URL: process.env.BASE_URL,
  },
```

---

## [context]

https://nuxtjs.org/docs/internals-glossary/context/

---

## [proxy]

1. nuxt.config.js파일에서 아래의 옵션 첨부

```javascript
  axios: {
    proxy: true,
  },

  proxy: {
    // axios 호출 url 뒤에 /api가 오면 아래의 선언된 곳으로 api를 쏜다.
    '/api': 'http://google.com:8080',
  },


```

---

## [nuxtServerInit]

nuxtServerInit 함수는 넉스트의 $store actions에서 사용 가능하며, 특수한 동작을 하게된다. Nuxt의 universal 모드에서
사용 가능하며, SSR랜더 시점에서 실행되기 때문에 미리 데이터를 다루거나 서버에서만 접근 가능한 데이터를 다룰 때 사용한다.

- 일종의 라이프 사이클 훅
- 서버사이드에서 호출하고 싶을 때
- 아니면 미리 데이터를 넣고 싶어서 dispatch만 모아둘 때 여러개의 액션 함수 처리

asyncData보다 이른 시점에 호출.

```javascript
  actions: {
    nuxtServerInit(storeContext, nuxtContext) {
      storeContext.commit('뮤테이션 함수명');
      // 이런 식으로 dispatch = action 실행을 nuxtServerInit 부분에서 모아서도 사용 가능.
      storeContext.dispatch(FETCH_CART_ITEMS)
    }
  }
```

---

## [Nuxt.js에서 OG 활용 법]

- 업무 중에 페이지별로 OG를 다르게 해야하는 상황이 발생하였다 이것의 해결 방법을 찾았다..
  백틱을 사용하여 데이터도 바인딩 가능

```javascript
 head() {
    return {
      meta: [
        {
          hid: 'og:image',
          property: 'og:image',
          content: `${this.s3Url + this.detailarray.image}`,
        },
      ],
    }
  },
```

## [Nuxt.js Selectbox computed 활용]

```html
<select v-model="selectedItem" class="category-select" @change="filterList">
  <option value="전체">전체</option>
  <option v-for="(item, index) in menuArray" :key="index">{{ item }}</option>
</select>
```

```javascript
computed:{
  menuArray() {
    // api 데이터 리스트
    const targetArr = this.advancedArr
    const array = new Set()
    if (targetArr.content) {
      targetArr.content.forEach(function (item) {
        array.add(item.smallCategory)
      })
    }
    return (targetArr.newAry = Array.from(array))
  },
}
```

## [store mutation에 바로 접근]

```javascript
this.$store.commit("fetchPageNumber");
```

---

## [axios params로 쿼리스트링 여러개 보내기.]

```javascript
return instance.get(`/api/v1/material/news`, {
  params: {
    cate: type.category,
    level: type.level,
    size: 16,
    sort: "no,desc",
    page: type.pageNumber,
  },
});
```

## [fetch 속성]

- 페이지 컴포넌트 뿐만 아니라 일반 뷰 컴포넌트에서도 사용할 수 있는 데이터 호출 속성임.
- 서버 사이드 랜더링을 위해 서버에서 화면을 구성할 때 컴포넌트가 생성되고 나서 실행됨.(SSR)
- 브라우저에서 URL 주소를 변경해서 페이지를 이동할 때. (CSR)
- 라이프싸이클 훅인 create처럼 패스가 변경되면 호출 된다. -컴포넌트가 mounted 된 후 클라이언트에서 호출
- fetchOnServer가 false 또는 false를 반환할 경우, fetch는 오직 client-side에서만 실행됨.

---

## [Nuxt 서비스 배포 방법.]

-SSR 모드로 생성된 웹 서비스는 배포하려는 서버에서 Node.js 서버를 사용할 수 있는 상태로 배포를 해야함.

1. Azure
2. Google App Engine
3. Heroku

- . heroku.com 회원 가입
- . 메일 인증 후 create-App
- . 앱 이름 설정 github 연동. 래퍼지토리 명 검색 후 연결.
- setting - config vars key: HOST VALUE : 0.0.0.0
- 반영 할 브랜치 선택.

error 뜰 시..
package.json 파일에 엔진 명시.

```javascript
 "engines": {
    "node": "14.0.0"
  }
```

Please update your lock file with `npm install` before continuing 이 오류 뜰 시 npm install 후
package-lock.json 최신화.

## [Nuxt & vue 환경 :src assets 바인딩]

```javascript
require("@/assets/img.png");
```

- require를 사용해 바인딩을 하면 된다.
