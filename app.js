// =========================
// 1. 질문 데이터 (각 축 2문항, 총 16문항)
// =========================
const questions = [
  // 대인관계
  { text: "나는 다른 사람의 부탁을 거절하지 못하는 편이다.", axis: "relation", style: "순응" },
  { text: "불공평하다고 느끼면 바로 지적한다.", axis: "relation", style: "맞섬" },
  { text: "갈등이 생기면 차라리 피하려 한다.", axis: "relation", style: "회피" },

  // 문제해결
  { text: "힘든 상황에서 혼자보다 타인과 함께 해결하려 한다.", axis: "coping", style: "순응" },
  { text: "중요한 문제는 충돌을 감수하더라도 해결한다.", axis: "coping", style: "맞섬" },
  { text: "불편한 문제는 미루거나 외면하고 싶다.", axis: "coping", style: "회피" },

  // 자기중심
  { text: "주변 기대에 맞추려 노력한다.", axis: "self", style: "순응" },
  { text: "남들이 반대해도 나만의 기준을 따른다.", axis: "self", style: "맞섬" },
  { text: "중요한 선택에서 확신이 없어 결정을 미룬다.", axis: "self", style: "회피" },

  // 정서표현
  { text: "내 감정을 드러내기보다 분위기에 맞춘다.", axis: "emotion", style: "순응" },
  { text: "불편해도 내 감정을 직접 말한다.", axis: "emotion", style: "맞섬" },
  { text: "속상해도 겉으로는 드러내지 않는다.", axis: "emotion", style: "회피" }
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
    순응: "인간관계에서 타인을 배려하고 맞추는 편입니다. 원만하지만 하고 싶은 말을 못 해 답답함이 쌓일 수 있습니다.",
    맞섬: "인간관계에서 자기 의견을 똑 부러지게 말하는 편입니다. 정의롭지만 마찰이 잦을 수 있습니다.",
    회피: "인간관계에서 갈등을 피하려는 편입니다. 평온해 보이지만 속마음이 억눌릴 수 있습니다."
  },
  coping: {
    순응: "문제를 함께 해결하려 합니다. 협력적이지만 자기 방식은 약할 수 있습니다.",
    맞섬: "문제에 정면으로 맞섭니다. 추진력이 강하지만 부담이 될 수 있습니다.",
    회피: "문제를 미루거나 덮습니다. 당장은 편안하지만 쌓이면 무력감이 커질 수 있습니다."
  },
  self: {
    순응: "주변의 기대와 시선을 의식합니다. 인정받으면 힘이 나지만 자기 선택은 약할 수 있습니다.",
    맞섬: "자기 선택을 중요시합니다. 주도성이 강하지만 고집이 세다는 인상을 줄 수 있습니다.",
    회피: "책임과 결정을 미루는 경향이 있습니다. 편할 수 있지만 자기 길을 찾는 데 어려움이 있습니다."
  },
  emotion: {
    순응: "분위기를 살피며 감정을 표현합니다. 무난하지만 속마음을 알기 어렵다는 말을 들을 수 있습니다.",
    맞섬: "감정을 솔직히 드러냅니다. 진솔하지만 때로는 감정이 격해질 수 있습니다.",
    회피: "감정을 속으로 삼키고 겉으로는 괜찮은 척합니다. 주변은 편할 수 있지만 본인은 답답해질 수 있습니다."
  }
};

