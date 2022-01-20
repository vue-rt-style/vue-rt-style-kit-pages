<template>
  <div class="">
    <h1>жопа</h1>
    <div class="rt-row">
      <div class="rt-col">
        <div class="image-block-wrap">
          <div class="image-block-line">
            <div class="image-block-pseudo"></div>
            <div class="image-block" v-for="i in 25" :key="i+'$'">
              <img class="image-block-image" :src="'https://picsum.photos/500/300?getForId='+(i+100)" alt="">
            </div>
          </div>
        </div>
        <div class="sp-t-1 md-sp-t-0-3">
        <div class="image-block-wrap">
          <div class="image-block-line image-block-line-invert">
            <div class="image-block-pseudo"></div>
            <div class="image-block" v-for="i in 25" :key="i+'$'">
              <img class="image-block-image" :src="'https://picsum.photos/500/300?getForId='+(i+200)" alt="">
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>
<!--ld-key-gray-->
<script>
// https://www.rt.ru/sites/default/files/img/videocontrol.04.2021/prize1.jpg
//     https://www.rt.ru/sites/default/files/img/videocontrol.04.2021/prize2.jpg
//         https://www.rt.ru/sites/default/files/img/videocontrol.04.2021/prize3.png

const componentsList = {};

export default {
  name: "AppPromoVip",
  components: componentsList,
  data: () => ({
    coords: [
      {
        c: [208, 230],
        label: 'Датчик дыма',
        text: 'Фиксирует задымление в помещении <br/><br/>Датчик мгновенно обнаружит задымление и моментально отправит уведомление.',
        image: 'https://rt-static.rt.ru/sites/default/files/img/sensors/PHI_PSG01.jpg',
        button: 'Выбрать датчики',
        scrollTo: 'form'
      }, {
        c: [47, 626],
        label: 'Датчик протечки Philio',
        text: 'Фиксирует задымление в помещении <br/><br/>Датчик мгновенно обнаружит задымление и моментально отправит уведомление.',
        image: 'https://rt-static.rt.ru/sites/default/files/img/sensors/aa.jpg',
        button: 'Хочу!',
        scrollTo: 'form'
      }, {
        c: [267, 326],
        label: 'Датчик дыма',
        text: 'Фиксирует задымление в помещении <br/><br/>Датчик мгновенно обнаружит задымление и моментально отправит уведомление.',
        image: 'https://rt-static.rt.ru/sites/default/files/img/sensors/PHI_PSG01.jpg',
        button: 'Выбрать датчики',
        scrollTo: 'form'
      }, {
        c: [328, 429],
        label: 'Датчик дыма',
        text: 'Фиксирует задымление в помещении <br/><br/>Датчик мгновенно обнаружит задымление и моментально отправит уведомление.',
        image: 'https://rt-static.rt.ru/sites/default/files/img/sensors/PHI_PSG01.jpg',
        button: 'Выбрать датчики',
        scrollTo: 'form'
      }, {
        c: [444, 590],
        label: 'Датчик дыма',
        text: 'Фиксирует задымление в помещении <br/><br/>Датчик мгновенно обнаружит задымление и моментально отправит уведомление.',
        image: 'https://rt-static.rt.ru/sites/default/files/img/sensors/PHI_PSG01.jpg',
        button: 'Выбрать датчики',
        scrollTo: 'form'
      }, {
        c: [663, 582],
        label: 'Датчик дыма',
        text: 'Фиксирует задымление в помещении <br/><br/>Датчик мгновенно обнаружит задымление и моментально отправит уведомление.',
        image: 'https://rt-static.rt.ru/sites/default/files/img/sensors/PHI_PSG01.jpg',
        button: 'Выбрать датчики',
        scrollTo: 'form'
      }, {
        c: [706, 472],
        label: 'Датчик дыма',
        text: 'Фиксирует задымление в помещении <br/><br/>Датчик мгновенно обнаружит задымление и моментально отправит уведомление.',
        image: 'https://rt-static.rt.ru/sites/default/files/img/sensors/PHI_PSG01.jpg',
        button: 'Выбрать датчики',
        scrollTo: 'form'
      }, {
        c: [731, 280],
        label: 'Датчик дыма',
        text: 'Фиксирует задымление в помещении <br/><br/>Датчик мгновенно обнаружит задымление и моментально отправит уведомление.',
        image: 'https://rt-static.rt.ru/sites/default/files/img/sensors/PHI_PSG01.jpg',
        button: 'Выбрать датчики',
        scrollTo: 'form'
      }, {
        c: [798, 173],
        label: 'Датчик дыма',
        text: 'Фиксирует задымление в помещении <br/><br/>Датчик мгновенно обнаружит задымление и моментально отправит уведомление.',
        image: 'https://rt-static.rt.ru/sites/default/files/img/sensors/PHI_PSG01.jpg',
        button: 'Выбрать датчики',
        scrollTo: 'form'
      }, {
        c: [888, 460],
        label: 'Датчик дыма',
        text: 'Фиксирует задымление в помещении <br/><br/>Датчик мгновенно обнаружит задымление и моментально отправит уведомление.',
        image: 'https://rt-static.rt.ru/sites/default/files/img/sensors/PHI_PSG01.jpg',
        button: 'Выбрать датчики',
        scrollTo: 'form'
      }, {
        c: [1306, 353],
        label: 'Датчик дыма',
        text: 'Фиксирует задымление в помещении <br/><br/>Датчик мгновенно обнаружит задымление и моментально отправит уведомление.',
        image: 'https://rt-static.rt.ru/sites/default/files/img/sensors/PHI_PSG01.jpg',
        button: 'Выбрать датчики',
        scrollTo: 'form'
      }, {
        c: [1319, 521],
        label: 'Датчик дыма',
        text: 'Фиксирует задымление в помещении <br/><br/>Датчик мгновенно обнаружит задымление и моментально отправит уведомление.',
        image: 'https://rt-static.rt.ru/sites/default/files/img/sensors/PHI_PSG01.jpg',
        button: 'Выбрать датчики',
        scrollTo: 'form'
      },
    ],
    width: 1440,
    height: 839
  }),
  mounted() {

    var step = function (index) {
      var wr = document.querySelectorAll('.image-block-wrap')[index]
      wr.querySelector('.image-block-line').classList.add('image-block-anim')
      setTimeout(function () {
        var item = wr.querySelector('.image-block')
        item.classList.add('image-block-line-start')
        item.style.width = 0
        wr.querySelector('.image-block-line').classList.remove('image-block-anim')
        if(index == 0) {
          wr.querySelector('.image-block-line').append(wr.querySelector('.image-block'))
        }else{
          var img = wr.querySelectorAll('.image-block');
          wr.querySelector('.image-block-line').prepend(img[img.length - 1])
        }
        setTimeout(function () {
          item.removeAttribute('style')
          item.classList.remove('image-block-line-start')
            step(index)
        }, 20)
      }, 4980)

    }
    step(0)
    step(1)
  }


};
</script>

