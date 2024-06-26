let main = document.querySelector("#main");
let cursor = document.querySelector("#cursor");
let imageDiv =  document.querySelector("#image");

main.addEventListener("mousemove",function(coord){
    gsap.to(cursor,{
        x: coord.x,
        y: coord.y,
        duration:.75,
        ease: "back.out(1.4)"
    })
})

imageDiv.addEventListener("mouseenter",function(){
    cursor.innerHTML ="View More";
    gsap.to(cursor,{
        scale:4,
        backgroundColor:"rgb(110, 100, 100)",
    })
})
imageDiv.addEventListener("mouseleave",function(){
    cursor.innerHTML="";
    gsap.to(cursor,{
        scale: 1,
        backgroundColor:"#fff"
    })
})