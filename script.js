
function checkAnswers() {
  let score = 0;

  
  const answers = { q1: "a", q2: "a", q3: "b" };

  
  for (let q in answers) {
    const selected = document.querySelector(`input[name="${q}"]:checked`);
    if (selected && selected.value === answers[q]) {
      score++;
    }
  }

  
  document.getElementById("result").innerText =
    "You scored " + score + " out of " + Object.keys(answers).length;
}