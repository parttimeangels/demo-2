
// =========================
// 1. 질문 데이터 (24문항)
// =========================
const questions = [
  // 대인관계 - 순응
  { text: "나는 다른 사람의 부탁을 거절하지 못하는 편이다.", axis: "relation", style: "순응" },
  { text: "상대방을 실망시키지 않으려 노력한다.", axis: "relation", style: "순응" },

  // 대인관계 - 맞섬
  { text: "불공평하다고 느끼면 바로 지적한다.", axis: "relation", style: "맞섬" },
  { text: "갈등이 생겨도 내 원칙을 고수한다.", axis: "relation", style: "맞섬" },

  // 대인관계 - 회피
  { text: "갈등이 생기면 차라리 피하려 한다.", axis: "relation", style: "회피" },
  { text: "대립이 예상되면 미리 물러서는 편이다.", axis: "relation", style: "회피" },

  // 문제해결 - 순응
  { text: "힘든 상황에서 혼자보다 타인과 함께 해결하려 한다.", axis: "coping", style: "순응" },
  { text: "불편해도 상대가 원하는 방식에 맞추려 한다.", axis: "coping", style: "순응" },

  // 문제해결 - 맞섬
  { text: "힘든 상황이 닥치면 정면으로 부딪힌다.", axis: "coping", style: "맞섬" },
  { text: "중요한 문제는 충돌을 감수하더라도 해결한다.", axis: "coping", style: "맞섬" },

  // 문제해결 - 회피
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
    순응: "인간관계에서 타인을 배려하고 맞추는 편입니다. 겉으로는 원만해 보이지만, 속으로는 공허함이나 답답함이 쌓일 수 있습니다.",
    맞섬: "인간관계에서 자기 의견을 분명히 내세우는 편입니다. 주체적이지만, 때로는 사소한 갈등에도 격렬한 분노가 표출될 수 있습니다.",
    회피: "인간관계에서 갈등을 피하려 합니다. 표면적 평화는 유지되지만, 진심을 나누지 못해 대화가 겉도는 경향이 있습니다."
  },
  coping: {
    순응: "문제를 다른 사람과 협력해 해결하려는 편입니다. 안정적이지만 자기만의 방식은 희미해질 수 있습니다.",
    맞섬: "문제를 정면으로 부딪혀 해결하려 합니다. 추진력이 있으나, 무리하다 번아웃으로 이어질 수 있습니다.",
    회피: "문제를 미루거나 덮으려 합니다. 당장은 편안하지만, 속으로는 불안과 무력감이 깊어질 수 있습니다."
  },
  self: {
    순응: "자기 기준보다 주변 기대에 더 끌립니다. 인정받으면 힘이 나지만, 자기만의 길은 공허해질 수 있습니다.",
    맞섬: "자기 선택을 우선시하고 독립적입니다. 그러나 남들이 모르는 비애와 고립감을 느낄 수 있습니다.",
    회피: "책임과 결정을 미루는 편입니다. 표면적으로는 자유로워 보이나, 내면엔 무력감이 쌓여갑니다."
  },
  emotion: {
    순응: "분위기에 맞춰 감정을 표현합니다. 큰 충돌은 줄지만, 진심이 겉돌아 관계가 피상적으로 느껴질 수 있습니다.",
    맞섬: "감정을 솔직히 드러냅니다. 진솔하지만, 감정 폭발로 상대가 당황하거나 갈등이 증폭될 수 있습니다.",
    회피: "감정을 속으로 삼킵니다. 겉으로는 평온해 보이나, 속에서는 분노가 쌓여 남들도 모르는 고통을 키웁니다."
  }
};

