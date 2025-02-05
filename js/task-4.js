const registerForm = document.querySelector(".login-form");

const submitHandler = (event) => {
  event.preventDefault();
  if (
    event.target.elements.email.value.trim() === "" ||
    event.target.elements.password.value.trim() === ""
  ) {
    alert("All form fields must be filled in");
  } else {
    const inputsObject = {};
    inputsObject.email = event.target.elements.email.value.trim();
    inputsObject.password = event.target.elements.password.value.trim();
    console.log(inputsObject);

    event.target.elements.email.value = "";
    event.target.elements.password.value = "";
  }
};

registerForm.addEventListener("submit", submitHandler);
