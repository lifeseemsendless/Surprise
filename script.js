function checkName() {
  const input = document.getElementById("nameInput").value.trim().toLowerCase();
  const message = document.getElementById("message");

  if (input === "alanka") {
    window.location.href = "main.html";
  } else {
    message.innerText = "You are not the one.";
    message.style.color = "#ffdede";
  }
}
