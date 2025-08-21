// =========================
// 1. 질문 데이터 (36문항)
// =========================
const questions = [
  // 대인관계 - 순응
  { text: "나는 다른 사람의 부탁을 거절하지 못하는 편이다.", axis: "relation", style: "순응" },
  { text: "조화를 위해 내 생각을 양보하는 경우가 많다.", axis: "relation", style: "순응" },
  { text: "상대방을 실망시키지 않으려 노력한다.", axis: "relation", style: "순응" },

  // 대인관계 - 맞섬
  { text: "불공평하다고 느끼면 바로 지적한다.", axis: "relation", style: "맞섬" },
  { text: "내 의견이 다르다면 상대방을 설득하려 한다.", axis: "relation", style: "맞섬" },
  { text: "갈등이 생겨도 내 원칙을 고수한다.", axis: "relation", style: "맞섬" },

  // 대인관계 - 회피
  { text: "갈등이 생기면 차라리 피하려 한다.", axis: "relation", style: "회피" },
  { text: "논쟁이 불편하면 대화를 얼버무리고 넘어간다.", axis: "relation", style: "회피" },
  { text: "대립이 예상되면 미리 물러서는 편이다.", axis: "relation", style: "회피" },

  // 문제대응 - 순응
  { text: "상대방의 요구가 부담스러워도 대체로 들어준다.", axis: "coping", style: "순응" },
  { text: "힘든 상황에서 혼자보다 타인과 함께 해결하려 한다.", axis: "coping", style: "순응" },
  { text: "불편해도 상대가 원하는 방식에 맞추려 한다.", axis: "coping", style: "순응" },

  // 문제대응 - 맞섬
  { text: "힘든 상황이 닥치면 정면으로 부딪힌다.", axis: "coping", style: "맞섬" },
  { text: "중요한 문제는 충돌을 감수하더라도 해결한다.", axis: "coping", style: "맞섬" },
  { text: "어려운 결정을 미루지 않고 빠르게 내린다.", axis: "coping", style: "맞섬" },

  // 문제대응 - 회피
  { text: "불편한 문제는 미루거나 외면하고 싶다.", axis: "coping", style: "회피" },
  { text: "다툼이 될 것 같으면 자리를 피한다.", axis: "coping", style: "회피" },
  { text: "감정적으로 힘든 주제는 꺼내지 않는다.", axis: "coping", style: "회피" },

  // 자기중심 - 순응
  { text: "다른 사람의 인정이 있어야 마음이 놓인다.", axis: "self", style: "순응" },
  { text: "주변 기대에 맞추려 노력한다.", axis: "self", style: "순응" },
  { text: "혼자 결정하기보다 타인의 의견을 참고한다.", axis: "self", style: "순응" },

  // 자기중심 - 맞섬
  { text: "내 선택은 다른 사람의 의견보다 우선한다.", axis: "self", style: "맞섬" },
  { text: "남들이 반대해도 나만의 기준을 따른다.", axis: "self", style: "맞섬" },
  { text: "도움 없이 혼자 해결하려 한다.", axis: "self", style: "맞섬" },

  // 자기중심 - 회피
  { text: "책임을 져야 하는 상황이 부담스럽다.", axis: "self", style: "회피" },
  { text: "중요한 선택에서 확신이 없어 결정을 미룬다.", axis: "self", style: "회피" },
  { text: "다른 사람에게 의존하다가도 쉽게 회피한다.", axis: "self", style: "회피" },

  // 정서표현 - 순응
  { text: "내 감정을 드러내기보다 분위기에 맞춘다.", axis: "emotion", style: "순응" },
  { text: "주변 사람의 눈치를 보며 감정을 표현한다.", axis: "emotion", style: "순응" },
  { text: "갈등이 생기면 내 감정을 눌러 참는다.", axis: "emotion", style: "순응" },

  // 정서표현 - 맞섬
  { text: "기쁘거나 화날 때 솔직히 표현한다.", axis: "emotion", style: "맞섬" },
  { text: "불편해도 내 감정을 직접 말한다.", axis: "emotion", style: "맞섬" },
  { text: "감정이 생기면 즉시 행동으로 드러낸다.", axis: "emotion", style: "맞섬" },

  // 정서표현 - 회피
  { text: "속상해도 겉으로는 드러내지 않는다.", axis: "emotion", style: "회피" },
  { text: "남 앞에서는 울거나 화내지 않는다.", axis: "emotion", style: "회피" },
  { text: "감정을 삼키고 아무렇지 않은 척한다.", axis: "emotion", style: "회피" }
];

