document.addEventListener("DOMContentLoaded", () => {
  const languageButton = document.getElementById("languageButton");
  const languageSpan = document.getElementById("languageSpan");

  languageButton.addEventListener("click", () => {
    // Add fade-out class to initiate the transition
    languageSpan.classList.add("fade-out");

    languageSpan.addEventListener(
      "transitionend",
      () => {
        languageSpan.textContent =
          languageSpan.textContent === "ru" ? "en" : "ru";

        languageSpan.classList.remove("fade-out");
        languageSpan.classList.add("fade-in");

        languageSpan.addEventListener(
          "transitionend",
          () => {
            languageSpan.classList.remove("fade-in");
          },
          { once: true }
        );
      },
      { once: true }
    );
  });
});
