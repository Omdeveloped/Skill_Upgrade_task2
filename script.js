function validateForm() {
  let isValid = true;

  // Clear previous error messages
  document.getElementById("nameError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("messageError").textContent = "";

  // Validate Name
  let name = document.getElementById("name").value;
  if (name.trim() === "") {
    document.getElementById("nameError").textContent = "Name is required.";
    isValid = false;
  }

  // Validate Email
  let email = document.getElementById("email").value;
  let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (email.trim() === "") {
    document.getElementById("emailError").textContent = "Email is required.";
    isValid = false;
  } else if (!emailPattern.test(email)) {
    document.getElementById("emailError").textContent =
      "Please enter a valid email address.";
    isValid = false;
  }

  // Validate Message
  let message = document.getElementById("message").value;
  if (message.trim() === "") {
    document.getElementById("messageError").textContent =
      "Message is required.";
    isValid = false;
  }

  return isValid;
}