// =========================
// 2. 라벨
// =========================
const labels = [
  { value: 1, text: "전혀 그렇지 않다" },
  { value: 2, text: "그렇지 않다" },
  { value: 3, text: "보통이다" },
  { value: 4, text: "그렇다" },
  { value: 5, text: "매우 그렇다" }
];

// =========================
// 3. 축별 해설 (일상적 설명)
// =========================
const axisDescriptions = {
  relation: {
    순응: "인간관계에서 타인을 배려하고 맞추는 편입니다. 덕분에 원만한 관계를 유지하기 쉽지만, 하고 싶은 말을 못 하고 손해를 보는 경우도 있습니다.",
    맞섬: "인간관계에서 자기 의견을 똑 부러지게 말하는 편입니다. 불공평함을 잘 참지 않지만, 때로는 주변과 마찰이 생길 수 있습니다.",
    회피: "인간관계에서 갈등을 피하고 상황을 부드럽게 넘기려 합니다. 갈등은 줄지만, 속마음을 드러내지 않아 답답함이 쌓일 수 있습니다."
  },
  coping: {
    순응: "문제 상황에서 다른 사람과 보조를 맞추며 해결하려는 편입니다. 협력적이지만 자기 방식으로 풀어가는 힘은 약할 수 있습니다.",
    맞섬: "문제가 생기면 직접 부딪혀 해결하려 합니다. 추진력이 강하지만, 주변의 부담을 키울 때도 있습니다.",
    회피: "힘든 문제를 미루거나 덮고 넘어가려는 편입니다. 당장은 편안하지만, 쌓이다 보면 더 큰 짐이 될 수 있습니다."
  },
  self: {
    순응: "자기 기준보다는 주변의 기대와 시선을 의식하는 편입니다. 인정받으면 힘이 나지만, 스스로의 선택은 약해질 수 있습니다.",
    맞섬: "자기 선택을 중요하게 여기고 독립적인 편입니다. 자기 주도성이 강하지만, 고집이 세다는 평가를 받을 수 있습니다.",
    회피: "책임지는 자리를 부담스러워하고 결정을 미루는 경향이 있습니다. 편할 수 있지만 자기 길을 찾는 데 어려움이 있습니다."
  },
  emotion: {
    순응: "분위기를 살피며 감정을 표현합니다. 큰 마찰은 줄지만, 속마음을 알기 어렵다는 말을 들을 수 있습니다.",
    맞섬: "감정을 솔직히 드러내는 편입니다. 진솔하지만 감정이 격해지면 상대가 당황할 수 있습니다.",
    회피: "감정을 속으로 삼키고 겉으로는 괜찮은 척합니다. 주변은 편할 수 있지만, 본인은 속으로 답답함이 커질 수 있습니다."
  }
};

// =========================
// 4. 신경증적 위험
// =========================
const neuroticRisks = {
  순응: "순응에 치우치면 자기 욕구가 억눌리고, 타인의 인정에만 매달려 답답함이나 우울로 이어질 수 있습니다.",
  맞섬: "맞섬에 치우치면 주변과 충돌이 잦아 피곤해지고, 스스로 고립감을 느낄 위험이 있습니다.",
  회피: "회피에 치우치면 책임과 갈등을 미루면서 무력감이 커지고, 결국 불안과 우울로 이어질 수 있습니다."
};

