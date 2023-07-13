document.addEventListener("DOMContentLoaded", function () {
  let title = "welcome to pazdikan.party";
  let index = 0;
  let direction = 1;

  setInterval(function () {
    document.title = title.substring(0, index);

    if (index === title.length) {
      direction = -1;
    } else if (index === 0) {
      direction = 1;
    }

    index += direction;
  }, 750);
});

function showTab(tab) {
  document.querySelectorAll(`.active`).forEach((element) => {
    element.classList.remove("active");
  });

  document.getElementById(tab).classList.add("active");
}

window.onload = function () {
  var hash = window.location.hash;

  console.log(hash);

  switch (hash) {
    case "#pc":
    case "#setup":
      showTab("setup");
      break;

    case "#s":
    case "#socials":
      showTab("socials");
      break;

    default:
      break;
  }
};
