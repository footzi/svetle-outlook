<script lang="ts">
  import ActionsPanel from './ActionsPanel/index.svelte';
  import { HeaderMenuType } from './constants';

  let activeMenu: HeaderMenuType = HeaderMenuType.MAIN;

  const onClick = (type: HeaderMenuType) => (activeMenu = type);
</script>

<header class="container">
  <ul class="buttons">
    <li>
      <button on:click={() => onClick(HeaderMenuType.MAIN)}>Главная</button>
    </li>
    <li>
      <button on:click={() => onClick(HeaderMenuType.SORT)}
        >Упорядочивание</button
      >
    </li>
    <li>
      <button on:click={() => onClick(HeaderMenuType.SERVICE)}>Сервис</button>
    </li>
  </ul>
</header>

<ActionsPanel {activeMenu} />

<style lang="scss">
  @import '../../styles/colors';
  @import '../../styles/mixins';
  @import '../../styles/font-size';

  .container {
    background-color: $primary-light;
  }

  .buttons {
    padding-top: 20px;
    padding-left: 20px;
    display: flex;
  }

  button {
    @include transition(color);
    @include font-text();
    color: $white;
    margin-right: 20px;
    outline: none;

    &:hover,
    &:focus {
      color: $gray-dark;
    }
  }
</style>