// =========================
// 5. 종합 해설 (대표적 유형들)
// =========================
const combinedPatterns = [
  {
    combo: { relation: "순응", self: "순응" },
    interpretation: "당신은 관계에서도, 자기중심성에서도 타인의 기대를 많이 의식합니다. 주변과 원만하게 지내는 데 강점이 있지만, 정작 자신의 길을 분명히 정하고 나아가는 힘은 약해질 수 있습니다. 착한 사람, 좋은 사람으로 불리지만, 내 마음은 채워지지 않아 공허함이 찾아올 수 있습니다. 작은 것부터 ‘내가 원하는 선택’을 연습하면 균형을 찾을 수 있습니다."
  },
  {
    combo: { relation: "맞섬", coping: "맞섬" },
    interpretation: "당신은 관계와 문제 상황 모두에서 적극적이고 주도적인 태도를 보입니다. 자기 주도성이 강하고 추진력이 있지만, 주변과의 마찰도 잦을 수 있습니다. 때로는 ‘내가 맞다’는 확신이 갈등을 더 크게 만들기도 합니다. 내 의지를 지키면서도 상대와 협력하는 방법을 배우면 힘이 더 균형 있게 발휘됩니다."
  }
  // 필요시 다른 패턴도 추가 가능
];

// =========================
// 6. 폼 자동 생성
// =========================
const form = document.getElementById("testForm");
questions.forEach((q, i) => {
  const div = document.createElement("div");
  div.className = "question";
  div.innerHTML = `
    <p>${i + 1}. ${q.text}</p>
    ${labels.map(l =>
      `<label><input type="radio" name="q${i}" value="${l.value}" required> ${l.text}</label>`
    ).join(" ")}
  `;
  form.appendChild(div);
});

// =========================
// 7. 점수 계산
// =========================
function calculateResults(answers) {
  let scores = {
    relation: { 순응: 0, 맞섬: 0, 회피: 0 },
    coping: { 순응: 0, 맞섬: 0, 회피: 0 },
    self: { 순응: 0, 맞섬: 0, 회피: 0 },
    emotion: { 순응: 0, 맞섬: 0, 회피: 0 }
  };
  let counts = JSON.parse(JSON.stringify(scores));

  answers.forEach((ans, i) => {
    const q = questions[i];
    const score = parseInt(ans);
    scores[q.axis][q.style] += score;
    counts[q.axis][q.style]++;
  });

  for (let axis in scores) {
    for (let style in scores[axis]) {
      scores[axis][style] = Math.round(scores[axis][style] / counts[axis][style]);
    }
  }
  return scores;
}

// =========================
// 8. 우세 성향 판정
// =========================
function classify(scores) {
  let result = {};
  for (let axis in scores) {
    let maxStyle = Object.keys(scores[axis]).reduce((a, b) =>
      scores[axis][a] >= scores[axis][b] ? a : b
    );
    result[axis] = maxStyle;
  }
  return result;
}

// =========================
// 9. 종합 해설 찾기
// =========================
function getCombinedInterpretation(dominant) {
  let interpretations = [];
  combinedPatterns.forEach(rule => {
    let match = true;
    for (let key in rule.combo) {
      if (dominant[key] !== rule.combo[key]) {
        match = false;
        break;
      }
    }
    if (match) interpretations.push(rule.interpretation);
  });
  return interpretations;
}

// =========================
// 10. 제출
// =========================
function submitTest() {
  const answers = questions.map((q, i) => {
    const val = document.querySelector(`input[name="q${i}"]:checked`);
    return val ? val.value : 3;
  });

  const scores = calculateResults(answers);
  const dominant = classify(scores);

  let output = "<h2>결과</h2>";

  // 종합 해설
  const combined = getCombinedInterpretation(dominant);
  output += `<h3>종합 해설</h3>`;
  if (combined.length > 0) {
    combined.forEach(intp => output += `<p>${intp}</p>`);
  } else {
    output += `<p>당신의 성향은 균형적이거나 특정한 위험 패턴이 뚜렷하지 않습니다.</p>`;
  }

  // 세부 해설
  output += `<h3>세부 해설</h3>`;
  for (let axis in dominant) {
    output += `<p><b>${axis}</b>: ${dominant[axis]} — ${axisDescriptions[axis][dominant[axis]]}</p>`;
    output += `<p>세부 점수 → 순응:${scores[axis]["순응"]}, 맞섬:${scores[axis]["맞섬"]}, 회피:${scores[axis]["회피"]}</p>`;
    output += `<p><i>⚠ 신경증적 위험: ${neuroticRisks[dominant[axis]]}</i></p>`;
  }

  document.getElementById("result").innerHTML = output;
}
