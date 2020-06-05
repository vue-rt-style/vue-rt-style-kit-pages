<template>
  <div class="rt-container">
    <div class="app-content rt-col-12 rt-col-md-3">
      <div class="app-title">
        <div class="row">
          <h1 class="rt-font-hero rt-col">
            Space class elements
          </h1>
        </div>
      </div>
      <div class="app-body rt-space-top25">
        <div class="rt-col-12">
          <rt-tabs>
            <template slot="navigation">
              <rt-tabs-nav-item name="lg">
                Large devices
              </rt-tabs-nav-item>
              <rt-tabs-nav-item :active-tab="true" name="all">
                All devices
              </rt-tabs-nav-item>
              <rt-tabs-nav-item name="tablet">
                Tablet devices
              </rt-tabs-nav-item>
              <rt-tabs-nav-item name="mobile">
                Mobile devices
              </rt-tabs-nav-item>
            </template>
            <template slot="content">
              <rt-tabs-content-item name="lg">
                <documentation-builder
                  :json="largeeJson"
                  type="classStyle"
                  :label="'min-width: '+variables['laptop-upper-limit']"
                />
              </rt-tabs-content-item>
              <rt-tabs-content-item name="all">
                <documentation-builder
                  :json="json"
                  type="classStyle"
                  label="all width"
                />
              </rt-tabs-content-item>
              <rt-tabs-content-item name="tablet">
                <documentation-builder
                  :label="'max-width: ' + variables['tablet-upper-limit']"
                  :json="tabletJson"
                  type="classStyle"
                />
              </rt-tabs-content-item>
              <rt-tabs-content-item name="mobile">
                <documentation-builder
                  :label="'max-width: ' + variables['mobile-upper-limit']"
                  :json="mobileJson"
                  type="classStyle"
                />
              </rt-tabs-content-item>
            </template>
          </rt-tabs>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const componentsList = {};
import variables from "@vue-rt-style-kit-atoms-local/variables.json";
export default {
  name: "AppGridElements",
  components: componentsList,
  data() {
    return {
      variables: variables,
      largeeJson: {
        items: []
      },
      json: {
        items: []
      },
      tabletJson: {
        items: []
      },
      mobileJson: {
        items: []
      }
    };
  },
  mounted() {
    const cssMapRules = {
      'padding-top': [1, 0, 0, 0, 0, 1],
      'padding-bottom': [0, 1, 0, 0, 0, 1],
      'padding-left': [0, 0, 1, 0, 1, 0],
      'padding-right': [0, 0, 0, 1, 1, 0],
    };
        ['lg', null, 'td', 'md'].forEach(($type) => {
      (new Array(6).fill(null).map((i, index) => index)).forEach(($i) => {
        (new Array(5).fill(null).map((i, index) => index)).forEach(($j) => {
          ['t', 'b', 'l', 'r', 'h', 'v'].forEach((direction,directionIndex) => {
            let className = ['sp'];
            if ($j > 0 || $i + $j == 0) {
              className.push(direction)
              if ($i + $j == 0) {
                className.push('none')
              } else {
                className.push($i);
                className.push($j);
                switch (direction) {
                  case 't':
                    break;
                  case 'b':
                    break;
                  case 'l':
                    break;
                  case 'l':
                    break;
                }
              }
              if ($type) {
                className.unshift($type)
              }
              const cssRules = [];
              const value = $i * 20 + $j*4 +'px';
              Object.keys(cssMapRules).map((key)=>{
                if(cssMapRules[key][directionIndex]){
                  cssRules.push('`'+[key,value].join(':')+'`')
                }
              })
              const data = {
                version: "0.3.15",
                name: '.'+className.join('-'),
                description: cssRules.join(' \n')
              }
              switch ($type) {
                case 'lg':
                  this.largeeJson.items.push(data);
                  break;
                case 'td':
                  this.tabletJson.items.push(data);
                  break;
                case 'md':
                  this.mobileJson.items.push(data);
                  break;
                default:
                  this.json.items.push(data);

              }


              // console.info(className.join('-'))
              // version: " \>= 0.0.17",
              //     name: ".rt-md-space-top-none",
              //     description: "*for mobile* \n\n```padding-top: 0px```"

            }
          })
        })
      })
    })


  },
  created() {},
  methods: {}
};
</script>
