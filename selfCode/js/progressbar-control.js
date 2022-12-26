// self제작

function progressBarControl(data) {
    // 선택자 & 변수
    const $progressBar = document.querySelector(".progress-bar-fill");
    const $tooltipText = document.querySelector(".tooltip-text");
    const $saveTime = document.querySelector(".save-time");
    const $triangle = document.querySelector(".triangle");
    const $tooltip = document.querySelector(".progress-tooltip");
    const $goalText = document.querySelector(".goal-text");
    const barWidth = document.querySelector(".progress-bar1").clientWidth;

    // @추후 nowBarData 변수에 BE 데이터 연동 필요 (나눔온도 누적 분).
    let nowBarData = data;

    // 컬러 배열
    const colorArray = ["#5cb6ea", "#32c65f", "#fc9824", "#ea5c5c"];

    // 컬러 필터
    const arrayResult = [0, 1001, 2001, 3001].filter((x) => {
        return x <= nowBarData;
    }).length;

    // 프로그래스 바 길이
    let nowBarWidth = (nowBarData / 5000) * 100;
    nowBarWidth = nowBarWidth > 100 ? 100 : nowBarWidth;

    // 트라이앵글 좌표
    let trianglePosition = barWidth * (nowBarData / 5000) - 4;
    trianglePosition = trianglePosition > 0 ? trianglePosition : 0;

    // 누적 5000분 보다 클 때
    if (nowBarData >= 5000) {
        trianglePosition = barWidth * (5000 / 5000) - 4;
        $triangle.style.display = "none";
        $goalText.classList.add("finish");
        $goalText.innerText = "5,000분 적립 달성 완료!";
    } else {
        $triangle.style.cssText = `transform:translateX(${trianglePosition}px) rotate(90deg); border-left-color:${
            colorArray[arrayResult - 1]
        }`;
    }

    // 데이터 조건문
    if (nowBarData >= 4300) {
        $tooltipText.style.cssText = `text-align:right; color:${colorArray[arrayResult - 1]}; opacity:1;`;
    } else if (nowBarData >= 450) {
        $tooltipText.style.cssText = `left:-27px; transform:translateX(${trianglePosition}px); color:${
            colorArray[arrayResult - 1]
        }; opacity:1;`;
    } else {
        $tooltipText.style.cssText = `color:${colorArray[arrayResult - 1]}; opacity:1;`;
    }

    // 색깔변경
    $progressBar.style.cssText = `width:${nowBarWidth}%; background-color:${colorArray[arrayResult - 1]}`;
    $tooltip.style.cssText = `border-left-color:${colorArray[arrayResult - 1]}`;
    $saveTime.style.color = `${colorArray[arrayResult - 1]}`;
    // 콤마추가
    $saveTime.innerText = nowBarData >= 1000 ? nowBarData.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : nowBarData;
}
