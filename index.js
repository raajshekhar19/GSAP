let timeLine = gsap.timeline();

timeLine.from("h2",{
    y:-20,
    opacity:0,
    duration:1,
    delay:.25
})
timeLine.from("h4",{
    y:-20,
    opacity:0,
    duration:1,
    stagger : .4
})