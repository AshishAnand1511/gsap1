var tl = gsap.timeline();
tl.from("#nav>img,#nav2,#nav3", {
  y: -100,
  delay: 0.5,
  duration: 1,
  opacity: 0,
  stagger: 0.2,
})
tl.from("#main>h1", {
    dealy: .2,
    y: 100,
    opacity: 0,
    stagger:.2
});
tl.from("#img1", {
    delay:.2,
    x: -100,
    opacity:0
})
tl.from("#img2", {
    delay:.2,
    x: 200,
    opacity:0
})
tl.from("#img3", {
    delay:.2,
    y: 200,
    opacity:0
})
tl.from("#img4", {
    delay:.2,
    y: 200,
    opacity:0
})