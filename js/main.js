$(function(){
  const Motion = gsap.timeline({})
  .to('.loading_page',{yPercent:-100,delay:3,ease: Power4.easeIn},'label')
  .to('.loading_about',{yPercent:-100,delay:1.5,ease: Power4.easeIn},'label')
  .to('.loading_portfolio',{yPercent:-100,delay:1.5,ease: Power4.easeIn},'label')
});

$(document).ready(function () {
    $(".last-letter-remove").each(function () {
        var $this = $(this);
        var text = $this.text();
        $this.html(text.slice(0,text.length-1)+'<span class="last-letter-wrap">'+text.slice(-1)+'</span>')
    })
})

$(document).ready(function(){
    AOS.init();
});