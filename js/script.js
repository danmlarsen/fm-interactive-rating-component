const mainEl = document.querySelector("main");
const formEl = document.getElementById("rating-form");

formEl.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData);

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
});
