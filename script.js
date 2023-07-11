


const menu = document.querySelector('.menu');
const close = document.querySelector('.close');
const nav = document.querySelector('nav');

menu.addEventListener('click', () =>{

  nav.classList.add('open-nav');
});

close.addEventListener('click', () =>{
  nav.classList.remove('open-nav');
});


//magnet


let t1 = gsap.timeline({default: { ease: "powe4.inOut", duration: 0.4}});
t1.to('.nav',{
  'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', opacity: 1, y: 0, duration :0.1, stagger: .1 })
.to('.sectionz',{
  'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', opacity: 1, y: 0, duration :0.1 })
.to('.h1',{
  'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', opacity: 1, y: 0,  })
  .to('.p', {'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', opacity: 1, y: 0,});


  let t2 = gsap.timeline({default: { ease: "powe4.inOut", duration: 2}});
  gsap.to(".skills", {
    scrollTrigger: {
      trigger: "#skills",
      scroller: "body",
      start: "top 50%"
    },
    'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
    opacity: 1,
    y: 0,
    duration: 0.5,
    stagger: .1 
  });
  

  gsap.to(".portfolio", {
    scrollTrigger: {
      trigger: "#portfolio",
      scroller: "body",
      start: "top 80%"
    },
    'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
    opacity: 1,
    y: 0,
    duration: 0.5,
    stagger: .2 
  });

  gsap.to(".works", {
    scrollTrigger: {
      trigger: "#works",
      scroller: "body",
      start: "top 60%"
    },
    'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
    opacity: 1,
    y: 0,
    duration: 0.4,
    stagger: .2 
  });
  
