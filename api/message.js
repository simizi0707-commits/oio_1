// Vercel 서버리스 함수: 응원 문장 하나를 골라 이름과 함께 돌려줍니다.
const MESSAGES = [
  "오늘도 충분히 잘하고 있어요.",
  "작은 한 걸음이 큰 변화를 만들어요.",
  "지금의 노력은 반드시 빛을 발할 거예요.",
  "힘들 땐 잠깐 쉬어 가도 괜찮아요.",
  "당신의 웃음이 누군가에게 힘이 돼요.",
  "어제보다 조금 나아졌다면 그걸로 충분해요.",
  "포기하지 않는 마음이 가장 멋져요.",
  "오늘 하루도 당신 편이 여기 있어요.",
  "실수해도 괜찮아요. 다시 하면 되니까요.",
  "당신은 생각보다 훨씬 강한 사람이에요.",
  "천천히 가도 멈추지만 않으면 돼요.",
  "오늘의 당신을 마음껏 칭찬해 주세요.",
  "좋은 일이 곧 찾아올 거예요.",
  "당신의 속도대로 가면 돼요.",
  "있는 그대로의 당신이 참 소중해요.",
];

module.exports = (req, res) => {
  const raw = typeof req.query?.name === "string" ? req.query.name : "";
  const name = raw.trim().slice(0, 20) || "여러분";
  const message = MESSAGES[Math.floor(Math.random() * MESSAGES.length)];

  res.setHeader("Cache-Control", "no-store");
  res.status(200).json({ name, message });
};
