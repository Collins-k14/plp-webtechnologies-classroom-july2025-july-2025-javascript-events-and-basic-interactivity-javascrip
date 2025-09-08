// 🌗 Dark/Light Mode Toggle
document.getElementById("themeToggle").addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
});

// 🔑 Show/Hide Password
document.getElementById("togglePassword").addEventListener("click", function () {
  const passwordInput = document.getElementById("password");
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    this.textContent = "Hide Password";
  } else {
    passwordInput.type = "password";
    this.textContent = "Show Password";
  }
});

// 📋 Custom Form Validation + Counter
let registerCount = 0;

document.getElementById("registerForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let isValid = true;

  // Clear old errors
  document.querySelectorAll(".error").forEach(el => el.textContent = "");

  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  // Username validation
  if (username === "") {
    document.getElementById("usernameError").textContent = "Username is required.";
    isValid = false;
  } else if (username.length < 3) {
    document.getElementById("usernameError").textContent = "Username must be at least 3 characters.";
    isValid = false;
  }

  // Email validation
  if (email === "") {
    document.getElementById("emailError").textContent = "Email is required.";
    isValid = false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    document.getElementById("emailError").textContent = "Enter a valid email address.";
    isValid = false;
  }

  // Password validation
  if (password === "") {
    document.getElementById("passwordError").textContent = "Password is required.";
    isValid = false;
  } else if (password.length < 6) {
    document.getElementById("passwordError").textContent = "Password must be at least 6 characters.";
    isValid = false;
  }

  if (isValid) {
    // ✅ Increase counter
    registerCount++;
    document.getElementById("registerCount").textContent = registerCount;

    // ✅ Show success modal
    document.getElementById("modalMessage").textContent = "🎉 Registration successful!";
    document.getElementById("modal").style.display = "block";

    // Reset form
    this.reset();
    document.getElementById("togglePassword").textContent = "Show Password";
  }
});

// 📦 Modal Close Handling
const modal = document.getElementById("modal");
const closeBtn = document.querySelector(".close");

closeBtn.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

// ❓ FAQ Toggle
document.querySelectorAll(".faq-question").forEach(btn => {
  btn.addEventListener("click", function () {
    const answer = this.nextElementSibling;
    answer.style.display = (answer.style.display === "block") ? "none" : "block";
  });
});
