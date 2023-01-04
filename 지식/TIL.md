# [여러가지 개발 관련 지식들]

---

## [TDD]

- TDD(Test Driven Development) 테스트 주도 개발
- 보통은 개발 끝난 후 QA를 거치지만 테스트 코드를 짜고 그 테스트를 통과하고 다음 개발을 하는 식

### 장점

1. 코드가 깨끗해진다.
2. 결함이 적어진다.
3. 유지보수 비용이 낮아진다.

### 단점

1. 개발 기간이 늘어난다 테스트 코드 제작 및 테스트가 이루어지기 때문에.

---

## [User agent Ios 이슈]

최신 ios(13+) Safari에서는 iPad를 데스크탑으로 감지합니다.
크롬 및 기타 모바일 장치에서 제대로 작동합니다.

---

## [Scss에서 css min 함수 사용]

- css min 함수를 사용할 때 맨 앞글자를 대문자로 선언해서
  사용해야 오류에 걸리지 않는다.

---

## [windows nvm 설치]

1. https://github.com/coreybutler/nvm-windows/releases
2. \***\*cmd, 파워셀 관리자명령으로 실행\*\*\***
   nvm install 10.16.3
   nvm use 10.16.3

---

## [웹 표준]

### 알고 있었지만 좀 더 정리를 위함

1. 어떠한 웹 브라우저에도 잘 동작할 수 있도록 (기존에 해왔던 것)
2. 적절한 시맨틱 태그의 사용으로 검색엔진 최적화

---

## [웹 접근성]

1. 장애인 분들도 웹을 잘 접근 할 수 있도록 img에 alt를 명시하거나
2. 색약자를 위한 확실한 명대비를 표현
3. 운용성(Operable), 이해성(Understandable), 내구성(Robust)을 생각하면서 코딩

## [eslint, prettier error]

1. vscode 컨트롤 + , 클릭 후 format on save 해제
2. setting.json 아래의 코드 추가
```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "eslint.workingDirectories": [
    {"mode": "auto"}
  ],
}
```