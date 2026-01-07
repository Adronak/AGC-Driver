const form = document.querySelector("#contact-form");

if (form) {
  const status = form.querySelector(".form__status");
  const button = form.querySelector(".btn");
  const buttonLabel = button ? button.querySelector("span") : null;
  const defaultLabel = buttonLabel ? buttonLabel.textContent : "";

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    form.classList.add("is-sent");

    if (status) {
      status.textContent = "Merci, votre demande a ete envoyee.";
    }

    if (button) {
      button.classList.remove("pulse");
      void button.offsetWidth;
      button.classList.add("pulse");
      button.disabled = true;
      if (buttonLabel) {
        buttonLabel.textContent = "Envoye";
      }

      setTimeout(() => {
        button.disabled = false;
        button.classList.remove("pulse");
        if (buttonLabel) {
          buttonLabel.textContent = defaultLabel;
        }
      }, 1200);
    }
  });
}
