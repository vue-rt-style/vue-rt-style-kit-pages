<template>
  <div>
    <div>
      <div class="rt-container">
        <div class="app-content rt-col-12 rt-col-md-3">
          <div class="app-title">
            <div class="row">
              <h1 class="rt-font-hero rt-col">
                Comment Slider
                <span class="rt-code rt-font-h3 rt-col">
                rt-comment-slider</span>
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div>
        <rt-comment-slider name="1"></rt-comment-slider>
        <div class="rt-container">
          <rt-comment-slider-item slider-name="1" content-url="https://www.instagram.com/p/CMSEwrGjj56"
                                  author-image="https://scontent-waw1-1.cdninstagram.com/v/t51.2885-19/s320x320/119704330_2717925231798372_6027269488212957676_n.jpg?tp=1&_nc_ht=scontent-waw1-1.cdninstagram.com&_nc_ohc=OvOhtsw_z4MAX8mvvOQ&oh=87606b840370511f823d3a9eb201c971&oe=607654A9">
            <template slot="comment">
              <p>1 Так вот. </p>
            </template>
            <template slot="author_name">ananovaa</template>
            <template slot="author_about">Лучший блог о материнстве и детстве</template>
          </rt-comment-slider-item>
          <rt-comment-slider-item slider-name="1" content-url="https://www.instagram.com/p/CMPf9daDpBE/"
                                  author-image="https://scontent-waw1-1.cdninstagram.com/v/t51.2885-19/s320x320/69227696_441983603328057_923202576030105600_n.jpg?tp=1&_nc_ht=scontent-waw1-1.cdninstagram.com&_nc_ohc=DJTUZ62C6H8AX813yNl&oh=65309014a5d1d2a27d38b537f36e94b6&oe=60766D45">
            <template slot="comment">
              <p>2 Мы с Кирой уже попробовали первые бесплатные задания по разными предметами. Кира с удовольствием
                слушает короткие интерактивные уроки по математике, русскому, литературе и окружающему миру...
                попробовали первые бесплатные задания по разными предметами. Кира с удовольствием</p>
            </template>
            <template slot="author_name">koshkinalena</template>
            <template slot="author_about">Фотограф | smm</template>
          </rt-comment-slider-item>
          <rt-comment-slider-item slider-name="1" content-url="https://www.instagram.com/p/CMM7Kn3DTA3/"
                                  author-image="https://scontent-waw1-1.cdninstagram.com/v/t51.2885-19/s320x320/103849955_553920265294625_4041602107341872329_n.jpg?tp=1&_nc_ht=scontent-waw1-1.cdninstagram.com&_nc_ohc=qRXW706uW18AX-0uekF&oh=65b76e39e6c2ab939aae94da84416b1e&oe=60741373">
            <template slot="comment">
              <p>3 В общем, я нашла, где все предметы в одном месте, не выходя из дома — сервис «Лицей» от Ростелекома.
                Рассказываю 🙌🙌 Сначала мы попробовали бесплатные уроки, а теперь я оформила подписку...</p>
            </template>
            <template slot="author_name">mila_litvinskaya !!</template>
            <template slot="author_about">Продюсер блогеров-экспертов</template>
          </rt-comment-slider-item>
          <rt-comment-slider-item slider-name="1" content-url="https://www.instagram.com/p/CMSEwrGjj56"
                                  author-image="https://scontent-waw1-1.cdninstagram.com/v/t51.2885-19/s320x320/119704330_2717925231798372_6027269488212957676_n.jpg?tp=1&_nc_ht=scontent-waw1-1.cdninstagram.com&_nc_ohc=OvOhtsw_z4MAX8mvvOQ&oh=87606b840370511f823d3a9eb201c971&oe=607654A9">
            <template slot="comment">
              <p>4 Так вот. Думала я, как облегчить себе участь, чтобы меня меньше дергали, и вот на что наткнулась:
                Лицей
                от Ростелеком. Это интерактивная платформа — уроки в игровой форме с тестами...</p>
            </template>
            <template slot="author_name">ananovaa</template>
            <template slot="author_about">Лучший блог о материнстве и детстве</template>
          </rt-comment-slider-item>
          <rt-comment-slider-item slider-name="1" content-url="https://www.instagram.com/p/CMPf9daDpBE/"
                                  author-link="https://www.instagram.com/p/CMPf9daDpBE/"
                                  author-image="https://scontent-waw1-1.cdninstagram.com/v/t51.2885-19/s320x320/69227696_441983603328057_923202576030105600_n.jpg?tp=1&_nc_ht=scontent-waw1-1.cdninstagram.com&_nc_ohc=DJTUZ62C6H8AX813yNl&oh=65309014a5d1d2a27d38b537f36e94b6&oe=60766D45">
            <template slot="comment">
              <p> author-link 5 Мы с Кирой уже попробовали первые бесплатные задания по разными предметами. Кира с
                удовольствием
                слушает короткие интерактивные уроки по математике, русскому, литературе и окружающему миру...</p>
            </template>
            <template slot="author_name">koshkinalena</template>
            <template slot="author_about">Фотограф | smm</template>
          </rt-comment-slider-item>
          <rt-comment-slider-item slider-name="1" content-url="https://www.instagram.com/p/CMM7Kn3DTA3/"
                                  author-image="https://scontent-waw1-1.cdninstagram.com/v/t51.2885-19/s320x320/103849955_553920265294625_4041602107341872329_n.jpg?tp=1&_nc_ht=scontent-waw1-1.cdninstagram.com&_nc_ohc=qRXW706uW18AX-0uekF&oh=65b76e39e6c2ab939aae94da84416b1e&oe=60741373">
            <template slot="comment">
              <p>6 В общем, я нашла, где все предметы в одном месте, не выходя из дома — сервис «Лицей» от Ростелекома.
                Рассказываю 🙌 Сначала мы попробовали бесплатные уроки, а теперь я оформила подписку...</p>
            </template>
            <template slot="author_name">mila_litvinskaya</template>
            <template slot="author_about">Продюсер блогеров-экспертов</template>
          </rt-comment-slider-item>
        </div>
      </div>

        <div class="rt-container">
          <div class="app-content rt-col-12 rt-col-md-3">
            <documentation-builder :json="documentation" type="components"/>
          </div>
        </div>
      </div>
    </div>

</template>

<script>
import documentation from "@vue-rt-style-kit-molecules-local/components/Swiper/docs/index.json";
import componentsList from "../../componentsList";

export default {
  name: "AppCommentSlider",
  components: componentsList,
  data: () => ({
    documentation: {}
  }),
  mounted() {
    // this.documentation = documentation;
  },
  created() {
  },
  methods: {}
};
</script>
