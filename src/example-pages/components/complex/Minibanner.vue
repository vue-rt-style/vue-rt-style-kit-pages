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

        <template slot="label"><svg width="126" height="39" viewBox="0 0 126 39" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M38.126 6.20898H43.4284L47.6629 22.8104C47.6629 22.8104 48.1222 24.7256 48.3126 25.6667C48.503 24.7293 48.9623 22.7736 48.9623 22.7736L53.3125 6.20898H58.5029L62.8532 22.7736C62.8532 22.7736 63.3125 24.7256 63.5029 25.6667C63.6933 24.7293 64.1526 22.8104 64.1526 22.8104L68.3871 6.20898H73.6895L66.3259 32.5006H60.9077L55.9115 13.4215L50.9153 32.5006H45.4971L38.126 6.20898Z" fill="white"/>
          <path d="M81.5572 13.8699H76.7515V32.5005H81.5572V13.8699Z" fill="white"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M99.4397 32.5008V21.7591C99.4397 19.3182 98.256 17.7779 95.5862 17.7779C93.0694 17.7779 91.1986 19.9174 91.1986 23.0347V32.5008H86.3928V13.8702H91.1986V16.8736C92.6101 14.7341 94.8617 13.3445 97.6063 13.3445C101.65 13.3445 104.246 15.9361 104.246 19.8034V32.4971H99.4397V32.5008Z" fill="white"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M108.562 6.20898H113.368V19.5055L119.13 13.87H125.082L118.178 20.5165L126.001 32.4969H120.467L114.821 23.7845L113.372 25.1741V32.4969H108.566V6.20898H108.562Z" fill="white"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M76.1128 4.2864L77.991 6.13549L76.1128 7.98458L78.3346 10.1682L82.4309 6.13549L78.3346 2.10278L76.1128 4.2864Z" fill="white"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M10.7281 0L0 10.5615L9.07759 19.4982L0 28.4385L10.7281 39L30.5374 19.4982L10.7281 0Z" fill="#FF4F12"/>
        </svg>
        </template>
        <template slot="content">Первые 30 дней бесплатно при подключении до 13 августа</template>
        <template slot="html"><a href="#" class="rt-link rt-link--orange" color="orange">Подробнее</a></template>
        <template slot="image">

          <rt-img src="https://rt-static.rt.ru/sites/default/files/img/minibanner/minib2.png"
                  td-src="https://rt-static.rt.ru/sites/default/files/img/minibanner/td-minib2-1.png"
                  md-src="https://rt-static.rt.ru/sites/default/files/img/minibanner/md-minib2.png"></rt-img>
        </template>

      </rt-minibanner>
    </div>
    <div class="color-block--main-color01 sp-v-3">
      <rt-minibanner background="orange" :reverse="true" shadow-color="orange" color="white">


        <template slot="label">Аналитика речи</template>
        <template slot="content">Первые 30 дней бесплатно при подключении до 13 августа</template>
        <template slot="html"><a href="#" class="rt-link rt-link--orange" color="orange">Подробнее</a></template>
        <template slot="image">

          <rt-img src="https://rt-static.rt.ru/sites/default/files/img/minibanner/minib2.png"
                  td-src="https://rt-static.rt.ru/sites/default/files/img/minibanner/td-minib2-1.png"
                  md-src="https://rt-static.rt.ru/sites/default/files/img/minibanner/md-minib2.png"></rt-img>
        </template>

      </rt-minibanner>
    </div>

    <div class="color-block--main-color01 sp-v-3">
      <rt-minibanner background="purple" shadow-color="purple" color="white" :tablet-in-line="true">
        <template slot="label">Аналитика речи</template>
        <template slot="content">Первые 30 дней бесплатно при подключении до 13 августа</template>

        <template slot="image">

          <rt-img src="https://rt-static.rt.ru/sites/default/files/img/minibanner/minib2.png"
                  td-src="https://rt-static.rt.ru/sites/default/files/img/minibanner/td-minib2-2.png"
                  md-src="https://rt-static.rt.ru/sites/default/files/img/minibanner/md-minib2.png"></rt-img>
        </template>

      </rt-minibanner>
    </div>

    <div class="color-block--main-color01 sp-v-3">
      <rt-minibanner background="purple" :reverse="true" shadow-color="purple" color="white" :tablet-in-line="true">
        <template slot="label">Аналитика речи</template>
        <template slot="content">Первые 30 дней бесплатно при подключении до 13 августа</template>

        <template slot="image">

          <rt-img src="https://rt-static.rt.ru/sites/default/files/img/minibanner/minib2.png"
                  td-src="https://rt-static.rt.ru/sites/default/files/img/minibanner/td-minib2-2.png"
                  md-src="https://rt-static.rt.ru/sites/default/files/img/minibanner/md-minib2.png"></rt-img>
        </template>

      </rt-minibanner>
    </div>

    <rt-minibanner background="dark-slate" shadow-color="dark-slate" color="white">
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
    <rt-minibanner :fix-image="true" background="gray" :has-shadow="false">
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
        <rt-img src='https://picsum.photos/2000/1000?getForId=13'></rt-img>
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
// vue-rt-style-kit-molecules/src/components/
import documentation from "@vue-rt-style-kit-molecules-local/components/Minibanner/docs/index.json";

const componentsList = {};
export default {
  name: "AppMinibanner",
  components: componentsList,
  data: () => ({
    documentation: {},
    imgs: []
  }),
  mounted() {
    this.documentation = documentation
  },

  methods: {

  }
};
</script>
