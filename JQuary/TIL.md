# [JQuary TIL]

## [.click()와 .trigger("click")의 차이]

- 위의 함수 둘 다 클릭을 강제적으로 호출 하는 함수이다. 하지만

1.  전달 해야 할 메개변수가 있을 때
2.  함수 자체에 매게 변수로 받는 것이 있을 때

위의 2가지 경우에는 item[].click()을 사용하면 된다. .trigger('click')을 사용하면 error를 뱉는다.
