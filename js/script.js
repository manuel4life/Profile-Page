const toggleButton = document.getElementById("toggle-button");
const saveButton = document.getElementById("save-button");
const nameElement = document.getElementById("name");
const emailElement = document.getElementById("email");
const bioText = document.getElementById("bio-text");
const bioTextarea = document.getElementById("bio");

let viewMode = true;

toggleButton.addEventListener("click", () => {
  viewMode = !viewMode;
  toggleView();
});

saveButton.addEventListener("click", () => {
  // Update content
  nameElement.textContent = prompt("Enter your name:", nameElement.textContent);
  emailElement.textContent = prompt(
    "Enter your email:",
    emailElement.textContent
  );
  bioText.textContent = bioTextarea.value;

  viewMode = true;
  toggleView();
});

function toggleView() {
  if (viewMode) {
    bioText.classList.remove("hidden");
    bioTextarea.classList.add("hidden");
    toggleButton.classList.remove("hidden");
    saveButton.classList.add("hidden");
  } else {
    bioText.classList.add("hidden");
    bioTextarea.classList.remove("hidden");
    bioTextarea.value = bioText.textContent;
    toggleButton.classList.add("hidden");
    saveButton.classList.remove("hidden");
  }
}
console.log("JavaScript loaded successfully!");