// =========================
// 4. 종합 해설 (12유형, 긍정 표현 포함, 400~500자)
// =========================
const combinedPatterns = [
  {
    combo: { relation: "순응", self: "순응" },
    interpretation: "당신은 관계와 자기 정체성 모두에서 타인의 기대를 크게 의식합니다. 겉으로는 원만하고 착해 보이지만, 자신의 선택은 희미해져 공허함이 찾아올 수 있습니다. ‘남들이 원하는 나’와 ‘진짜 나’ 사이의 틈이 커질 수 있으니, 작은 일부터 내 욕구를 존중하는 연습이 필요합니다. 하지만 분명한 장점은, 당신은 주변을 배려하고 신뢰받는 사람이군요. 이 점은 큰 자산이 됩니다."
  },
  {
    combo: { relation: "순응", coping: "회피" },
    interpretation: "당신은 관계에서는 배려가 많지만, 문제 상황에서는 미루는 경향이 있습니다. 평온해 보일 수 있지만 중요한 순간마다 기회를 놓치며 무력감이 쌓일 수 있습니다. 남들을 위해 애쓰다 본인의 길은 미뤄지기 쉽습니다. 사소한 문제라도 직접 선택해보는 경험이 힘이 됩니다. 당신은 다정하고 평화로운 기운을 주는 사람이군요, 그 따뜻함은 주변을 편안하게 합니다."
  },
  {
    combo: { relation: "순응", emotion: "맞섬" },
    interpretation: "당신은 관계에서는 순응적이지만 감정은 솔직하게 드러내려 합니다. 평소엔 온화하지만 억눌린 마음이 작은 자극에도 격렬한 분노로 터질 수 있습니다. ‘사소한 것에 화내는 나’를 보며 스스로 당황할 수도 있습니다. 감정을 조금씩 나누는 연습이 내면을 편안하게 합니다. 동시에 당신은 진심을 숨기지 않고 표현할 줄 아는 용기를 지닌 사람이군요."
  },
  {
    combo: { coping: "회피", self: "회피" },
    interpretation: "문제와 책임을 동시에 미루는 성향입니다. 당장은 편할 수 있지만 시간이 지날수록 무력감이 깊어지고, ‘어차피 안 될 거야’라는 체념에 빠질 위험이 있습니다. 남들은 모르는 비애가 당신 안에 자리잡을 수 있습니다. 작은 결정을 스스로 해내는 것이 회복의 시작입니다. 그러나 당신은 동시에 자신을 보호하는 본능이 강한 사람이군요, 이 힘은 위기 속에서 자원을 아끼는 지혜로 작용할 수 있습니다."
  },
  {
    combo: { relation: "맞섬", coping: "맞섬" },
    interpretation: "관계와 문제 상황에서 모두 적극적이고 주도적입니다. 추진력과 리더십이 있지만, 충돌이 잦아 피곤해질 수 있습니다. 자기 확신이 강한 만큼 상대를 밀어붙이게 되면 관계가 갈라질 수도 있습니다. 협력의 방식을 배운다면 더 건강한 리더십으로 발전할 수 있습니다. 당신은 스스로의 길을 힘 있게 개척하는 리더형 인물이군요."
  },
  {
    combo: { self: "맞섬", emotion: "맞섬" },
    interpretation: "자기 기준이 뚜렷하고 감정도 솔직하게 표현합니다. 진솔하고 주체적이지만, 때로는 ‘너무 자기중심적’이라는 말을 듣기 쉽습니다. 지나친 자기 주장은 주변의 지지를 약화시키고 고립으로 이어질 위험이 있습니다. 솔직함 속에 상대를 배려하는 균형을 찾는 것이 필요합니다. 하지만 당신은 분명히 진정성 있는 자기표현을 통해 타인에게 신뢰를 주는 사람이군요."
  },
  {
    combo: { relation: "맞섬", emotion: "회피" },
    interpretation: "관계에서는 주장을 강하게 드러내지만 감정은 숨깁니다. 겉으로는 단단해 보이지만 속에서는 답답함이 쌓여 번아웃이 될 수 있습니다. 진심을 드러내지 못해 대화가 겉돌기도 합니다. 안전한 상황에서 내 감정을 조금씩 표현하는 연습이 필요합니다. 동시에 당신은 책임을 지려는 강인함을 가진 사람이군요, 이는 큰 신뢰를 만들어냅니다."
  },
  {
    combo: { relation: "순응", self: "맞섬" },
    interpretation: "겉으로는 양보하지만 속으로는 자기 기준을 고집합니다. 주변에서는 착한 사람으로 보이지만 때로는 이해하기 어려운 행동을 보일 수 있습니다. 이중적인 태도는 자신과 타인 모두를 혼란스럽게 만듭니다. 진심을 조금 더 드러내는 연습이 겉과 속의 차이를 줄여줍니다. 그러나 당신은 동시에 상황을 원만하게 이끄는 외교적 재능을 지닌 사람이군요."
  },
  {
    combo: { coping: "맞섬", emotion: "회피" },
    interpretation: "문제 상황에서는 과감히 부딪히지만 감정은 억누릅니다. 겉으로는 추진력이 있지만 내면은 지쳐 공허감이 쌓입니다. 강한 행동력 뒤에 감정을 묻어두다 보면 어느 순간 번아웃이 찾아올 수 있습니다. 신뢰할 수 있는 사람에게 마음을 털어놓는 것이 큰 힘이 됩니다. 당신은 실천력이 강한 행동가군요, 그 힘은 주위에 활기를 불어넣습니다."
  },
  {
    combo: { self: "순응", emotion: "회피" },
    interpretation: "자기 욕구를 억누르고 타인의 기대에 맞춥니다. 감정마저 드러내지 않으니 대화는 표면적이고 진심은 고립됩니다. 겉으로는 온화하지만 내면에서는 답답함과 비애가 쌓일 수 있습니다. 작은 것부터 솔직히 나누는 것이 갈등을 풀어줍니다. 하지만 동시에 당신은 타인의 마음을 세심하게 배려하는 섬세한 사람이군요."
  },
  {
    combo: { relation: "맞섬", coping: "회피" },
    interpretation: "관계에서는 강하게 주장하지만 실제 문제 앞에서는 회피하는 경향이 있습니다. 말과 행동의 불일치로 신뢰가 흔들릴 수 있고 스스로도 모순을 느낄 수 있습니다. 자기 표현과 실제 행동이 조화를 이루도록 의식하는 노력이 필요합니다. 그러나 당신은 분명히 타인의 부당함을 그냥 넘기지 않는 정의로운 사람이군요."
  },
  {
    combo: { relation: "균형", coping: "균형", self: "균형", emotion: "균형" },
    interpretation: "당신은 어느 한쪽에 치우치지 않고 상황에 맞게 순응, 맞섬, 회피를 적절히 사용할 줄 아는 성숙한 사람입니다. 이는 정신적 유연성과 건강함을 보여줍니다. 갈등 상황에서도 균형을 잃지 않고 자신을 지키면서도 타인과 협력할 수 있는 능력을 갖추고 있습니다. 다만 각 영역에서 어떤 경향이 조금 더 드러나는지는 세부 해설에서 확인해 보시길 권합니다. 당신은 분명 성숙하고 지혜로운 사람이군요."
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
    <p>${i + 1}. [${axisKorean(q.axis)}] ${q.text}</p>
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
      scores[axis][style] = (scores[axis][style] / counts[axis][style]).toFixed(2);
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
    let maxVal = Math.max(...Object.values(scores[axis]));
    let candidates = Object.keys(scores[axis]).filter(k => scores[axis][k] == maxVal);
    result[axis] = candidates[Math.floor(Math.random() * candidates.length)];
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
// 9. 카테고리 한글 변환
// =========================
function axisKorean(axis) {
  switch (axis) {
    case "relation": return "관계";
    case "coping": return "문제해결";
    case "self": return "자기중심";
    case "emotion": return "정서표현";
    default: return axis;
  }
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
    output += `<p>당신은 신경증적 성향이 뚜렷하지 않고, 순응·맞섬·회피를 상황에 맞게 잘 활용하는 정신적으로 성숙한 사람이군요. 이는 큰 장점이며, 각 영역에서의 세부 경향은 아래 해설을 통해 확인해 보시길 권합니다.</p>`;
  }

  // 세부 해설
  output += `<h3>세부 해설</h3>`;
  for (let axis in dominant) {
    output += `<p><b>${axisKorean(axis)}</b>: ${dominant[axis]} — ${axisDescriptions[axis][dominant[axis]]}</p>`;
  }

  document.getElementById("result").innerHTML = output;
}
