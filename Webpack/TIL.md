# [Webpack TIL]

---

- https://joshua1988.github.io/webpack-guide/devtools/hot-module-replacement.html 주소 보면서 정리 할 예정.

HMR(Hot Module Replacement)
HMR은 브라우저를 새로 고치지 않아도 웹팩으로 빌드한 결과물이 웹 애플리케이션에 실시간으로 반영될 수 있게 도와주는 설정입니다. 브라우저 새로 고침을 위한 LiveReload 대신에 사용할 수 있으며 웹팩 데브 서버와 함께 사용할 수도 있습니다

---

웹팩으로 해결하려는 문제?

웹팩의 등장 배경에서도 살펴봤지만 웹팩에서 해결하고자 하는 기존의 문제점은 다음 4가지 

1. 자바스크립트 변수 유효 
2. 범위브라우저별 HTTP 요청 
3. 숫자의 제약사용하지 않는 코드의 관리
4. Dynamic Loading & Lazy Loading 미지원
