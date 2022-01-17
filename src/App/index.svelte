<script>
import Header from '@components/Header/index.svelte'
</script>

<div class="container">
  <div class="app">
    <Header />
  </div>
</div>

<style lang="scss">
  @import '../styles/colors';

  .container {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .app {
    width: 80%;
    height: 80%;
    min-height: 600px;
    border-radius: 8px;
    box-shadow: 4px 4px 8px 0 rgba($black, 0.2);
    overflow: hidden;
  }
</style>
