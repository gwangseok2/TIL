# [일 하면서 만든 코드]

---

## [Jquary $.ajax]

- 업무중 사용했던 $.ajax

```javascript
 const paymentInfo = {
    "phone": $("input[name=phone]").val().replaceAll('-', ""),
    "userName": $("input[name=name]").val(),
    "userEmail": $("input[name=email]").val(),
    "classType": $(".class-time-btn.active").text(),
    "ticketType": $(".ticket-btn.active").text(),
    "grade": $(".event-section5 .select-box").val(),
    "ClassHopeDay": hopeArrayOfArray,
    "startHopeDay": timeArr,
    "check": $("#checkbox").is(":checked"),
}

$.post("event/event_2022/08/event_qanda_payment_ps.php", {
    data: JSON.stringify(paymentInfo)
},  function(data, status) {
    if(status == "success" && data == "success") {
        class_fail_modal('결제 완료', '수강권 결제가 완료되었습니다<br>결제 정보 및 이후 프로세스는<br>학생 연락처로 발송된<br>카카오 알림톡을 참고해 주세요!','','확인');
    } else {
        console.log(status);
    }
});

```

---

## [24시간 timer제작]

```javascript
    // 24시 타이머
        setInterval(function time(){
            let d = new Date();
            let hours = 24 - d.getHours();
            let min = 60 - d.getMinutes();
            let sec = 60 - d.getSeconds();  
            
            let day = ('0' + d.getDate()).slice(-2);

            if(min =='00') {
                hours = 24 - d.getHours();
            } else{
                hours = 23 - d.getHours();
            }

            if(sec == '00'){
                min = 60 - d.getMinutes();                      
            } else {
                min = 59 - d.getMinutes();
                sec = 59 - d.getSeconds();
            }

            if((hours + '').length == 1){
                hours = '0' + hours;
            }

            if((min + '').length == 1) {
                min = '0' + min;
            }

            if((sec + '').length == 1) {
                sec = '0' + sec;
            }
            //innerHtml = ''
            $('#timer').html 
                ('<span class="t_hour">'+hours+'</span>'+
                '<span class="t_colon">:</span>'+
                '<span class="t_min">'+min+'</span>'+
                '<span class="t_colon">:</span>'+
                '<span class="t_sec">'+sec+'</span>')
            // document.quarySelector('.timer-box').style.display='flex';
            $(".timer-box").css('display','inline-block');

        }, 1000);

```