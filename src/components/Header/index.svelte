<script lang="ts">
  import { MAIN_MENU } from 'constants/index';
  import { link, useLocation } from 'svelte-navigator';

  const location = useLocation();
</script>

<header>
  <ul class="buttons">
    {#each MAIN_MENU as { href, title }}
      <li>
        <a
          {href}
          class="link"
          class:is-active={href === $location.pathname}
          use:link>{title}</a
        >
      </li>
    {/each}
  </ul>
</header>

<style lang="scss" module>
  @import '../../styles/colors';
  @import '../../styles/mixins';
  @import '../../styles/font-size';

  .buttons {
    display: flex;
  }

  .link {
    @include transition(color, background-color, border-color);
    @include font-text();
    padding: 12px 24px;
    border-bottom: 1px solid transparent;
    color: $gray-dark;
    text-transform: uppercase;
    outline: none;
    display: block;
    text-decoration: none;

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
