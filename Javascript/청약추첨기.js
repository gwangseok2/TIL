// 청약 참가자
const getHumans = (length) => {
  if (!Number.isInteger(length) || length <= 0) {
    length = 1; // 기본적으로 하나의 청약 신청자를 생성하도록 설정
  }

  return Array(length)
    .fill("")
    .map((el, idx) => ({
      name: `${idx + 1}번째 청약 신청자`,
    }));
};

// 청약 랜덤번호
const getRandomNumber = (length) => {
  // 음수 방지
  if (!Number.isInteger(length) || length <= 0) {
    throw new Error("Invalid length parameter. It must be a positive integer.");
  }

  return Math.floor(Math.random() * length);
};

const humans = getHumans(20);
const randomNumber = getRandomNumber(humans.length);
const resultHuman = humans[randomNumber].name;

console.log("청약당첨자:", resultHuman);
