<template>
  <div class="wc-inline">
    <div class="app-wifi-banner">
      <div class="app-wifi-banner-image">
        <img src='https://static-cdn.rt.ru/sites/default/files/img/wifi/wifi-banner4.png' alt=''
             class="app-wifi-banner-image-tag">
      </div>

      <img class="d-none" src='https://static-cdn.rt.ru/sites/default/files/img/wifi/wifi-banner3.png' alt=''>
      <img class="d-none" src='https://static-cdn.rt.ru/sites/default/files/img/wifi/wifi-banner2.png' alt=''>
      <img class="d-none" src='https://static-cdn.rt.ru/sites/default/files/img/wifi/wifi-banner1.png' alt=''>
    </div>
  </div>
  <!-- Описание -->

  <!-- Тарифы -->
</template>

<!--transform: translate3d(-2124px, 0px, 0px)-->
<script>
const componentsList = {};

export default {
  name: "AppPromoVip",
  components: componentsList,
  mounted() {
    document.querySelector('body').classList.add('app-wifi');
    // document.querySelector('body').classList.add('rt-dark-theme');
    // var random = parseInt((Math.random()*9+1)%3+1);
    // document.querySelector('.cloud-g-1-image').classList.add('cloud-g-1-image-type'+random);
    // var isAnimated = false;
    // var wrapper = document.querySelector('.cloud-g-slider-inner')
    // var index = 0;
    // var wasMobileBefore = false;
    // document.querySelector('.cloud-g-show-form').addEventListener('click',function(){
    //   document.querySelector('.cloud-g-form').classList.add('cloud-g-form-active');
    //   document.querySelector('.cloud-g-show-form').classList.add('d-none')
    // })
    // window.addEventListener('resize',function(){
    //   var slideArray = document.querySelectorAll('.cloud-g-slider-item')
    //   var step = slideArray[1].clientWidth
    //   var slide = slideArray[0];
    //   var marginLeft = step * index * -1;
    //   if(window.innerWidth > 1024) {
    //     slide.style.transform = 'translate3d('+marginLeft+'px,0px,0)'
    //     if(wasMobileBefore){
    //       document.querySelector('.cloud-g-slider').scrollTo(0,0)
    //     }
    //     wasMobileBefore = false
    //   }else{
    //     wasMobileBefore = true
    //     slide.style.transform = 'translate3d(0,0,0)';
    //   }
    // });
    // document.querySelectorAll('.cloud-g-slider-arrow').forEach(function (item) {
    //
    // 	var setRigthArrow = function(){
    //
    // 	  var arrowR = document.querySelector('.cloud-g-slider-arrow-right')
    // 	  var arrowL = document.querySelector('.cloud-g-slider-arrow-left')
    // 	  if(index >= 0){
    //       arrowR.classList.add('cloud-g-slider-arrow-hide')
    //       arrowL.classList.remove('cloud-g-slider-arrow-hide')
    // 	  }else{
    // 	    if(index < -8){
    //         arrowL.classList.add('cloud-g-slider-arrow-hide')
    // 	    }
    //       arrowR.classList.remove('cloud-g-slider-arrow-hide')
    // 	  }
    // 	}
    //   item.addEventListener('click', function () {
    //     var slideArray = document.querySelectorAll('.cloud-g-slider-item')
    //     var slide = slideArray[0];
    //     var step = slideArray[1].clientWidth
    //     if (!isAnimated) {
    //       isAnimated = true
    //       if (item.classList.contains('cloud-g-slider-arrow-left')) {
    //         index= index - 1;
    //         var marginLeft =step*index;
    //
    //         slide.style.transform = 'translate3d('+marginLeft+'px,0px,0)'
    //         setTimeout(function () {
    //           isAnimated = false;
    //           setRigthArrow()
    //         }, 200)
    //       } else {
    //
    //         index = index + 1;
    //         var marginLeft =step*index;
    //
    //         slide.style.transform = 'translate3d('+marginLeft+'px,0px,0)'
    //         setTimeout(function () {
    //           isAnimated = false
    //           setRigthArrow()
    //         }, 200)
    //       }
    //     }
    //   })
    // })
    // .cloud-g-slider-arrow-left
    // cloud-g-slider-arrow-right
  }
};
</script>
