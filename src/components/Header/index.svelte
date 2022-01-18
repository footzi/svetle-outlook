<script lang="ts">
  import ActionsPanel from './ActionsPanel/index.svelte';
  import { HeaderMenuType, MAIN_MENU } from './constants';

  let activeMenu: HeaderMenuType = HeaderMenuType.MAIN;

  const onClick = (type: HeaderMenuType) => (activeMenu = type);
</script>

<header class="container">
  <ul class="buttons">
    {#each MAIN_MENU as { type, title }}
      <li>
        <button
          on:click={() => onClick(type)}
          class:active={type === activeMenu}>{title}</button
        >
      </li>
    {/each}
  </ul>
</header>

<ActionsPanel {activeMenu} />

<style lang="scss">
  @import '../../styles/colors';
  @import '../../styles/mixins';
  @import '../../styles/font-size';

  .buttons {
    margin-top: 20px;
    display: flex;
  }

  button {
    @include transition(color, background-color, border-color);
    @include font-text();
    padding: 12px 24px;
    border-bottom: 1px solid transparent;
    color: $gray-dark;
    text-transform: uppercase;
    outline: none;

    &.active {
      color: $secondary-main;
      border-bottom: 1px solid $secondary-main;
    }

    &:hover,
    &:focus {
      background-color: rgba($secondary-light, 0.1);
    }
  }
</style>
