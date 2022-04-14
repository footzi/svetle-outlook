<script lang="ts">
  import Header from 'components/Header/index.svelte';
  import { Routes } from 'enums/index';
  import { Route, Router } from 'svelte-navigator';

  import Calendar from './Calendar/index.svelte';
  import Mail from './Mail/index.svelte';
  import Notes from './Notes/index.svelte';
</script>

<div class="container">
  <Router>
    <div class="app">
      <Header />
      <main class="main">
        <Route path={Routes.NOTES_INNER}><Notes /></Route>
        <Route path={Routes.MAIL}><Mail /></Route>
        <Route path={Routes.CALENDAR}><Calendar /></Route>
        <!--        <Route path={Routes.NOTES_ID}><h1>notes id</h1></Route>-->
      </main>
    </div>
  </Router>
</div>

<style lang="scss">
  @import '../styles/colors';

  .container {
    width: 100%;
    height: 100vh;
    padding: 12px;
  }

  .app {
    height: 100%;
    overflow: hidden;
  }

  main {
    height: 100%;
  }
</style>
