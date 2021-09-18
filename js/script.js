let switcher = document.getElementById("switcher");
let getBtn = document.getElementById("getBtn");
let jokeBox = document.getElementById("joke");
let loading = false;
getBtn.addEventListener("click", getJoke);

window.onload = () => {
  getJoke();
};

async function getJoke() {
  loading = true;
  if (loading === true) {
    jokeBox.innerHTML = `<p style="text-align:center;padding:40px">Loading....</p>`;
  }
  const joke = await window
    .fetch("https://icanhazdadjoke.com/", {
      headers: {
        Accept: "application/json",
      },
    })
    .then((response) => {
      loading = false;
      return response.json();
    })
    .catch((err) => console.log(err));
  if (joke) {
    jokeBox.innerHTML = `<p>${joke.joke}</p>`;
  }
}

switcher.addEventListener("click", () => {
  if (document.body.dataset.theme === "dark") {
    document.body.dataset.theme = "light";
    switcher.innerHTML = '<i class="far fa-moon"></i>';
  } else {
    document.body.dataset.theme = "dark";
    switcher.innerHTML = '<i class="far fa-sun"></i>';
  }
});
