// =========================
// 1. 질문 데이터 (각 축별 2문항, 총 16문항)
// =========================
const questions = [
  // 대인관계 - 순응
  { text: "나는 다른 사람의 부탁을 거절하지 못하는 편이다.", axis: "relation", style: "순응" },
  { text: "상대방을 실망시키지 않으려 노력한다.", axis: "relation", style: "순응" },

  // 대인관계 - 맞섬
  { text: "불공평하다고 느끼면 바로 지적한다.", axis: "relation", style: "맞섬" },
  { text: "내 의견이 다르다면 상대방을 설득하려 한다.", axis: "relation", style: "맞섬" },

  // 대인관계 - 회피
  { text: "갈등이 생기면 차라리 피하려 한다.", axis: "relation", style: "회피" },
  { text: "대립이 예상되면 미리 물러서는 편이다.", axis: "relation", style: "회피" },

  // 문제대응 - 순응
  { text: "힘든 상황에서 혼자보다 타인과 함께 해결하려 한다.", axis: "coping", style: "순응" },
  { text: "불편해도 상대가 원하는 방식에 맞추려 한다.", axis: "coping", style: "순응" },

  // 문제대응 - 맞섬
  { text: "힘든 상황이 닥치면 정면으로 부딪힌다.", axis: "coping", style: "맞섬" },
  { text: "중요한 문제는 충돌을 감수하더라도 해결한다.", axis: "coping", style: "맞섬" },

  // 문제대응 - 회피
  { text: "불편한 문제는 미루거나 외면하고 싶다.", axis: "coping", style: "회피" },
  { text: "감정적으로 힘든 주제는 꺼내지 않는다.", axis: "coping", style: "회피" },

  // 자기중심 - 순응
  { text: "다른 사람의 인정이 있어야 마음이 놓인다.", axis: "self", style: "순응" },
  { text: "주변 기대에 맞추려 노력한다.", axis: "self", style: "순응" },

  // 자기중심 - 맞섬
  { text: "내 선택은 다른 사람의 의견보다 우선한다.", axis: "self", style: "맞섬" },
  { text: "남들이 반대해도 나만의 기준을 따른다.", axis: "self", style: "맞섬" },

  // 자기중심 - 회피
  { text: "책임을 져야 하는 상황이 부담스럽다.", axis: "self", style: "회피" },
  { text: "중요한 선택에서 확신이 없어 결정을 미룬다.", axis: "self", style: "회피" },

  // 정서표현 - 순응
  { text: "내 감정을 드러내기보다 분위기에 맞춘다.", axis: "emotion", style: "순응" },
  { text: "갈등이 생기면 내 감정을 눌러 참는다.", axis: "emotion", style: "순응" },

  // 정서표현 - 맞섬
  { text: "기쁘거나 화날 때 솔직히 표현한다.", axis: "emotion", style: "맞섬" },
  { text: "불편해도 내 감정을 직접 말한다.", axis: "emotion", style: "맞섬" },

  // 정서표현 - 회피
  { text: "속상해도 겉으로는 드러내지 않는다.", axis: "emotion", style: "회피" },
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
// 3. 축별 해설
// =========================
const axisDescriptions = {
  relation: {
    순응: "관계에서 타인을 배려하고 맞추는 편입니다. 겉으론 원만하지만 내 속은 답답할 수 있습니다.",
    맞섬: "관계에서 자기 의견을 적극적으로 내세웁니다. 분명하지만 갈등도 잦습니다.",
    회피: "관계에서 갈등을 피하려 합니다. 평온해 보이나 진심은 겉돌 수 있습니다."
  },
  coping: {
    순응: "문제를 함께 해결하려는 협력적 태도를 가집니다.",
    맞섬: "문제 앞에서 직접 부딪히는 편입니다. 추진력은 크지만 번아웃 위험도 있습니다.",
    회피: "문제를 미루거나 외면합니다. 당장은 편하지만 시간이 갈수록 부담이 쌓일 수 있습니다."
  },
  self: {
    순응: "자기 기준보다는 주변의 기대를 따르는 편입니다.",
    맞섬: "자기 기준이 분명하고 독립적입니다. 고립의 위험도 있습니다.",
    회피: "책임과 결정을 미룹니다. 내 길을 찾는 데 어려움이 있습니다."
  },
  emotion: {
    순응: "분위기를 살피며 감정을 표현합니다. 속마음은 억눌릴 수 있습니다.",
    맞섬: "감정을 솔직히 드러냅니다. 진솔하지만 격렬할 때도 있습니다.",
    회피: "감정을 삼키고 겉으로는 괜찮은 척합니다. 남들은 편해도 본인은 힘듭니다."
  }
};

// =========================
// 4. 종합 해설 (12유형, 개선판)
// =========================
const combinedPatterns = [
  {
    combo: { relation: "순응", self: "순응" },
    interpretation: "관계와 자기 정체성 모두에서 타인의 기대를 크게 의식합니다. 겉으로는 원만하고 착해 보이지만, 자신의 선택은 희미해져 공허함이 찾아올 수 있습니다. ‘남들이 원하는 나’와 ‘진짜 나’ 사이의 틈이 커질 수 있으니, 작은 일부터 내 욕구를 존중하는 연습이 필요합니다."
  },
  {
    combo: { relation: "순응", coping: "회피" },
    interpretation: "관계에서는 배려가 많지만, 문제 상황에서는 미루는 경향이 있습니다. 평온해 보일 수 있지만 중요한 순간마다 기회를 놓치며 무력감이 쌓일 수 있습니다. 남들을 위해 애쓰다 본인의 길은 미뤄지기 쉽습니다. 사소한 문제라도 직접 선택해보는 경험이 힘이 됩니다."
  },
  {
    combo: { relation: "순응", emotion: "맞섬" },
    interpretation: "관계에서는 순응적이지만 감정은 솔직하게 드러내려 합니다. 평소엔 온화하지만 억눌린 마음이 작은 자극에도 격렬한 분노로 터질 수 있습니다. ‘사소한 것에 화내는 나’를 보며 스스로 당황할 수도 있습니다. 감정을 조금씩 나누는 연습이 내면을 편안하게 합니다."
  },
  {
    combo: { coping: "회피", self: "회피" },
    interpretation: "문제와 책임을 동시에 미루는 성향입니다. 당장은 편할 수 있지만 시간이 지날수록 무력감이 깊어지고, ‘어차피 안 될 거야’라는 체념에 빠질 위험이 있습니다. 남들은 모르는 비애가 당신 안에 자리잡을 수 있습니다. 작은 결정을 스스로 해내는 것이 회복의 시작입니다."
  },
  {
    combo: { relation: "맞섬", coping: "맞섬" },
    interpretation: "관계와 문제 상황에서 모두 적극적이고 주도적입니다. 추진력과 리더십이 있지만, 충돌이 잦아 피곤해질 수 있습니다. 자기 확신이 강한 만큼 상대를 밀어붙이게 되면 관계가 갈라질 수도 있습니다. 협력의 방식을 배운다면 더 건강한 리더십으로 발전할 수 있습니다."
  },
  {
    combo: { self: "맞섬", emotion: "맞섬" },
    interpretation: "자기 기준이 뚜렷하고 감정도 솔직하게 표현합니다. 진솔하고 주체적이지만, 때로는 ‘너무 자기중심적’이라는 말을 듣기 쉽습니다. 지나친 자기 주장은 주변의 지지를 약화시키고 고립으로 이어질 위험이 있습니다. 솔직함 속에 상대를 배려하는 균형을 찾는 것이 필요합니다."
  },
  {
    combo: { relation: "맞섬", emotion: "회피" },
    interpretation: "관계에서는 주장을 강하게 드러내지만 감정은 숨깁니다. 겉으로는 단단해 보이지만 속에서는 답답함이 쌓여 번아웃이 될 수 있습니다. 진심을 드러내지 못해 대화가 겉돌기도 합니다. 안전한 상황에서 내 감정을 조금씩 표현하는 연습이 필요합니다."
  },
  {
    combo: { relation: "순응", self: "맞섬" },
    interpretation: "겉으로는 양보하지만 속으로는 자기 기준을 고집합니다. 주변에서는 착한 사람으로 보이지만 때로는 이해하기 어려운 행동을 보일 수 있습니다. 이중적인 태도는 자신과 타인 모두를 혼란스럽게 만듭니다. 진심을 조금 더 드러내는 연습이 겉과 속의 차이를 줄여줍니다."
  },
  {
    combo: { coping: "맞섬", emotion: "회피" },
    interpretation: "문제 상황에서는 과감히 부딪히지만 감정은 억누릅니다. 겉으로는 추진력이 있지만 내면은 지쳐 공허감이 쌓입니다. 강한 행동력 뒤에 감정을 묻어두다 보면 어느 순간 번아웃이 찾아올 수 있습니다. 신뢰할 수 있는 사람에게 마음을 털어놓는 것이 큰 힘이 됩니다."
  },
  {
    combo: { self: "순응", emotion: "회피" },
    interpretation: "자기 욕구를 억누르고 타인의 기대에 맞춥니다. 감정마저 드러내지 않으니 대화는 표면적이고 진심은 고립됩니다. 겉으로는 온화하지만 내면에서는 답답함과 비애가 쌓일 수 있습니다. 작은 것부터 솔직히 나누는 것이 갈등을 풀어줍니다."
  },
  {
    combo: { relation: "맞섬", coping: "회피" },
    interpretation: "관계에서는 강하게 주장하지만 실제 문제 앞에서는 회피하는 경향이 있습니다. 말과 행동의 불일치로 신뢰가 흔들릴 수 있고 스스로도 모순을 느낄 수 있습니다. 자기 표현과 실제 행동이 조화를 이루도록 의식하는 노력이 필요합니다."
  },
  {
    combo: { relation: "균형", coping: "균형", self: "균형", emotion: "균형" },
    interpretation: "네 가지 영역에서 균형 잡힌 태도를 보입니다. 상황에 따라 유연하게 적응하는 힘이 있지만, 확고한 가치가 부족하면 ‘정체성이 모호하다’는 불안을 느낄 수도 있습니다. 핵심 가치를 분명히 세워두면 안정감과 자기 확신이 더 커질 것입니다."
  }
];

// =========================
// 5. 폼 자동 생성
// =========================
const form = document.getElementById("testForm");
questions.forEach((q, i) => {
  const div = document.createElement("div");
  div.className = "question";
  div.innerHTML = `
    <p><b>[${axisToKorean(q.axis)}]</b> ${i + 1}. ${q.text}</p>
    ${labels.map(l =>
      `<label><input type="radio" name="q${i}" value="${l.value}" required> ${l.text}</label>`
    ).join(" ")}
  `;
  form.appendChild(div);
});

// =========================
// 6. 축 이름 변환
// =========================
function axisToKorean(axis) {
  switch(axis) {
    case "relation": return "관계";
    case "coping": return "문제해결";
    case "self": return "자신과의 관계";
    case "emotion": return "정서표현";
    default: return axis;
  }
}

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
// 8. 우세 성향 판정 (동점 시 랜덤 선택)
// =========================
function classify(scores) {
  let result = {};
  for (let axis in scores) {
    let styles = Object.keys(scores[axis]);
    let maxScore = Math.max(...styles.map(s => scores[axis][s]));
    let candidates = styles.filter(s => scores[axis][s] === maxScore);
    let chosen = candidates[Math.floor(Math.random() * candidates.length)];
    result[axis] = chosen;
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
    output += `<p>당신의 성향은 균형적이거나 특정 패턴이 뚜렷하지 않습니다.</p>`;
  }

  // 세부 해설
  output += `<h3>세부 해설</h3>`;
  for (let axis in dominant) {
    output += `<p><b>${axisToKorean(axis)}</b>: ${dominant[axis]} — ${axisDescriptions[axis][dominant[axis]]}</p>`;
  }

  document.getElementById("result").innerHTML = output;
}
