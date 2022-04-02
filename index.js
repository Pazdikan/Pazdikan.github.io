const animateCSS = (element, animation, prefix = "animate__") =>
  // We create a Promise and return it
  new Promise((resolve, reject) => {
    const animationName = `${prefix}${animation}`;
    element.classList.add(`${prefix}animated`, animationName);
    element.style.opacity = 1;

    // When the animation ends, we clean the classes and resolve the Promise
    function handleAnimationEnd(event) {
      event.stopPropagation();
      //   element.classList.remove(`${prefix}animated`, animationName);
      resolve("Animation ended");
    }

    element.addEventListener("animationend", handleAnimationEnd, {
      once: true,
    });
  });

setTimeout(function () {
  document
    .getElementsByClassName("shortabout")[0]
    .classList.add("animate__animated", "animate__fadeIn");
}, 1500);

setTimeout(function () {
  document
    .getElementsByClassName("socials")[0]
    .classList.add("animate__animated", "animate__fadeIn");
}, 1500);

document.querySelectorAll(".about").forEach((element) => {
  document.addEventListener("scroll", () => {
    if (window.scrollY >= element.getBoundingClientRect().top) {
      if (!element.classList.contains("animate__animated")) {
        if (element.classList.contains("about-l"))
          animateCSS(element, "bounceInLeft");
        else if (element.classList.contains("about-r"))
          animateCSS(element, "bounceInRight");
      }
    }
  });
});

tippy('.fa-java', {
  content: 'Java',
  theme: 'light-border',
  animation: 'scale',
});

tippy('.fa-faucet', {
  content: 'Spigot (Bukkit)',
  theme: 'light-border',
  animation: 'scale',
});

tippy('.mysql', {
  content: 'MySQL',
  theme: 'light-border',
  animation: 'scale',
});

tippy('.fa-cube', {
  content: 'My main Hypixel account stats.',
  theme: 'light-border',
  animation: 'scale',
});