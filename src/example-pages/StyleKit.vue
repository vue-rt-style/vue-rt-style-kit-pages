<script>
export default {
  init: async Scope => {
    // @Static
    // const Atoms = await import(/* webpackChunkName: "stylekit-atoms" */ 'vue-rt-style-kit-atoms/index-for-library.js').catch(e => console.error(e))
    // @Dynamic
    const Atoms = await import(/* webpackChunkName: "stylekit-atoms" */ 'vue-rt-style-kit-atoms/index-for-dynamic.js').catch(e => console.error(e))
    // @Library
    // const Atoms = await import(/* webpackChunkName: "stylekit-atoms" */ 'vue-rt-style-kit-atoms/dist/vue-rt-style-kit-atoms.umd.min.js').catch(e => console.error(e))
    // import('vue-rt-style-kit-atoms/dist/vue-rt-style-kit-atoms.css')
    Scope.use(Atoms.default)

    // @Static
    // const Icons = await import(/* webpackChunkName: "stylekit-icons" */ 'vue-rt-style-kit-icons/index-for-library.js').catch(e => console.error(e))
    // @Dynamic
    // const Icons = await import(/* webpackChunkName: "stylekit-icons" */ 'vue-rt-style-kit-icons/index-for-dynamic.js').catch(e => console.error(e))
    // @Library
    // const Icons = await import(/* webpackChunkName: "stylekit-icons" */ 'vue-rt-style-kit-icons/dist/vue-rt-style-kit-icons.umd.min.js').catch(e => console.error(e))
    // import('vue-rt-style-kit-icons/dist/vue-rt-style-kit-icons.css')
    // Scope.use(Icons.default)

    // @Static
    // const Molecules = await import(/* webpackChunkName: "stylekit-molecules" */ 'vue-rt-style-kit-molecules/index-for-library.js').catch(e => console.error(e))
    // @Dynamic
    // const Molecules = await import(/* webpackChunkName: "stylekit-molecules" */ 'vue-rt-style-kit-molecules/index-for-dynamic.js').catch(e => console.error(e))
    // @Library
    // const Molecules = await import(/* webpackChunkName: "stylekit-molecules" */ 'vue-rt-style-kit-molecules/dist/vue-rt-style-kit-molecules.umd.min.js').catch(e => console.error(e))
    // import('vue-rt-style-kit-molecules/dist/vue-rt-style-kit-molecules.css')
    // Scope.use(Molecules.default)

    // Следует закомментировать при работе с Library сборкой
    // await import(/* webpackChunkName: "stylekit-styles" */ './StyleKitStyles.vue')
  }
}
</script>
