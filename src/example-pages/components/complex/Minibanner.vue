<template>
  <div class="">

    <div class="rt-container">

      <div class="app-content rt-col-12 rt-col-md-3">
        <div class="app-title">
          <div class="row"><h1 class="rt-font-hero rt-col">Minibanner</h1></div>
        </div>
      </div>
    </div>
    <div class="color-block--black sp-v-3">
      <rt-minibanner>
        <template slot="label">Аналитика речи</template>
        <template slot="content">Первые 30 дней бесплатно при подключении до 13 августа</template>
        <template slot="html"><rt-button color="orange">Подробнее</rt-button></template>
        <template slot="image">

          <rt-img src="https://rt-static.rt.ru/sites/default/files/img/minibanner/minib.png"
                  td-src="https://rt-static.rt.ru/sites/default/files/img/minibanner/td-minib.png"
                  md-src="https://rt-static.rt.ru/sites/default/files/img/minibanner/md-minib.png"></rt-img>
        </template>

      </rt-minibanner>
    </div>
    <div class="color-block--main-color01 sp-v-3">
      <rt-minibanner background="dark-slate" shadow-color="dark-slate" color="white">
        <template slot="label">Аналитика речи</template>
        <template slot="content">Первые 30 дней бесплатно при подключении до 13 августа</template>
        <template slot="html"><rt-button color="orange">Подробнее</rt-button></template>
        <template slot="image">

          <rt-img src="https://rt-static.rt.ru/sites/default/files/img/minibanner/minib2.png"
                  td-src="https://rt-static.rt.ru/sites/default/files/img/minibanner/td-minib2-1.png"
                  md-src="https://rt-static.rt.ru/sites/default/files/img/minibanner/md-minib2.png"></rt-img>
        </template>

      </rt-minibanner>
    </div>
    <div class="color-block--main-color01 sp-v-3">
      <rt-minibanner background="dark-slate" shadow-color="dark-slate" color="white" :tablet-in-line="true">
        <template slot="label">Аналитика речи</template>
        <template slot="content">Первые 30 дней бесплатно при подключении до 13 августа</template>
        <template slot="html"><rt-button color="orange">Подробнее</rt-button></template>
        <template slot="image">

          <rt-img src="https://rt-static.rt.ru/sites/default/files/img/minibanner/minib2.png"
                  td-src="https://rt-static.rt.ru/sites/default/files/img/minibanner/td-minib2-2.png"
                  md-src="https://rt-static.rt.ru/sites/default/files/img/minibanner/md-minib2.png"></rt-img>
        </template>

      </rt-minibanner>
    </div>

    <rt-minibanner>
      <template slot="icon"><svg width="91" height="29" viewBox="0 0 91 29" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M27.4885 4.53516H31.3116L34.3647 16.6615C34.3647 16.6615 34.6958 18.0604 34.8331 18.7478C34.9704 18.0631 35.3016 16.6346 35.3016 16.6346L38.4381 4.53516H42.1804L45.317 16.6346C45.317 16.6346 45.6481 18.0604 45.7854 18.7478C45.9228 18.0631 46.2539 16.6615 46.2539 16.6615L49.307 4.53516H53.1301L47.8208 23.7396H43.9143L40.312 9.80349L36.7097 23.7396H32.8031L27.4885 4.53516Z" fill="#101828"/>
        <path d="M58.8028 10.1311H55.3378V23.7396H58.8028V10.1311Z" fill="#101828"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M71.6962 23.7396V15.8935C71.6962 14.1105 70.8427 12.9854 68.9177 12.9854C67.1031 12.9854 65.7542 14.5482 65.7542 16.8252V23.7396H62.2892V10.1311H65.7542V12.3248C66.7719 10.7621 68.3954 9.74707 70.3742 9.74707C73.29 9.74707 75.1612 11.6401 75.1612 14.4649V23.7369H71.6962V23.7396Z" fill="#101828"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M78.2736 4.53516H81.7386V14.2475L85.8928 10.1311H90.1843L85.2063 14.9859L90.8466 23.7369H86.8566L82.7859 17.373L81.7413 18.388V23.7369H78.2763V4.53516H78.2736Z" fill="#101828"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M54.8774 3.13089L56.2316 4.48154L54.8774 5.83219L56.4793 7.42719L59.4328 4.48154L56.4793 1.53589L54.8774 3.13089Z" fill="#101828"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.735 0L0 7.71454L6.545 14.2422L0 20.7726L7.735 28.4871L22.0177 14.2422L7.735 0Z" fill="#FF4F12"/>
      </svg>
      </template>
      <template slot="label">Аналитика речи</template>
      <template slot="content">Первые 30 дней бесплатно при подключении до 13 августа</template>
      <template slot="image">
        <rt-img src='https://picsum.photos/5000/2000?getForId=403'
                alt=''></rt-img>
      </template>
      <template slot="html">
        <div class="d-flex">
          <rt-button color="orange">Подробнее</rt-button>
          <rt-button color="orange-border">Подробнее</rt-button>
        </div>
      </template>
    </rt-minibanner>
    <rt-minibanner background="orange" shadow-color="orange" color="white" :tablet-in-line="true" :reverse="true">
      <template slot="icon"><svg width="91" height="29" viewBox="0 0 91 29" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M27.4885 4.53516H31.3116L34.3647 16.6615C34.3647 16.6615 34.6958 18.0604 34.8331 18.7478C34.9704 18.0631 35.3016 16.6346 35.3016 16.6346L38.4381 4.53516H42.1804L45.317 16.6346C45.317 16.6346 45.6481 18.0604 45.7854 18.7478C45.9228 18.0631 46.2539 16.6615 46.2539 16.6615L49.307 4.53516H53.1301L47.8208 23.7396H43.9143L40.312 9.80349L36.7097 23.7396H32.8031L27.4885 4.53516Z" fill="#101828"/>
        <path d="M58.8028 10.1311H55.3378V23.7396H58.8028V10.1311Z" fill="#101828"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M71.6962 23.7396V15.8935C71.6962 14.1105 70.8427 12.9854 68.9177 12.9854C67.1031 12.9854 65.7542 14.5482 65.7542 16.8252V23.7396H62.2892V10.1311H65.7542V12.3248C66.7719 10.7621 68.3954 9.74707 70.3742 9.74707C73.29 9.74707 75.1612 11.6401 75.1612 14.4649V23.7369H71.6962V23.7396Z" fill="#101828"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M78.2736 4.53516H81.7386V14.2475L85.8928 10.1311H90.1843L85.2063 14.9859L90.8466 23.7369H86.8566L82.7859 17.373L81.7413 18.388V23.7369H78.2763V4.53516H78.2736Z" fill="#101828"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M54.8774 3.13089L56.2316 4.48154L54.8774 5.83219L56.4793 7.42719L59.4328 4.48154L56.4793 1.53589L54.8774 3.13089Z" fill="#101828"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.735 0L0 7.71454L6.545 14.2422L0 20.7726L7.735 28.4871L22.0177 14.2422L7.735 0Z" fill="#FF4F12"/>
      </svg>
      </template>
      <template slot="label">Аналитика речи</template>
      <template slot="content">Первые 30 дней бесплатно при подключении до 13 августа</template>
      <template slot="image">
        <rt-img src='https://picsum.photos/5000/2000?getForId=333'
                 alt=''></rt-img>
      </template>
    </rt-minibanner>
    <rt-minibanner background="purple" shadow-color="purple" color="white" :tablet-in-line="true" >
      <template slot="icon"><svg width="91" height="29" viewBox="0 0 91 29" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M27.4885 4.53516H31.3116L34.3647 16.6615C34.3647 16.6615 34.6958 18.0604 34.8331 18.7478C34.9704 18.0631 35.3016 16.6346 35.3016 16.6346L38.4381 4.53516H42.1804L45.317 16.6346C45.317 16.6346 45.6481 18.0604 45.7854 18.7478C45.9228 18.0631 46.2539 16.6615 46.2539 16.6615L49.307 4.53516H53.1301L47.8208 23.7396H43.9143L40.312 9.80349L36.7097 23.7396H32.8031L27.4885 4.53516Z" fill="#101828"/>
        <path d="M58.8028 10.1311H55.3378V23.7396H58.8028V10.1311Z" fill="#101828"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M71.6962 23.7396V15.8935C71.6962 14.1105 70.8427 12.9854 68.9177 12.9854C67.1031 12.9854 65.7542 14.5482 65.7542 16.8252V23.7396H62.2892V10.1311H65.7542V12.3248C66.7719 10.7621 68.3954 9.74707 70.3742 9.74707C73.29 9.74707 75.1612 11.6401 75.1612 14.4649V23.7369H71.6962V23.7396Z" fill="#101828"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M78.2736 4.53516H81.7386V14.2475L85.8928 10.1311H90.1843L85.2063 14.9859L90.8466 23.7369H86.8566L82.7859 17.373L81.7413 18.388V23.7369H78.2763V4.53516H78.2736Z" fill="#101828"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M54.8774 3.13089L56.2316 4.48154L54.8774 5.83219L56.4793 7.42719L59.4328 4.48154L56.4793 1.53589L54.8774 3.13089Z" fill="#101828"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.735 0L0 7.71454L6.545 14.2422L0 20.7726L7.735 28.4871L22.0177 14.2422L7.735 0Z" fill="#FF4F12"/>
      </svg>
      </template>
      <template slot="label">Аналитика речи</template>
      <template slot="content">Первые 30 дней бесплатно при подключении до 13 августа</template>
      <template slot="image">
        <rt-img src='https://picsum.photos/5000/2000?getForId=133'
                 alt=''></rt-img>
      </template>
    </rt-minibanner>
    <rt-minibanner background="orange" shadow-color="orange" color="white" :tablet-in-line="false" :reverse="true">
      <template slot="icon"><svg width="91" height="29" viewBox="0 0 91 29" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M27.4885 4.53516H31.3116L34.3647 16.6615C34.3647 16.6615 34.6958 18.0604 34.8331 18.7478C34.9704 18.0631 35.3016 16.6346 35.3016 16.6346L38.4381 4.53516H42.1804L45.317 16.6346C45.317 16.6346 45.6481 18.0604 45.7854 18.7478C45.9228 18.0631 46.2539 16.6615 46.2539 16.6615L49.307 4.53516H53.1301L47.8208 23.7396H43.9143L40.312 9.80349L36.7097 23.7396H32.8031L27.4885 4.53516Z" fill="#101828"/>
        <path d="M58.8028 10.1311H55.3378V23.7396H58.8028V10.1311Z" fill="#101828"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M71.6962 23.7396V15.8935C71.6962 14.1105 70.8427 12.9854 68.9177 12.9854C67.1031 12.9854 65.7542 14.5482 65.7542 16.8252V23.7396H62.2892V10.1311H65.7542V12.3248C66.7719 10.7621 68.3954 9.74707 70.3742 9.74707C73.29 9.74707 75.1612 11.6401 75.1612 14.4649V23.7369H71.6962V23.7396Z" fill="#101828"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M78.2736 4.53516H81.7386V14.2475L85.8928 10.1311H90.1843L85.2063 14.9859L90.8466 23.7369H86.8566L82.7859 17.373L81.7413 18.388V23.7369H78.2763V4.53516H78.2736Z" fill="#101828"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M54.8774 3.13089L56.2316 4.48154L54.8774 5.83219L56.4793 7.42719L59.4328 4.48154L56.4793 1.53589L54.8774 3.13089Z" fill="#101828"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.735 0L0 7.71454L6.545 14.2422L0 20.7726L7.735 28.4871L22.0177 14.2422L7.735 0Z" fill="#FF4F12"/>
      </svg>
      </template>
      <template slot="label">Аналитика речи</template>
      <template slot="content">Первые 30 дней бесплатно при подключении до 13 августа</template>
      <template slot="image">
        <rt-img src='https://picsum.photos/5000/2000?getForId=3103'
                 alt=''></rt-img>
      </template>
    </rt-minibanner>
    <rt-minibanner background="purple" shadow-color="purple" color="white" :tablet-in-line="false" >
      <template slot="icon"><svg width="91" height="29" viewBox="0 0 91 29" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M27.4885 4.53516H31.3116L34.3647 16.6615C34.3647 16.6615 34.6958 18.0604 34.8331 18.7478C34.9704 18.0631 35.3016 16.6346 35.3016 16.6346L38.4381 4.53516H42.1804L45.317 16.6346C45.317 16.6346 45.6481 18.0604 45.7854 18.7478C45.9228 18.0631 46.2539 16.6615 46.2539 16.6615L49.307 4.53516H53.1301L47.8208 23.7396H43.9143L40.312 9.80349L36.7097 23.7396H32.8031L27.4885 4.53516Z" fill="#101828"/>
        <path d="M58.8028 10.1311H55.3378V23.7396H58.8028V10.1311Z" fill="#101828"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M71.6962 23.7396V15.8935C71.6962 14.1105 70.8427 12.9854 68.9177 12.9854C67.1031 12.9854 65.7542 14.5482 65.7542 16.8252V23.7396H62.2892V10.1311H65.7542V12.3248C66.7719 10.7621 68.3954 9.74707 70.3742 9.74707C73.29 9.74707 75.1612 11.6401 75.1612 14.4649V23.7369H71.6962V23.7396Z" fill="#101828"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M78.2736 4.53516H81.7386V14.2475L85.8928 10.1311H90.1843L85.2063 14.9859L90.8466 23.7369H86.8566L82.7859 17.373L81.7413 18.388V23.7369H78.2763V4.53516H78.2736Z" fill="#101828"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M54.8774 3.13089L56.2316 4.48154L54.8774 5.83219L56.4793 7.42719L59.4328 4.48154L56.4793 1.53589L54.8774 3.13089Z" fill="#101828"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.735 0L0 7.71454L6.545 14.2422L0 20.7726L7.735 28.4871L22.0177 14.2422L7.735 0Z" fill="#FF4F12"/>
      </svg>
      </template>
      <template slot="label">Аналитика речи</template>
      <template slot="content">Первые 30 дней бесплатно при подключении до 13 августа</template>
      <template slot="image">
        <rt-img src='https://picsum.photos/5000/2000?getForId=1333'
                 alt=''></rt-img>
      </template>
    </rt-minibanner>
    <rt-minibanner :fix-image="true" background="yellow" :has-shadow="false" color="green-low">
      <template slot="icon"><svg width="91" height="29" viewBox="0 0 91 29" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M27.4885 4.53516H31.3116L34.3647 16.6615C34.3647 16.6615 34.6958 18.0604 34.8331 18.7478C34.9704 18.0631 35.3016 16.6346 35.3016 16.6346L38.4381 4.53516H42.1804L45.317 16.6346C45.317 16.6346 45.6481 18.0604 45.7854 18.7478C45.9228 18.0631 46.2539 16.6615 46.2539 16.6615L49.307 4.53516H53.1301L47.8208 23.7396H43.9143L40.312 9.80349L36.7097 23.7396H32.8031L27.4885 4.53516Z" fill="#101828"/>
        <path d="M58.8028 10.1311H55.3378V23.7396H58.8028V10.1311Z" fill="#101828"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M71.6962 23.7396V15.8935C71.6962 14.1105 70.8427 12.9854 68.9177 12.9854C67.1031 12.9854 65.7542 14.5482 65.7542 16.8252V23.7396H62.2892V10.1311H65.7542V12.3248C66.7719 10.7621 68.3954 9.74707 70.3742 9.74707C73.29 9.74707 75.1612 11.6401 75.1612 14.4649V23.7369H71.6962V23.7396Z" fill="#101828"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M78.2736 4.53516H81.7386V14.2475L85.8928 10.1311H90.1843L85.2063 14.9859L90.8466 23.7369H86.8566L82.7859 17.373L81.7413 18.388V23.7369H78.2763V4.53516H78.2736Z" fill="#101828"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M54.8774 3.13089L56.2316 4.48154L54.8774 5.83219L56.4793 7.42719L59.4328 4.48154L56.4793 1.53589L54.8774 3.13089Z" fill="#101828"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.735 0L0 7.71454L6.545 14.2422L0 20.7726L7.735 28.4871L22.0177 14.2422L7.735 0Z" fill="#FF4F12"/>
      </svg>
      </template>
      <template slot="label">Аналитика речи</template>
      <template slot="content">Первые 30 дней бесплатно при подключении до 13 августа</template>
      <template slot="image">
        <rt-img src='https://picsum.photos/50/50?getForId=13'></rt-img>
      </template>
    </rt-minibanner>



    <div class="rt-container rt-space-top25">
      <rt-col size="12">
        <documentation-builder :json="documentation" type="components"/>
      </rt-col>
    </div>
  </div>
</template>

<script>

import AppTariffCarsIcons from "./TariffCardIcons.vue";
import AppTariffCarsText from "./TariffCardText.vue";

const componentsList = {};
export default {
  name: "AppJumbotron",
  components: componentsList,
  data: () => ({
    documentation: {},
    imgs: []
  }),


  methods: {

  }
};
</script>
