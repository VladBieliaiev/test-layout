import "../scss/main.scss";

// TAB SWITCHING

const tabs = document.querySelectorAll(".tab");
const phoneForm = document.querySelector(".phone-form");
const emailForm = document.querySelector(".email-form");
const formContainer = document.querySelector(".form-container");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((t) => t.classList.remove("active"));

    tab.classList.add("active");

    if (tab.dataset.tab === "phone") {
      phoneForm.style.display = "flex";
      emailForm.style.display = "none";
      formContainer.classList.remove("email-active");
    } else {
      phoneForm.style.display = "none";
      emailForm.style.display = "flex";
      formContainer.classList.add("email-active");
    }

    checkButtonState();
  });
});

// REGISTRATION BUTTON STATE MANAGEMENT

const registerButton = document.querySelector(".btn-register");
const allInputs = document.querySelectorAll(".form-input");

function checkButtonState() {
  const visibleForm =
    phoneForm.style.display !== "none" ? phoneForm : emailForm;

  const visibleInputs = visibleForm.querySelectorAll(".form-input");

  const allFilled = Array.from(visibleInputs).every(
    (input) => input.value.trim() !== ""
  );

  if (allFilled) {
    registerButton.classList.add("enabled");
  } else {
    registerButton.classList.remove("enabled");
  }
}

allInputs.forEach((input) => {
  input.addEventListener("input", checkButtonState);
});

checkButtonState();
