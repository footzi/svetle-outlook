<script lang="ts">
  import { MAIN_MENU } from 'constants/index';
  import { MenuTypes } from 'enums/index';
  import { activeMenu } from 'store/index';

  console.log(activeMenu);

  const handleClick = (type: MenuTypes) => activeMenu.set(type);
</script>

<header class="container">
  <ul class="buttons">
    {#each MAIN_MENU as { type, title }}
      <li>
        <button
          on:click={() => handleClick(type)}
          class:is-active={type === activeMenu}>{title}</button
        >
      </li>
    {/each}
  </ul>
</header>

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

    &.is-active {
      color: $secondary-main;
      border-bottom: 1px solid $secondary-main;
    }

    &:hover,
    &:global(.focus-visible) {
      background-color: rgba($secondary-light, 0.1);
    }
  }
</style>
