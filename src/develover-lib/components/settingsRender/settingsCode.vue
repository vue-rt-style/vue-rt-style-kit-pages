<script type="text/jsx">

import { CodeJar } from 'codejar'
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css'
import './settingsCode.styl'


export default {
  name: 'settingCode',
  props: {

    code: {
      type: String,
    },
    codeEl: {
      type: Array
    },
  },
  data: () => ({
    jar: {}
  }),
  watch: {
    codeEl: {
      deep: true,
      handler(newVal, oldVal) {
        if (JSON.stringify(newVal) != JSON.stringify(oldVal)) {
          this.updateEditorCode()
        }
      }

    }
  },
  methods: {
    updateEditorCode() {
      this.jar.updateCode(this.codeEl[0] + this.code + this.codeEl[1]);
    }
  },
  mounted() {
    const highlight = (editor) => {
      let code = editor.textContent
      code = code.replace(this.codeEl[0], '')
      code = code.replace(this.codeEl[1], '')
      let preCode = Prism.highlight(this.codeEl[0], Prism.languages.html, 'html')
      let postCode = Prism.highlight(this.codeEl[1], Prism.languages.html, 'html')
      preCode = '<span contenteditable="false">' + preCode + '</span>'
      postCode = '<span contenteditable="false">' + postCode + '</span>'
      editor.innerHTML = preCode + Prism.highlight(code, Prism.languages.html, 'html') + postCode;
    }
    this.jar = CodeJar(this.$refs['editor'], highlight);
    this.jar.updateCode(this.codeEl[0] + this.code + this.codeEl[1]);
    this.jar.onUpdate(code => {
      let htmlCode = code;
      htmlCode = htmlCode.replace(this.codeEl[0], '')
      htmlCode = htmlCode.replace(this.codeEl[1], '')
      this.$emit('change', htmlCode);

    })
  },
  render: function (h) {
    return <div ref="editor" class="editor"></div>
  }

};
</script>
