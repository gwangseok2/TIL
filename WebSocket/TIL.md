# [WebSocket]

- 웹소켓을 사용하면 브라우저와 서버 간 연결을 유지한 상태로 데이터를 교환할 수 있습니다. 이때 데이터는 패킷(packet) 형태로 전달되며, 전송은 커넥션 중단과 추가 HTTP 요청 없이 양방향으로 이뤄집니다.

- 위의 특징 때문에 주식 트레이딩 시스템이나, 온라인 게임 같은 데이터 교환이 지속적으로 이루어지는 서비스에 적합합니다.

- 잘 연결이 이루어지면 status 101을 내뱉는다.

```javascript
// 웹소켓 커넥션 생성. new WebSocket 호출 이때 ws라는 프로토콜을 사용함.
let socket = new WebSocket("ws://javascript.info");
// ws말고 wss://라는 프로토콜도 있는데, 두 프로토콜의 관계는 HTTP와 HTTPS의 관계와 유사하다.
```

## [Web Socket Event list]

- open: 커넥션이 제대로 만들어졌을 때 발생
- message: 데이터를 수신했을 때 발생함.
- error: error가 생겼을 때 발생함.
- close: 커넥션이 종료됐을 때 발생함.

커넥션이 만들어 상태에서 무언가를 보내고 싶다면
**_socket.send(data)_** 를 사용하면 됨.

ex)

```javascript

```

## [WebSocket 핸드셰이크]

![WebSocket](/img/WebSocketImg.svg);

## [주의할 점 ws:// 말고 wss://를 사용해라.]

- ws://를 사용해 데이터를 전송하면 데이터가 암호화되어있지 않은 채로 전송되기 때문에 데이터가 그대로 노출됩니다. 그런데 아주 오래된 프락시 서버는 웹소켓이 무엇인지 몰라서 ‘이상한’ 헤더가 붙은 요청이 들어왔다고 판단하고 연결을 끊어버립니다.  
  <br>

- 반면 wss://는 TSL(전송 계층 보안(Transport Layer Security))이라는 보안 계층을 통과해 전달되므로 송신자 측에서 데이터가 암호화되고, 복호화는 수신자 측에서 이뤄지게 됩니다. 따라서 데이터가 담긴 패킷이 암호화된 상태로 프락시 서버를 통과하므로 프락시 서버는 패킷 내부를 볼 수 없게 됩니다.

## [공식문서]

- https://ko.javascript.info/websocket
