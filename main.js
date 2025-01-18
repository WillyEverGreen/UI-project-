// main.js

// Select the hamburger and close button
const hamburger = document.getElementById("hamburger");

const navLinks = document.querySelector(".part2"); // Select the part2 class which contains the links

// Toggle the 'active' class when hamburger is clicked (open menu)
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active"); // Open the menu by adding the 'active' class
});

// adding gsap
function page1Animation() {
  var tl = gsap.timeline();

  tl.from(["nav h1", ".part2 a", ".part2 button"], {
    y: -30,
    opacity: 0,
    delay: 1,
    duration: 0.7,
    stagger: 0.15,
  });

  tl.from(
    [".center-part1 h1"],
    {
      x: -500,
      opacity: 0,
      duration: 0.5,
    },
    "-=0.3"
  );
  tl.from([".center-part1 p"], {
    x: -100,
    opacity: 0,
    duration: 0.4,
  });
  tl.from([".center-part1 button"], {
    x: -100,
    opacity: 0,
    duration: 0.3,
  });
  tl.from(
    [".circle"],
    {
      opacity: 0,
      duration: 0.5,
    },
    "-=0.5"
  );
  tl.from(
    [".center-part2 img"],
    {
      x: 2000,
      opacity: 0,
      delay: 0.2,
      duration: 0.7,
    },
    "-=0.5"
  );
}
page1Animation();

function page2Animation() {
  var tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".features",
      scroller: "body",
    },
  });
  tl2.from(".section1-bottom h1", {
    left: "-100vw",
    opacity: 0,
    duration: 0.7,
    start: "top 50%",
    end: "top 0%",

    scrub: 2,
  });
  // tl2.from(".feature1", {
  //   x: -300,
  //   opacity: 0,
  // });
  tl2.from(".feature1 .icon", {
    y: 900,
    duration: 2.2,
  });
  tl2.from(".feature2", {
    y: 300,
    opacity: 0,
  });
  tl2.from(".feature3", {
    x: 300,
    opacity: 0,
  });
  tl2.from(".section1-bottom button", {
    opacity: 0,
    delay: 0.3,
  });
}
page2Animation();

function page3Animation() {
  var tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".s3part2 h1",
      scroller: "body",
    },
  });

  tl2.from("h4", {
    x: -500,
    opacity: 0,
    delay: 0.5,
  });
  tl2.from(
    "img",
    {
      //   x: -500,
      opacity: 0,
    },
    "-=0.5"
  );
  tl2.from(
    "button",
    {
      y: 600,
      opacity: 0,
      duration: 1,
      delay: 0.5,
    },
    "-=0.5"
  );
  tl2.from(
    "p",
    {
      opacity: 0,

      delay: 1,
    },
    "-=0.5"
  );
}
page3Animation();

var tl4 = gsap.timeline({
  scrollTrigger: {
    trigger: ".section5",
    scroller: "body",
  },
});

tl4.from(".b1", {
  x: -600,
  opacity: 0,
  delay: 0.7,
});

tl4.from(
  ".b2",
  {
    x: 600,
    opacity: 0,
    delay: 0.7,
  },
  "-=1.2"
);
