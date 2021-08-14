const questionsListEl = document.querySelector(".questions");

questionsListEl.addEventListener("click", function (e) {
  const listEl = e.target.closest(".question-item");
  const questionEl = listEl.querySelector(".question");

  if (
    listEl &&
    (e.target === questionEl || e.target.parentNode === questionEl)
  ) {
    //Show the answer
    const answerEl = listEl.querySelector(".answer-closed");
    answerEl.classList.toggle("answer-opened");

    //Toggle the icons
    const iconEl = listEl.querySelector(".question-icon");
    answerEl.classList.contains("answer-opened")
      ? (iconEl.name = "close-outline")
      : (iconEl.name = "add-outline");
  }
});
