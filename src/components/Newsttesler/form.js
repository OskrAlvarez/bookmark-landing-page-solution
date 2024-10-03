import Swal from "sweetalert2";

const form = document.querySelector(".form");
const errorMessage = document.querySelector(".error-message");
const inputControl = document.querySelector(".form-control");
const errorIcon = document.querySelector(".error-icon");

const getDataForm = (form) => {
  const formData = new FormData(form);
  const data = Object.fromEntries(formData);
  return data;
};

const validateEmail = (email, message) => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return message;
  }
};

const renderError = () => {
  errorMessage.classList.add("is-error");
  inputControl.classList.add("error-input");
  errorIcon.classList.add("is-error");
};

const removeErrors = () => {
  errorMessage.classList.remove("is-error");
  inputControl.classList.remove("error-input");
  errorIcon.classList.remove("is-error");
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = getDataForm(e.currentTarget);
  const isWrongEmailMessage = validateEmail(
    data.emailAdress,
    "Whoops, make sure it's an Email"
  );

  if (isWrongEmailMessage !== undefined) {
    errorMessage.textContent = isWrongEmailMessage;
    renderError();
  } else {
    removeErrors();
    Swal.fire({
      title: "Good job!",
      text: "Email was send successfully!",
      icon: "success",
    });
  }
});
