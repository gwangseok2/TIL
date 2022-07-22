# [Nuxt.js]

---

## [store (Vuex)]

1. Nuxt.js는 Vue와 같이 **Vuex Store 전역 저장소를 패키지에서 기본적으로 제공**한다.

2. **Vuex는 기본적으로 비활성화** 상태이다. 그렇기에, 프로젝트 구조에는 **/store 디렉토리가 존재하나 이는 빈 폴더로 존재**하고 있다.

    여기에 **index.js 파일을 생성하면 Vuex Store가 활성화**되며, Nuxt.js의 **Vuex는 2가지 모드(Classic, Module)가 존재**한다.

---

## [asyncData()]

-   서버사이드 랜더링을 하기 위해 Nuxt.js는 컴포넌트 데이터를 세팅하기 전에 비동기 처리를 할 수 있도록 asyncData()를 제공한다.

1. asyncData()는 컴포넌트를 로드하기 전에 호출된다.
2. asyncData()는 **페이지 컴포넌트에서만** 사용가능하다.
3. asyncData()는 컨텍스트 객체를 첫번째 인수로 받으며, 이를 사용해 일부 데이터를 가져와 컴포넌트 데이터를 반환할 수 있다.
4. asyncData()의 return값은 컴포넌트의 data와 병합된다.
5. asyncData()는 컴포넌트를 초기화 하기 전에 실행되기 때문에 메서드 내부에서는 this를 통해 컴포넌트 인스턴스에 접근할 수 없다.
