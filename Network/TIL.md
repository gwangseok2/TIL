# [Network 관련 정리]

## [get & post]

### [get]

- GET은 클라이언트에서 서버로 어떠한 리소스로 부터
  **정보를 요청**하기 위한 메서드
  ex) 게시판의 게시물을 조회할 때 쓸 수 있다.
  URL 주소 끝에 파라미터로 포함되어 전송하고, 이 부분을 **쿼리 스트링 (query string)** 이라고 부른다.
  방식은 URL 끝에 "?"를 붙이고 파라미터명=값 www.naver.com?name=1&id=11
- get의 특징
- get 요청은 캐시가 가능하다.
- get 요청은 길이 제한이 있다.
- get 요청은 중요한 정보를 다루면 안된다.(보안 이슈)
- get은 데이터를 요청할때만 사용 된다.

---

### [post]

- post는 클라이언트에서 서버로 리소스를 생성하거나 업데이트하기 위해 **데이터를 보낼 때** 사용되는 매서드다.
  ex) 게시판에 게시글을 작성하는 작업
  POST 로 데이터를 전송할 때 길이 제한이 따로 없어 용량이 큰 데이터를 보낼 때 사용하거나 GET처럼 데이터가 외부적으로 드러나는건 아니라서 보안이 필요한 부분에 많이 사용된다. 
  ( 하지만 데이터를 암호화하지 않으면 body의 데이터도 결국 볼 수 있는건 똑같다. )
  POST를 통한 데이터 전송은 보통 HTML form 을 통해 서버로 전송된다.

### [get post 차이점]

- **사용목적** : GET은 서버의 리소스에서 데이터를 요청할 때, POST는 서버의 리소스를 새로 생성하거나 업데이트할 때 사용한다.
  DB로 따지면 GET은 SELECT 에 가깝고, POST는 Create 에 가깝다고 보면 된다.
- **요청에 body 유무** : GET 은 URL 파라미터에 요청하는 데이터를 담아 보내기 때문에 HTTP 메시지에 body가 없다. POST 는 body 에 데이터를 담아 보내기 때문에 당연히 HTTP 메시지에 body가 존재한다.

---

### [Proxy]

- 아래의 이미지처럼 proxy에 선언된 값으로 BE와 통신을 할 수 있도록 한다.

  ![proxy](../img/proxy정리.png)

---

### [axios interceptors]

- 서버로 요청을 보내거나 받기 전에 가로채서 로직을 추가할 수 있음.

```javascript
// instance 생성 해서 사용 시 instance.interceptors로 변경 필요


// Add a request interceptor
axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
axios.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });
```
https://github.com/axios/axios#interceptors