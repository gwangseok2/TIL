# [일 하면서 만든 코드]

---

## [Jquary $.ajax]

- 업무중 사용했던 $.ajax

```javascript
const paymentInfo = {
  phone: $("input[name=phone]").val().replaceAll("-", ""),
  userName: $("input[name=name]").val(),
  userEmail: $("input[name=email]").val(),
  classType: $(".class-time-btn.active").text(),
  ticketType: $(".ticket-btn.active").text(),
  grade: $(".event-section5 .select-box").val(),
  ClassHopeDay: hopeArrayOfArray,
  startHopeDay: timeArr,
  check: $("#checkbox").is(":checked"),
};

$.post(
  "event/event_2022/08/event_qanda_payment_ps.php",
  {
    data: JSON.stringify(paymentInfo),
  },
  function (data, status) {
    if (status == "success" && data == "success") {
      class_fail_modal("결제 완료", "수강권 결제가 완료되었습니다<br>결제 정보 및 이후 프로세스는<br>학생 연락처로 발송된<br>카카오 알림톡을 참고해 주세요!", "", "확인");
    } else {
      console.log(status);
    }
  }
);
```

---

## [24시간 timer제작]

```javascript
// 24시 타이머
setInterval(function time() {
  let d = new Date();
  let hours = 24 - d.getHours();
  let min = 60 - d.getMinutes();
  let sec = 60 - d.getSeconds();

  let day = ("0" + d.getDate()).slice(-2);

  if (min == "00") {
    hours = 24 - d.getHours();
  } else {
    hours = 23 - d.getHours();
  }

  if (sec == "00") {
    min = 60 - d.getMinutes();
  } else {
    min = 59 - d.getMinutes();
    sec = 59 - d.getSeconds();
  }

  if ((hours + "").length == 1) {
    hours = "0" + hours;
  }

  if ((min + "").length == 1) {
    min = "0" + min;
  }

  if ((sec + "").length == 1) {
    sec = "0" + sec;
  }
  //innerHtml = ''
  $("#timer").html(
    '<span class="t_hour">' +
      hours +
      "</span>" +
      '<span class="t_colon">:</span>' +
      '<span class="t_min">' +
      min +
      "</span>" +
      '<span class="t_colon">:</span>' +
      '<span class="t_sec">' +
      sec +
      "</span>"
  );
  // document.quarySelector('.timer-box').style.display='flex';
  $(".timer-box").css("display", "inline-block");
}, 1000);
```

---

## [Img timer 구현]

```javascript
<script>
    const timer = setInterval(function time() {
        let d = new Date();
        let hours = 24 - d.getHours();
        let min = 60 - d.getMinutes();
        let sec = 60 - d.getSeconds();
        const D_day = 28;
        let day = ("0" + d.getDate()).slice(-2);
        let now_day = D_day - day;
        if (min == "00") {
            hours = 24 - d.getHours();
        } else {
            hours = 23 - d.getHours();
        }
        if (sec == "00") {
            min = 60 - d.getMinutes();
        } else {
            min = 59 - d.getMinutes();
            sec = 59 - d.getSeconds();
        }
        if ((hours + "").length == 1) {
            hours = "0" + hours;
        }
        if ((min + "").length == 1) {
            min = "0" + min;
        }
        if ((sec + "").length == 1) {
            sec = "0" + sec;
        }
        const hoursArr = String(hours).split("");
        const minArr = String(min).split("");
        const secArr = String(sec).split("");
        hoursArr[0] = cardArr[Number(hoursArr[0])];
        hoursArr[1] = cardArr[Number(hoursArr[1])];
        minArr[0] = cardArr[Number(minArr[0])];
        minArr[1] = cardArr[Number(minArr[1])];
        secArr[0] = cardArr[Number(secArr[0])];
        secArr[1] = cardArr[Number(secArr[1])];
        const hoursCard0 = hoursArr[0];
        const hoursCard1 = hoursArr[1];
        const minCard0 = minArr[0];
        const minCard1 = minArr[1];
        const secCard0 = secArr[0];
        const secCard1 = secArr[1];

        $("#timer").html(
            "<span>" +
                hoursCard0 +
                "</span>" +
                "<span>" +
                hoursCard1 +
                "</span>" +
                "<figure>:</figure>" +
                "<span>" +
                minCard0 +
                "</span>" +
                "<span>" +
                minCard1 +
                "</span>" +
                "<figure>:</figure>" +
                "<span>" +
                secCard0 +
                "</span>" +
                "<span>" +
                secCard1 +
                "</span>"
        );

        $(".float_btn").show();
        $(".float_btn .timer_wrapper").css({ display: "flex" });
    }, 1000);
</script>
```

