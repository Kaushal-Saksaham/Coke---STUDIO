const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function loderAnimation(){
    var loader = document.querySelector("#loader")
setTimeout(function(){
  loader.style.top = "-100%"
},4300)
}
loderAnimation();

function page4Animation (){
    var elemc = document.querySelector("#elem-container")
var fixed = document.querySelector("#fixed-image")
elemc.addEventListener("mouseenter",function(){
    fixed.style.display = "block"
})

elemc.addEventListener("mouseleave",function(){
    fixed.style.display = "none"
})
var elems = document.querySelectorAll(".elem")
elems.forEach(function(e){
    e.addEventListener("mouseenter",function(){
         var image = e.getAttribute("data-img")
          fixed.style.backgroundImage = `url(${image})`
    })
})
}
function swiperAnimation(){var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 30,
    
  });}
  swiperAnimation();
  page4Animation();

 function page5Animation(){
    var desc = document.querySelector("#desc")
    var Create = document.querySelector("#Create")
    var create = document.querySelector("#create")
    var Project = document.querySelector("#Project")
    var Execution = document.querySelector("#Execution")
    var image = document.querySelector("#page4-img")
    
    
    
   Create.addEventListener("click",function(){
       desc.textContent = "Our team works with our clients to refine an idea and concept into an executable design. We create a final design that encompasses the brand narrative to bring stories to life and provide end-to-end design solutions from concept, design, and architectural drawings to 3D renderings."
       var add = Create.getAttribute("data-img")
      image.setAttribute("src",`${add}`)
      
       
   })
   
   Project.addEventListener("click",function(){
       desc.textContent = "Once we have a design, our production team takes the lead in bringing it to life. We manage all stages of the project, from build specifications and technical drawings to site surveys, vendor management, and 2D & 3D production. "
       var add = Project.getAttribute("data-img")
       image.setAttribute("src",`${add}`)
       
   })
   
   Execution.addEventListener("click",function(){
       desc.textContent = "We’re with you every step of the way, from the project initiation to launch day. Our production and design teams are onsite to direct and guide the process down to the last point of completion, ensuring success across the built space and experience. ."
       var add = Execution.getAttribute("data-img")
       image.setAttribute("src",`${add}`)
       
   })
 }
 page5Animation();


function menuAnimation(){
    var menu = document.querySelector("nav h3")
var down = document.querySelector("#drop-down")
var navimg = document.querySelector("nav img")
var flag = 0
menu.addEventListener("click",function(){
  if(flag == 0){
        down.style.top = 0
        navimg.style.opacity = 0
        flag = 1
  }else{
        down.style.top = "-100%"
        navimg.style.opacity = 1
        flag = 0 }
})
}
menuAnimation();


 

 
