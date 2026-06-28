const reviewButtons = document.querySelectorAll(".review-question");
const answerTitle = document.querySelector("[data-answer-title]");
const answerText = document.querySelector("[data-answer-text]");

reviewButtons.forEach((button) => {
  button.addEventListener("click", () => {
    reviewButtons.forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");

    if (answerTitle) {
      answerTitle.textContent = button.textContent.trim();
    }

    if (answerText) {
      answerText.textContent = button.dataset.answer || "这里还没有记录答案。";
    }
  });
});
