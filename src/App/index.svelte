<script lang="ts">
  import Header from 'components/Header/index.svelte';
  import MessageModal from 'components/Mail/MessageModal/index.svelte';
  import Mail from 'components/Mail/index.svelte';
  import { MenuTypes } from 'enums/index';
  import { activeMenu } from 'store/index';
  import { Route, Router } from 'svelte-navigator';

  import Calendar from './Calendar/index.svelte';
  import Notes from './Notes/index.svelte';
  import Ui from './ui.svelte';

  let activeMenuItem: MenuTypes;
  activeMenu.subscribe((value) => (activeMenuItem = value));
</script>

<div class="container">
  <Router>
    <Route path="/ui">
      <Ui />
    </Route>

    <Route path="">
      <div class="app">
        <Header />
        <main class="main">
          {#if activeMenuItem === MenuTypes.MAIN}
            <Mail />
            <MessageModal />
          {/if}

          {#if activeMenuItem === MenuTypes.NOTES}
            <Notes />
          {/if}

          {#if activeMenuItem === MenuTypes.CALENDAR}
            <Calendar />
          {/if}
        </main>
      </div>
    </Route>
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
