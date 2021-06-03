
<script type="text/jsx">
export default {
  name: "PreTimeout",
  props: {
    text: {
      type: String,
      default: null
    },
    time:{
      type: String|Number,
      default: 1000
    }
  },
  data: () => ({
    ready: false,
  }),
  computed: {
    normalizeCode() {
      return {
        template: (this.localCode
                ? this.localCode
                : this.text.replace(/\\\{\\\{/g, "{{")
                    .replace(/rt-template/g, "template")
        ).replace("/{/{", "{{"),
        components: componentsList
      };
    },
    normalizeCodeLocal() {
      return {
        template: (this.localCode
                ? this.localCode.replace(/\\\{\\\{/g, "{{")
                    .replace(/<template/g, "<rt-template")
                    .replace(/<\/template/g, "</rt-template")
                : this.text.replace(/\\\{\\\{/g, "{{").replace(/template/g, "rt-template")
        ).replace("/{/{", "{{"),
        components: componentsList
      }

    },
    toggleClassObjects() {
      const classObject = {};
      if (this.showCodeEditor) {
        classObject["pre-component__trigger--is-active"] = true;
      }
      return classObject;
    }
  },

  watch: {
    text(value) {
      this.localCode = this.changeComponentCode(this.text);
    }
  },

  mounted() {
    setTimeout( ()=>{
      this.ready = true
    },(this.time - 0))
  },
  methods: {
  },
  render(createElement, context) {
    if(this.ready){
      return this.$slots.default
    }
    return <span class="relative"><rt-spinner is-small={true} /></span>
  }
};

</script>
