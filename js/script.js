function checkAnswer(questionId, correctAnswer, event) {
  const buttons = document.querySelectorAll(`#${questionId} button`);
  const result = document.getElementById(`result-${questionId}`);

  buttons.forEach((btn, index) => {
    const choice = String.fromCharCode(65 + index); // A, B, C, D
    btn.disabled = true; // disable after answering
    if (choice === correctAnswer) {
      btn.style.backgroundColor = "green";
    } else {
      btn.style.backgroundColor = "#ccc";
    }
  });

  const clickedButton = event.target;
  const clickedChoice = clickedButton.textContent.trim().charAt(0);

  if (clickedChoice === correctAnswer) {
    result.textContent = "✅ Correct!";
    result.className = "result correct";
  } else {
    result.textContent = `❌ Incorrect. The correct answer is ${correctAnswer}.`;
    result.className = "result incorrect";
  }
}
