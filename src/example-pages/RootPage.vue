<script>
import Child from './Child.vue'

export default {
  components: {
    Child
  },
  render: h => {
    return <div>
      Hello world!
      <div class="sp-t-1">
        <rt-button>Click me</rt-button>
        <child></child>
      </div>
    </div>
  }
}
</script>
