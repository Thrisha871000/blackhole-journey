document.querySelectorAll(".box").forEach(box => {
  box.addEventListener("click", () => {
    box.classList.toggle("flip");
  });
});
window.addEventListener("load", () => {
  const boxes = document.querySelectorAll(".box");

  boxes.forEach((box, index) => {
    setTimeout(() => {
      box.classList.add("hint");
    }, index * 300); // small delay for each card
  });
});
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