<template>
  <div class="rt-container">
    <div class="app-content rt-col-12 rt-col-md-3">
      <div class="app-title">
        <h1 class="rt-font-hero">
          Textarea v2
        </h1>
      </div>
      <div class="app-row row">
        <div class="rt-col-2 sp-b-2  rt-col-md-3">

          <input type="checkbox" id="error" v-model="checked">
          <label for="error">has error {{ checked }}</label>
        </div>
        <div class="rt-col-2 sp-b-2  rt-col-md-3">

          <input type="checkbox" id="checkbox" v-model="checked2">
          <label for="checkbox">is disabled {{ checked2 }}</label>
        </div>
        <div class="rt-col-2 sp-b-2  rt-col-md-3">

          <input type="checkbox" id="checkbox3" v-model="checked3">
          <label for="checkbox3">stop on oversize {{ checked3 }}</label>
        </div>
        <div class="rt-col-2 sp-b-2  rt-col-md-3">
          error message:
          <input v-model="errorMes">
        </div>
        <div class="rt-col-2 sp-b-2  rt-col-md-3">
          max size:
          <input type="number" min="0" v-model="maxSize">
        </div>

      </div>
      <div class="app-row row">
        <div class="rt-col-6  rt-col-md-3">
          <rt-textarea :error-message="errorMes" :stop-on-oversize="checked3" :version="2" :has-error="checked" :disabled="checked2" :max-size="maxSize"
                       placeholder="Textarea" label="Введите комментарий:"></rt-textarea>
        </div>
        <div class="rt-col-6  rt-col-md-3">
          <rt-textarea :resize="true" :error-message="errorMes" :stop-on-oversize="checked3" :version="2" :disabled="checked2" :has-error="checked" :max-size="maxSize"
                       placeholder="Textarea" label="Введите комментарий:"></rt-textarea>
        </div>
      </div>

      <div class="app-title">
        <h1 class="rt-font-hero">
          Textarea v1 (deprecated)
        </h1>
      </div>
      <div class="app-body">
        <div class="app-row row">
          <div class="col  rt-col-md-3 ">
            <p class="rt-font-h3">
              Textarea
            </p>
          </div>
        </div>
        <div class="app-row row">
          <div class="rt-col-6  rt-col-md-3">
            <span class="rt-font-label flex-fill rt-space-bottom05"
            >simple static textarea</span
            >
            <pre-code
                text='<rt-textarea-static placeholder="Textarea" label="Введите комментарий:"></rt-textarea-static>'></pre-code>
          </div>
          <div class="rt-col-6  rt-col-md-3 rt-md-space-top">
            <span class="rt-font-label flex-fill rt-space-bottom05"
            >static textarea with error</span
            >
            <pre-code
                text='<rt-textarea-static
              :has-error="true"
              label="Введите комментарий:"
              error-message="textarea error message"
              placeholder="Textarea"
            ></rt-textarea-static>'></pre-code>
          </div>
        </div>
        <div class="app-row row">
          <div class="col rt-col-md-3">
            <span class="rt-font-label flex-fill rt-space-bottom05"
            >static disabled textarea</span
            >
            <pre-code
                text='<rt-textarea-static
              :disabled="true"
              label="Введите комментарий:"
              error-message="textarea error message"
              placeholder="Textarea"
            ></rt-textarea-static>'></pre-code>
          </div>
        </div>
        <div class="app-row row">
          <div class="rt-col-4  rt-col-md-2 rt-md-space-top d-flex flex-column">
            <span class="rt-font-label flex-fill rt-space-bottom05">dynamic textarea</span>
            <rt-textarea
                v-model="myModel"
                :auto-resize="false"
                placeholder="Textarea with model"
            ></rt-textarea>
            <span class="color-main07">Result model: {{ myModel }}</span>
            <pre-code
                text='<rt-textarea value="sadas\nd\nas\ndas\n" placeholder="Textarea" ></rt-textarea>'></pre-code>
          </div>
          <div class="rt-col-4  rt-col-md-2 rt-md-space-top d-flex flex-column">
            <span class="rt-font-label flex-fill rt-space-bottom05">dynamic textarea with error</span>
            <pre-code
                text='<rt-textarea
              :has-error="true"
              label="Введите комментарий:"
              placeholder="Textarea"
              error-message="textarea error message"
            ></rt-textarea>'></pre-code>
          </div>

          <div class="rt-col-4  rt-col-md-1 rt-md-space-top d-flex flex-column">
            <span class="rt-font-label flex-fill rt-space-bottom05">dynamic disabled textarea</span>
            <pre-code
                text='<rt-textarea
              :disabled="true"
              label="Введите комментарий:"
              placeholder="Textarea"
              error-message="textarea error message"
            ></rt-textarea>'></pre-code>
          </div>
        </div>
        <div class="app-row row color-block--light-grey rt-space-bottom rt-space-top">
          <div class="rt-col-4  rt-col-md-2 rt-md-space-top">
            <pre-code text='<rt-textarea placeholder="Textarea" :is-b2b-textarea="true"/>'/>
          </div>
          <div class="rt-col-4  rt-col-md-2 rt-md-space-top d-flex flex-column">
            <pre-code text='<rt-textarea
              :has-error="true"
              :is-b2b-textarea="true"
              placeholder="Textarea"
              error-message="textarea error message"/>'/>
          </div>

          <div class="rt-col-4  rt-col-md-1 rt-md-space-top d-flex flex-column">
            <rt-textarea
                :disabled="true"
                :is-b2b-textarea="true"
                placeholder="Textarea"
                error-message="textarea error message"
            ></rt-textarea>
          </div>
        </div>
        <div class="app-row row">
          <div class="rt-col-4 rt-col-md-2 rt-md-space-top">
            <pre-code
                text='<rt-textarea
              placeholder="Textarea"
              :is-b2b-textarea="true"
              :outlined="true"/>'/>
          </div>
          <div class="rt-col-4 rt-col-md-2 rt-md-space-top d-flex flex-column">
            <pre-code text='<rt-textarea
              :has-error="true"
              :is-b2b-textarea="true"
              placeholder="Textarea"
              error-message="textarea error message"
              :outlined="true"/>'/>
          </div>

          <div class="rt-col-4 rt-col-md-1 rt-md-space-top d-flex flex-column">
            <pre-code text='<rt-textarea
              :disabled="true"
              :is-b2b-textarea="true"
              placeholder="Textarea"
              error-message="textarea error message"
              :outlined="true"
            />'/>
          </div>
        </div>
        <div class="app-row row rt-space-top">
          <documentation-builder :json="documentation" type="components"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import documentation from "@vue-rt-style-kit-atoms-local/components/Textarea/docs/index.json";
import componentsList from "../../componentsList";

//  const componentsList = {};
export default {
  name: "AppTextarea",
  components: componentsList,
  data: () => ({
    checked: false,
    checked3: false,
    checked2: false,
    documentation: {},
    myModel: 'Sample text here',
    errorMes: 'error message',
    maxSize: 0
  }),
  mounted() {
    this.documentation = documentation;
  },
  created() {
  },
  methods: {}
};
</script>
