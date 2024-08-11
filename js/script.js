const mainEl = document.querySelector("main");
const formEl = document.getElementById("rating-form");

const renderThankYou = function (data) {
  const { score } = data;

  mainEl.innerHTML = `
    <img
        src="images/illustration-thank-you.svg"
        alt="Thank you illustration"
        class="rating__illustration"
      />
      <p class="rating__selected-rating-text">You selected ${score} out of 5</p>
      <h1>Thank you!</h1>
      <p>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    `;

  mainEl.classList.add("rating--completed");
};

const renderError = function (error) {
  if (formEl.querySelector(".rating__form-error")) return;

  formEl.insertAdjacentHTML(
    "afterbegin",
    `<p class="rating__form-error">${error}</p>`
  );
};

const handleSubmit = function (e) {
  e.preventDefault();

  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData);

  if (!data?.score || data.score < 1 || data.score > 5)
    return renderError("Please pick a rating before submitting.");

  renderThankYou(data);
};

formEl.addEventListener("submit", handleSubmit);
