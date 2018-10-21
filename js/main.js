var slider1Li = document.querySelectorAll("#slider-1 li")
var headerLi = document.querySelectorAll("header nav ul:first-child li")
var slider1Actual = 0
var slider1width = 480*4 + (450)
var ww = window.innerWidth

window.addEventListener("resize",()=>{
    ww = window.innerWidth
})

slider1Li.forEach(element => {
    element.addEventListener("click", () => {
        sliderChange(element)
    })
})

headerLi.forEach(element => {
    element.addEventListener("click",() => {
        headerLi.forEach(el => {
            el.classList.remove("active")
        })
        element.classList.add("active")
    })
})


function sliderChange(e){
    var ratio = slider1width / 5;
    console.log(ratio)
    if (!e.classList.contains("active")) {
        slider1Li.forEach(element => {
            element.classList.remove("active")
        })
        if (e.classList.contains("next")) {
            if (slider1Actual < 2) {
                slider1Actual++;
            } else {
                slider1Actual = 0;
            }
        } else {
            slider1Actual = parseInt(e.classList[0])
        }
        switch(slider1Actual){
            case 0:
            slider1Li[slider1Actual].classList.add("active")
                TweenMax.to(document.querySelector("#slider-1 .body"), 0.5,{transform: "translateX(0px)"})
                break;
            case 1:
                slider1Li[slider1Actual].classList.add("active")
                TweenMax.to(document.querySelector("#slider-1 .body"), 0.5,{transform: "translateX(-"+(slider1width/2)+"px)"})
                break;
            case 2:
                slider1Li[slider1Actual].classList.add("active")
                TweenMax.to(document.querySelector("#slider-1 .body"), 0.5,{transform: "translateX(-"+(slider1width)+"px)"})
                break;
        }
    }
}