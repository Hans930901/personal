$(function(){
  const Motion = gsap.timeline({})
  .to('.loading_page',{yPercent:-100,delay:3,ease: Power4.easeIn},'label')
  .to('.loading_about',{yPercent:-100,delay:1.5,ease: Power4.easeIn},'label')
  .to('.loading_portfolio',{yPercent:-100,delay:1.5,ease: Power4.easeIn},'label')
  $(".last_letter_remove").each(function(){
    var $this = $(this);
    var text = $this.text();
    $this.html(text.slice(0,text.length-1)+'<span class="last_letter_wrap">'+text.slice(-1)+'</span>')
  });
  AOS.init();
});