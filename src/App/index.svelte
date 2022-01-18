<script>
  import Header from '@components/Header/index.svelte';
  import Mail from '../components/Mail/index.svelte';
</script>

<div class="container">
  <div class="app">
    <Header />
    <main class="main">
      <Mail />
    </main>
  </div>
</div>

<style lang="scss">
  @import '../styles/colors';

  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba($gray-light, 0.1);
    width: 100%;
    height: 100vh;
  }

  .app {
    width: 80%;
    min-height: 80%;
    border-radius: 4px;
    box-shadow: rgba($black, 20%) 0 2px 1px -1px,
      rgb($black, 14%) 0px 1px 1px 0px, rgb($black, 12%) 0px 1px 3px 0px;
    overflow: hidden;
    background-color: $white;
    padding-right: 24px;
    padding-left: 24px;
  }

  .main {
    display: flex;
    margin-top: 12px;
    border-top: 1px solid rgba($gray-light, 0.3);
  }
</style>
