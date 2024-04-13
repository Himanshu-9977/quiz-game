let tl = gsap.timeline()

tl.from('.intro-elem', {
    opacity: 0,
    y: '100%',
    stagger: .4,
    rotate: '2deg',
    duration: 1.2
})