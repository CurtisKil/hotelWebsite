let messages = [];
const addMessage = (e) => {
  e.preventDefault();
  let message = {
    id: Date.now(),
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };
  messages.push(message);
  document.querySelector("form").reset();
  console.log(messages);

  // Save to Local Storage
  localStorage.setItem("GuestMessages", JSON.stringify(messages));
};
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("btn").addEventListener("click", addMessage);
});