// =========================
// 4. 종합 해설 (12유형, 신경증적 갈등 어휘 반영)
// =========================
const combinedPatterns = [
  {
    combo: { relation: "순응", self: "순응" },
    interpretation: "당신은 관계와 자기 정체성 모두에서 타인의 기대를 크게 의식합니다. 겉으로는 착하고 원만해 보이지만, 속에서는 공허함과 남들이 모르는 비애가 쌓일 수 있습니다. 진심을 드러내지 못한 채 겉도는 대화를 이어가다 보면, 내면의 분노가 누적되어 우울로 번질 위험이 있습니다."
  },
  {
    combo: { relation: "순응", coping: "회피" },
    interpretation: "당신은 관계에서는 상대를 배려하지만, 문제는 미루려는 경향이 있습니다. 평온해 보이지만 중요한 순간에 자기 주도권을 잃어버릴 수 있고, 내면의 불만은 쌓여갑니다. 겉으로 순응하면서 속은 무력감에 잠식되어 공허함이 깊어질 수 있습니다."
  },
  {
    combo: { relation: "순응", emotion: "맞섬" },
    interpretation: "관계에서는 양보하지만 감정은 솔직히 드러냅니다. 평소엔 온화해 보이나, 사소한 갈등이 분노로 폭발해 주변을 놀라게 할 수 있습니다. 억눌린 분노가 터질 때 자신조차 놀라며 번아웃에 가까운 피로를 경험할 수 있습니다."
  },
  {
    combo: { coping: "회피", self: "회피" },
    interpretation: "문제와 책임을 동시에 미루는 경향이 있습니다. 당장은 편안하나 시간이 지날수록 무력감과 공허함이 깊어집니다. 겉으로는 아무렇지 않아 보여도, 남들은 모르는 비애가 내면을 잠식하고 기회를 놓치게 만들 수 있습니다."
  },
  {
    combo: { relation: "맞섬", coping: "맞섬" },
    interpretation: "관계와 문제 상황에서 모두 정면돌파하는 성향입니다. 추진력이 있지만, 끊임없는 긴장 속에서 번아웃 위험이 큽니다. 때때로 사소한 문제에도 과도한 분노를 표출해 관계가 불편해질 수 있습니다."
  },
  {
    combo: { self: "맞섬", emotion: "맞섬" },
    interpretation: "자기 기준이 뚜렷하고 감정도 솔직히 표현합니다. 주체적이지만, 타인의 시선을 배려하지 못하면 고립감을 느끼며, 속으로는 남들이 알 수 없는 비애를 경험할 수 있습니다."
  },
  {
    combo: { relation: "맞섬", emotion: "회피" },
    interpretation: "관계에서는 자기주장을 내세우지만, 감정은 억누릅니다. 겉으로는 강해 보이나 속에는 공허감과 피로가 쌓여 번아웃으로 이어질 수 있습니다. 겉도는 대화 속에서 내면의 진심이 사라질 수 있습니다."
  },
  {
    combo: { relation: "순응", self: "맞섬" },
    interpretation: "겉으로는 순응하지만 속으로는 자기 기준을 고집합니다. 주변은 착하다 보지만, 내면에는 분노가 차곡차곡 쌓여 사소한 일에도 폭발할 수 있습니다. 겉도는 대화가 이어지며 자기 표현이 왜곡될 위험이 있습니다."
  },
  {
    combo: { coping: "맞섬", emotion: "회피" },
    interpretation: "문제 해결에는 적극적이지만 감정은 숨깁니다. 추진력은 강하지만, 감정을 억누르는 동안 번아웃이 찾아올 수 있습니다. 남들이 모르는 비애가 내면에서 무겁게 자리잡을 수 있습니다."
  },
  {
    combo: { self: "순응", emotion: "회피" },
    interpretation: "자기 욕구를 억누르고 타인에게 맞추며, 감정도 표현하지 않습니다. 겉으로는 순응적이지만, 진심을 나누지 못한 대화가 반복되며 공허함과 답답함이 쌓일 수 있습니다."
  },
  {
    combo: { relation: "맞섬", coping: "회피" },
    interpretation: "관계에서는 주장을 강하게 하지만, 문제 앞에서는 회피합니다. 모순적인 태도로 신뢰를 잃을 수 있고, 스스로는 공허감과 불안 사이에서 흔들릴 수 있습니다."
  },
  {
    combo: { relation: "균형", coping: "균형", self: "균형", emotion: "균형" },
    interpretation: "당신은 비교적 균형 잡힌 태도를 가집니다. 하지만 때로는 정체성이 희미하게 느껴지고, 진심이 겉돌며 공허감이 남을 수 있습니다. 핵심 가치를 분명히 하면 내면의 안정이 강화됩니다."
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
    <p>${i + 1}. ${q.text}</p>
    ${labels.map(l =>
      `<label><input type="radio" name="q${i}" value="${l.value}" required> ${l.text}</label>`
    ).join(" ")}
  `;
  form.appendChild(div);
});

// =========================
// 6. 점수 계산
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
// 7. 우세 성향 판정 (동점 시 랜덤 선택)
// =========================
function classify(scores) {
  let result = {};
  for (let axis in scores) {
    let max = Math.max(...Object.values(scores[axis]));
    let candidates = Object.keys(scores[axis]).filter(k => scores[axis][k] === max);
    let chosen = candidates[Math.floor(Math.random() * candidates.length)];
    result[axis] = chosen;
  }
  return result;
}

// =========================
// 8. 종합 해설 찾기
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
// 9. 제출
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
    output += `<p>당신은 균형 잡힌 성향을 보이지만, 내면에는 보이지 않는 갈등이 있을 수 있습니다.</p>`;
  }

  // 세부 해설
  output += `<h3>세부 해설</h3>`;
  const axisNames = { relation: "관계", coping: "문제해결", self: "자기중심", emotion: "정서표현" };
  for (let axis in dominant) {
    output += `<p><b>${axisNames[axis]}</b>: ${dominant[axis]} — ${axisDescriptions[axis][dominant[axis]]}</p>`;
  }

  document.getElementById("result").innerHTML = output;
}
