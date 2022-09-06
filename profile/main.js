let menu = document.querySelector('.menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
  navbar.classList.toggle('open-menu');
    menu.classList.toggle('move');
}
window.onscroll = ()=>{
  navbar.classList.remove('open-menu');
  menu.classList.remove('move');
}
var swiper = new Swiper(".reviews-content", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  function validate(){
   let name = document.querySelector('.name');
   let email = document.querySelector('.email');
   let message = document.querySelector('.message');
   let send = document.querySelector('.send-btn');
   send.addEventListener('click', (e) =>{
    e.preventDefault();
    if(name.value == "" || email.value == "" || message.value == ""){
      emptyError();
    }
    else{
      sendmail(name.value,email.value,message.value);
      success();
    }
   })
  }
  validate();

  function sendmail(name,email,message){
    emailjs.send("service_bq1igjh","template_6muok28",{
      from_name: email,
      to_name: name,
      message: message,
      });
  }
  
  function emptyError(){
    swal({
      title: "Oh No ...",
      text: "Fields cannot be empty!",
      icon: "error",
    });
  }

  function success(){
    swal({
      title: "Email sent successfully!",
      text: "We will try reply in 24hours!",
      icon: "success",
    });
  }
  let header = document.querySelector('header');
  window.addEventListener('scroll', ()=>{
    header.classList.toggle('header-active', window.scrollY > 0);
  })
  
  let scrollTop = document.querySelector('.scroll-top');
  window.addEventListener('scroll', ()=>{
    scrollTop.classList.toggle('scroll-active', window.scrollY >= 400);
  })
  