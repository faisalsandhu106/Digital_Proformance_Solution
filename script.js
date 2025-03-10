
function main_content(){ 
   
 gsap.from("#pic1",{
   opacity:0,
   y:55,
   delay:0.3,
   duration:1.9
})

gsap.from("#pic2",{
   opacity:0,
   x:70,
   delay:0.3,
   duration:1.9
})

gsap.from("#pic3",{
   opacity:0,
   y:60,
   delay:0.3,
   duration:1.9
})
}

function content_1(){

   gsap.from(".content-1 h4",{
      opacity:0,
      y:30,
      duration:1,
      scrollTrigger:{
         trigger:".content-1 h4",
         scroller:"body",
         start:"top 80%",
      }
    })
   
    gsap.from(".content-1 h1",{
      opacity:0,
      y:30,
      duration:1,
      scrollTrigger:{
         trigger:".content-1 h1",
         scroller:"body",
         start:"top 75%",
      }
      
    })
   
    gsap.from(".content-1 span",{
      opacity:0,
      y:30,
      duration:1,
      scrollTrigger:{
         trigger:".content-1 span",
         scroller:"body",
         start:"top 90%",
      }
      
    })
}

function content_2(){
   gsap.from(".content-part-1",{
      opacity:0,
      y:35,
      duration:1.5,
      scrollTrigger:{
         trigger:".content-part-1",
         scroller:"body",
         start:"top 75%",
         stagger:1.5
      }   
   })
   
   gsap.from(".content-part-2",{
      opacity:0,
      y:40,
      duration:1,
      scrollTrigger:{
         trigger:".content-part-2",
         scroller:"body",
         start:"top 55%",
      }   
   })
   
   gsap.from(".content-part-2 span",{
      opacity:0,
      y:40,
      duration:1,
      scrollTrigger:{
         trigger:".content-part-2 span",
         scroller:"body",
         start:"top 100%",
      }   
   })
}

function content_3(){
   gsap.from(".content-3 h1",{
      opacity:0,
      y:40,
      duration:1,
      scrollTrigger:{
         trigger:".content-3 h1",
         scroller:"body",
         start:"top 55%",
      }   
   })

   gsap.from(".picture-container img",{
      opacity:0,
      y:40,
      duration:1,
      scrollTrigger:{
         trigger:".picture-container",
         scroller:"body",
         start:"top 55%",
      }
   })
}

function content_4(){
   gsap.from(".content-4",{
      opacity:0,
      daley:1,
      duration:1.5,
      scrollTrigger:{
         trigger:".content-4",
         scroller:"body",
         start:"top 30%",
      }
   })

   
}

function footer(){
   gsap.from(".footer-button",{
      opacity:0,
      y:40,
      duration:0.8,
      scrollTrigger:{
         trigger:".footer-button",
         scroller:"body",
         start:"top 75%",
      }
   })

   gsap.from(".footer-links",{
      opacity:0,
      y:40,
      duration:0.8,
      delay:0.5,
      scrollTrigger:{
         trigger:".footer-links",
         scroller:"body",
         start:"top 70%",
         
      }
   })

   gsap.from(".footer-links p" ,{
      opacity:0,
      y:40,
      duration:0.8,
      stagger:0.,
      scrollTrigger:{
         trigger:".footer-links",
         scroller:"body",
         start:"top 70%",
      }
   })
}

function sideBar(){
   let openMenubar = document.querySelector(".ri-menu-3-line")
   let crossMenubar = document.querySelector(".ri-close-large-line")
     
   let tl = gsap.timeline()
     
   tl.to(".navbar-center",{
         left:0,
         duration:0.5,
   })

   tl.from(".navbar-center ul li",{
      opacity:0,
      x:10,
      delay:-0.3,
      stagger:0.1
  })
   
   tl.pause()
   
   openMenubar.addEventListener("click",function(){
     tl.play()
   })
   crossMenubar.addEventListener("click",function(){
     tl.reverse()
   })
}


main_content();
content_1();
content_2();
content_3();
content_4();
footer();
sideBar();
