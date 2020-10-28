<script>
export default {
  name: 'AppBannerSkeleton',
  functional: true,
  render(h) {
    return <div>
      <div class="rt-container">
        <div class="grid-center"/>
        <div class="app-content rt-col-12 rt-col-md-3">
          <div class="app-title">
            <div class="row"><h1 class="rt-font-hero rt-col">Banner Skeleton</h1></div>
          </div>
        </div>
      </div>
      <div class="sp-b-2">
        <pre-code text='<rt-banner-skeleton />'></pre-code>
      </div>
    </div>
  }
}
</script>