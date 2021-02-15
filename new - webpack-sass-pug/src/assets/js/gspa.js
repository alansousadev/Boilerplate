import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger.js";

gsap.registerPlugin(ScrollTrigger);

var mr = document.querySelectorAll(".fade-in");
mr && mr.forEach((function (t) {
  gsap.fromTo(t, {
    autoAlpha: 0
  }, {
    autoAlpha: 1,
    ease: "power2.inOut",
    duration: 1.5,
    scrollTrigger: {
      trigger: t,
      start: "top 90%",
      toggleActions: "play none none none"
    }
  })
}));

var vr = document.querySelectorAll(".fade-in-left");
vr && vr.forEach((function (t) {
  gsap.fromTo(t, {
    autoAlpha: 0,
    x: "-=30"
  }, {
    autoAlpha: 1,
    x: "+=30",
    ease: "power2.inOut",
    duration: 1.5,
    scrollTrigger: {
      trigger: t,
      start: "top 90%",
      toggleActions: "play none none none"
    }
  })
}));

var gr = document.querySelectorAll(".fade-in-right");
gr && gr.forEach((function (t) {
  gsap.fromTo(t, {
    autoAlpha: 0,
    x: "+=30"
  }, {
    autoAlpha: 1,
    x: "-=30",
    ease: "power2.inOut",
    duration: 1.5,
    scrollTrigger: {
      trigger: t,
      start: "top 90%",
      toggleActions: "play none none none"
    }
  })
}));

var yr = document.querySelectorAll(".fade-in-down");
yr && yr.forEach((function (t) {
  gsap.fromTo(t, {
    autoAlpha: 0,
    y: "-=30"
  }, {
    autoAlpha: 1,
    y: "+=30",
    ease: "power2.inOut",
    duration: 1.5,
    scrollTrigger: {
      trigger: t,
      start: "top 90%",
      toggleActions: "play none none none"
    }
  })
}));

var br = document.querySelectorAll(".fade-in-up");
br && br.forEach((function (t) {
  gsap.fromTo(t, {
    autoAlpha: 0,
    y: "+=30"
  }, {
    autoAlpha: 1,
    y: "-=30",
    ease: "power2.inOut",
    duration: 1.5,
    scrollTrigger: {
      trigger: t,
      start: "top 90%",
      toggleActions: "play none none none"
    }
  })

}));

var be = document.querySelectorAll(".thumb-skew1");
be && be.forEach((function (t) {
  gsap.fromTo(t, {
    x: "-=20",
    // autoAlpha: 0.8,
  }, {
    x: "+=80",
    // autoAlpha: 1,
    ease: "power2.inOut",
    duration: 2.5,
    skewY:-20, skewX:20,
    scrollTrigger: {
      trigger: t,
      // skewY:-20, skewX:0,
      start: "top 100%",
      toggleActions: "play none none none"
    }
  })
}));

var be = document.querySelectorAll(".thumb-skew2");
be && be.forEach((function (t) {
  gsap.fromTo(t, {
    x: "+=30",
    // autoAlpha: 0.8,
  }, {
    x: "-=80",
    // autoAlpha: 1,
    ease: "power2.inOut",
    duration: 2.5,
    skewY:20, skewX:-20,
    scrollTrigger: {
      trigger: t,
      // skewY:-20, skewX:0,
      width: 190,
      height: 150,
      // start: "top 90%",
      toggleActions: "play none none none"
    }
  })
}));
