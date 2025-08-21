// 질문 데이터
const questions = [
  { text: "나는 상대방의 부탁을 거절하기 어렵다.", axis: "relation", reverse: false },
  { text: "갈등이 생기면 내 주장을 강하게 피력한다.", axis: "relation", reverse: true },
  { text: "다른 사람의 눈치를 많이 보는 편이다.", axis: "relation", reverse: false },
  { text: "의견이 달라도 상대방을 설득하려 한다.", axis: "relation", reverse: true },
  { text: "조화를 위해 내 생각을 양보하는 경우가 많다.", axis: "relation", reverse: false },
  { text: "불공평하다고 느끼면 바로 지적한다.", axis: "relation", reverse: true },
  { text: "다른 사람을 실망시키지 않으려 노력한다.", axis: "relation", reverse: false },
  { text: "상황이 불리해도 내 원칙을 지키려 한다.", axis: "relation", reverse: true },

  { text: "불편한 상황이 생기면 피하려 한다.", axis: "coping", reverse: false },
  { text: "갈등이 있어도 정면으로 부딪히는 편이다.", axis: "coping", reverse: true },
  { text: "문제를 미루다 보니 상황이 더 커지는 경우가 많다.", axis: "coping", reverse: false },
  { text: "힘들어도 바로 해결하려고 한다.", axis: "coping", reverse: true },
  { text: "싸움이 될 것 같으면 그냥 자리를 피한다.", axis: "coping", reverse: false },
  { text: "어려운 결정을 주저하지 않고 내린다.", axis: "coping", reverse: true },
  { text: "감정적으로 힘든 이야기는 꺼내지 않는다.", axis: "coping", reverse: false },
  { text: "중요한 문제라면 충돌을 감수하더라도 직면한다.", axis: "coping", reverse: true },

  { text: "중요한 결정을 혼자 내리기 어렵다.", axis: "self", reverse: false },
  { text: "다른 사람의 도움 없이 스스로 해결하려 한다.", axis: "self", reverse: true },
  { text: "인정받지 못하면 내 가치가 줄어든 것 같다.", axis: "self", reverse: false },
  { text: "스스로 만족할 수 있다면 남의 평가에 개의치 않는다.", axis: "self", reverse: true },
  { text: "누군가 곁에 있어야 마음이 편하다.", axis: "self", reverse: false },
  { text: "혼자만의 시간에서 힘을 얻는다.", axis: "self", reverse: true },
  { text: "사람들과 함께하지 않으면 불안하다.", axis: "self", reverse: false },
  { text: "나만의 기준으로 선택하고 행동한다.", axis: "self", reverse: true },

  { text: "감정을 속으로만 삼키는 편이다.", axis: "emotion", reverse: false },
  { text: "내 기분을 솔직하게 표현한다.", axis: "emotion", reverse: true },
  { text: "속상해도 티를 잘 내지 않는다.", axis: "emotion", reverse: false },
  { text: "즐겁거나 기쁘면 바로 얼굴에 드러난다.", axis: "emotion", reverse: true },
  { text: "남 앞에서 우는 걸 참는다.", axis: "emotion", reverse: false },
  { text: "가까운 사람에게 내 감정을 쉽게 털어놓는다.", axis: "emotion", reverse: true },
  { text: "화가 나도 표정을 감춘다.", axis: "emotion", reverse: false },
  { text: "감정이 생기면 즉시 말이나 행동으로 드러낸다.", axis: "emotion", reverse: true },
];

// 엔젤 유형 매핑
const angelTypes = {
  "순응-회피-의존-억제": "조용히 곁을 지키는 침묵의 엔젤",
  "순응-회피-의존-개방": "감정을 대신 느껴주는 공감의 엔젤",
  "순응-회피-독립-억제": "혼자 감내하는 그늘의 엔젤",
  "순응-회피-독립-개방": "상처를 드러내는 진솔한 엔젤",
  "순응-직면-의존-억제": "타협을 찾는 중재의 엔젤",
  "순응-직면-의존-개방": "따뜻하게 현실을 맞서는 엔젤",
  "순응-직면-독립-억제": "원칙을 지키는 성실한 엔젤",
  "순응-직면-독립-개방": "갈등 속에서도 희망을 전하는 엔젤",
  "맞섬-회피-의존-억제": "내적 불안을 숨기는 방어의 엔젤",
  "맞섬-회피-의존-개방": "솔직하게 불안을 드러내는 엔젤",
  "맞섬-회피-독립-억제": "차갑지만 꿋꿋한 엔젤",
  "맞섬-회피-독립-개방": "자유롭게 흐르는 저항의 엔젤",
  "맞섬-직면-의존-억제": "강하지만 내적으로는 의존적인 엔젤",
  "맞섬-직면-의존-개방": "함께 싸워주는 든든한 엔젤",
  "맞섬-직면-독립-억제": "현실을 들이대는 직설의 엔젤",
  "맞섬-직면-독립-개방": "새로운 길을 여는 개척의 엔젤"
};

// 폼 자동 생성
const form = document.getElementById("testForm");
questions.forEach((q, i) => {
  const div = document.createElement("div");
  div.className = "question";

  // 1~5점 라벨
  const labels = [
    { value: 1, text: "전혀 그렇지 않다" },
    { value: 2, text: "그렇지 않다" },
    { value: 3, text: "보통이다" },
    { value: 4, text: "그렇다" },
    { value: 5, text: "매우 그렇다" }
  ];

  div.innerHTML = `
    <p>${i + 1}. ${q.text}</p>
    ${labels.map(l => 
      `<label><input type="radio" name="q${i}" value="${l.value}" required> ${l.text}</label>`
    ).join(" ")}
  `;

  form.appendChild(div);
});

// 점수 계산
function calculateResults(answers) {
  let scores = { relation: 0, coping: 0, self: 0, emotion: 0 };
  let counts = { relation: 0, coping: 0, self: 0, emotion: 0 };

  answers.forEach((ans, i) => {
    const q = questions[i];
    let score = parseInt(ans);
    if (!q.reverse) score = 6 - score; // 역채점
    scores[q.axis] += score;
    counts[q.axis]++;
  });

  for (let axis in scores) {
    scores[axis] = Math.round(scores[axis] / counts[axis]);
  }
  return scores;
}

// 유형 분류
function classify(scores) {
  let type = "";
  type += scores.relation >= 4 ? "맞섬-" : "순응-";
  type += scores.coping >= 4 ? "직면-" : "회피-";
  type += scores.self >= 4 ? "독립-" : "의존-";
  type += scores.emotion >= 4 ? "개방" : "억제";
  return type;
}

// 제출
function submitTest() {
  const answers = questions.map((q, i) => {
    const val = document.querySelector(`input[name="q${i}"]:checked`);
    return val ? val.value : 3; // 무응답 → 3점 중립 처리
  });

  const scores = calculateResults(answers);
  const type = classify(scores);
  const angel = angelTypes[type];

  document.getElementById("result").innerHTML = `
    <h2>결과</h2>
    <p><b>유형:</b> ${type}</p>
    <p><b>엔젤 캐릭터:</b> ${angel}</p>
    <p><b>축 점수:</b> 대인관계=${scores.relation}, 문제대응=${scores.coping}, 자기중심=${scores.self}, 정서표현=${scores.emotion}</p>
  `;
}