## [Vue.js + Nuxt.js + tranlation API 연동.]

-

## [Kafka & Redis]

1. Kafka : 디자인 패턴 pub sub을 사용해서 메세지 큐 병렬처리

2. Redis : 디자인 패턴 pub sub을 덤으로 제공하는 느낌. 고성능의 DB에 데이터를 캐싱해 빠른 처리 가능 휘발성이 그대신 강하다.

---

## [tagWrapping 후 번역 api 연동]

```javascript
    beforeMount() {
        this.spanTagWrapping()
    },
    // span wrapping
    spanTagWrapping() {
      for (let i = 0; i < this.sentenceArr.length; i++) {
        let content = this.sentenceArr[i].originalSentence
        content = content.replace(/\n/g, '')
        content = content.split(' ')
        this.sentenceArr[i].originalSentence = ''
        for (let j = 0; j < content.length; j++) {
          const testWord = `<span class='word'><span class=''></span>${content[j]}</span> `

          this.sentenceArr[i].originalSentence += testWord
        }
      }
    },

    // 말풍선 Open
    async tooltipOpen(event) {
      this.translationWord = '번역중...'
      const $eventTarget = event.target
      const $wordBox = document.querySelectorAll('.word-box')

      this.speedCheck = !this.speedCheck

      if (this.speedCheck && $eventTarget.className === 'word') {
        // api쪽으로 데이터 전달
        const tsVal = $eventTarget.innerText
        this.translationWord = await this.tranlation(tsVal)

        // 번역값 출력
        $eventTarget.children[0].innerText = this.translationWord
        $eventTarget.children[0].classList.add('word-box')
      }

      // 말풍선 Close
      if (this.speedCheck && $wordBox.length > 0) {
        for (let i = 0; i < $wordBox.length; i++) {
          $wordBox[i].classList.remove('word-box')
          $wordBox[i].innerText = ''
        }
      }

      // 스피드체크 false로 변경
      this.speedCheck = !this.speedCheck
    },

    // google api호출
    async tranlation(tsVal) {
      const res = await axios.post(
        `https://translation.googleapis.com/language/translate/key값`,
        { q: tsVal, target: 'ko' }
      )
      const translation = res.data.data.translations[0].translatedText
      return translation
    },
