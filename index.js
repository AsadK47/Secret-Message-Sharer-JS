document
  .querySelector("form")
  .addEventListener("submit", event => {
    event.preventDefault();

    document.querySelector("#message-form").classList.add("hide");
    document.querySelector("#link-div").classList.remove("hide");

    const messageInput = document.querySelector("#message-input");
    const encrypted = btoa(messageInput.value);

    const linkInput = document.querySelector("#link-input");
    linkInput.value = `${window.location}` + `#${encrypted}`;
  });

function copyTextFunction() {
  var copyText = document.getElementById("link-input")

  copyText.select();
  copyText.setSelectionRange(0, 99999);

  document.execCommand("copy");
}