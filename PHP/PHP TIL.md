# [PHP TIL]
---

## [시간 가져오는 방법]

```php
<?php
    // 날짜 변수 선언 2022 07 28
    $testDate = new DateTime();
    
    // 변수 오늘 날짜의 데이만 출력 28
    $today = $testDate->format('d') +1;
    
    // 날짜 형식을 월 / 일로 변경. 07 28
    $test = $testDate->format("m/d");
    
    // 날짜 형식을 요일로 number 받아옴. 월,화,수,목 월요일이 1 [1,2,3,4,5,6,7] 
    $test1 = $testDate->format('N');

    // 날짜 배열  php는 인덱스 1이 월요일이라 빈배열 삽입 필요
    $testArr = ['','월','화','수','목','금','토','일'];

    // testDate의 시간을 복사하여 실행할 때마다 1Day 씩 더한다. P1M = 1달씩 더함.
    $testDate->add(new DateInterval("P1D")); 

    // 내일 날짜부터 출력 7일
    for($i = 0; $i < 7; $i++) {
        $testDate->add(new DateInterval("P1D")); 
        echo $testDate->format("m/d").$testArr[$testDate->format('N')].'<br>';
    }

?>

```