```

## [process.env 관련]

---

## [Observe API를 이용한 페이지 속도 개선 코드 이미지]

```javascript
// lazyload 돔 컨텐츠가 로드되면 실행
document.addEventListener("DOMContentLoaded", function () {
  // target
  const lazys = document.querySelectorAll(".lazy");

  // option
  const options = {};

  // function
  const callback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        var gif = entry.target;
        gif.classList.remove("lazy");
      }
    });
  };

  // observer 생성
  const observer = new IntersectionObserver(callback, options);

  // loop 감지
  lazys.forEach((val) => {
    observer.observe(val);
  });
});
```

## [Backand API를 연동해 Nuxt에서 페이지 네이션.]

- 10개씩 불러오는 페이지네이션 됨 지금 내 실력은 여기까지지만 더 디벨롭 할 수 있을 듯 .

````javascript
props: {
    value: {
      type: Number,
      default: undefined,
    },
    type: {
      type: String,
      default: undefined,
    },
  },
data() {
    return {
      pageArr: [],
      listArr: this.$store.state.list,
      pageNumber: 0,
    }
  },

  watch: {
    value(totalPage) {
      this.totalPage = totalPage

      this.addToPageNumber(totalPage)
    },
    type(pageType) {
      this.pageType = pageType
    },
  },

  created() {
    this.addToPageNumber(this.value)
  },
methods: {
    addToPageNumber(totalPage) {
      for (let i = 0; i < totalPage; i++) {
        this.pageArr.push({ id: i + 1, isActive: false, hidden: false })

        if (i === 0) {
          this.pageArr[0].isActive = true
        }

        if (i >= 10) {
          this.pageArr[i].hidden = true
        }
      }
    },
    async moveToPage(index, type) {
      // 왼쪽 버튼
      if (type === 'leftBtn' && this.pageNumber !== 0) {
        // 마지막 래프트 버튼 이벤트
        if (this.pageNumber > 0 && this.pageNumber % 10 === 0) {
          for (let i = this.pageNumber; i > this.pageNumber - 11; i--) {
            this.pageArr[i].hidden = false
          }
          for (let j = this.pageNumber; j < this.value; j++) {
            this.pageArr[j].hidden = true
          }
        }

        await this.$store.dispatch(FETCH_TOTAL, { type: this.type, pageNumber: this.pageNumber - 1 })
        this.pageNumber = this.pageNumber - 1
        // 오른쪽 버튼
      } else if (type === 'rightBtn' && this.value - 1 !== this.pageNumber) {
        await this.$store.dispatch(FETCH_TOTAL, { type: this.type, pageNumber: this.pageNumber + 1 })
        this.pageNumber = this.pageNumber + 1

        // 마지막 오른쪽 버튼 이벤트
        if (this.pageNumber > 0 && this.pageNumber % 10 === 0) {
          const count = this.value - this.pageNumber
          if (count > 10) {
            for (let i = this.pageNumber; i < this.pageNumber + 10; i++) {
              this.pageArr[i].hidden = false
            }
          } else {
            for (let i = this.pageNumber; i < this.pageNumber + count; i++) {
              this.pageArr[i].hidden = false
            }
          }

          for (let j = this.pageNumber - 1; j >= 0; j--) {
            this.pageArr[j].hidden = true
          }
        }

        // 페이지 숫자 버튼 이벤트
      } else {
        await this.$store.dispatch(FETCH_TOTAL, { type: this.type, pageNumber: index })
        this.pageNumber = index
      }

      // 버튼 class제어
      this.pageArr.forEach(function (item) {
        item.isActive = false
      })
      this.pageArr[this.pageNumber].isActive = !this.pageArr[this.pageNumber].isActive
    },
  },
}
});
```scss

@mixin fontSize($type) {
  font-size: $type + px;

  @include phone {
    // font-size: ($type / 375) * 100 + vw !important;
    font-size: Min(($type / 375) * 100 + vw, $type + px);
  }

  // 764 ~ 1024px 사이
  @include tabletStart {
    font-size: Min((($type * 1.35) / 1024) * 100 + vw, ($type * 1.25) + px) !important;
  }

  // 1024px 이상
  @include pcStart {
    font-size: Min((((($type * 1.65) / 1280) * 100) / 100 * 1024) + vw, ($type * 1.35) + px) !important;
  }
}

````

## [Scss에서 css min() 함수 사용 방법]

Scss에서 css min() 함수 사용할 때
아래의 이미지처럼

min함수의 'm'을 대문자 'M'으로 사용하면
Scss오류에 걸리지 않고 사용 가능합니다!

![scss](/img/ScssMin.png)

## [데이터를 2가지 중 하나만 담을 때]

ex)

a vs b
c vs d
e vs f
g vs h

배열에 하나씩 만 담고 싶을 때

<!-- 포문 사용 -->

```javascript
for (let i = 0; i < 4; i++) {
  if ($(target).parent().index() === i) {
    classStyleArr[i] = checkVal;
  }
}
```

<!-- hashmap을 이용해서도 가능할 것 같은데 추후 디밸롭 예정 -->

## [이미지, 영상 layout시 화면에 따라 비율 조정]

- 이미지의 16:9 비율 계산 후 그 값 만큼 padding-top으로 주고 그 안에 동영상 삽입.
- 세로 / 가로

## [정규식 인풋 자동으로 하이픈 추가]
인풋 이벤트에서
- event.target.value = event.target.value.replace(/[^0-9]/g, '').replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, "$1-$2-$3").replace(/(\-{1,2})$/g, "");
