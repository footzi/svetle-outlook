<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import type {
    ButtonSize,
    ButtonVariants,
    ButtonIconPosition
  } from './constants';
  import Icon from 'svelte-fa';
  import type { IconDefinition } from '@fortawesome/free-regular-svg-icons';

  let text = '';
  let variant: ButtonVariants = 'contained';
  let iconPosition: ButtonIconPosition = 'top';
  let size: ButtonSize = 'M';
  let icon: IconDefinition | null = null;
  let isPressed = false;

  const dispatch = createEventDispatcher();
  const handleClick = () => dispatch('click');

  export { text, variant, size, icon, iconPosition, isPressed };
</script>

<button
  class:icon-top={iconPosition === 'top'}
  class:icon-only={iconPosition === 'only'}
  class:contained={variant === 'contained'}
  class:outlined={variant === 'outlined'}
  class:size-s={size === 'S'}
  class:is-pressed={isPressed}
  on:click={handleClick}
>
  {text}

  {#if icon}
    <Icon {icon} class="icon" />
  {/if}
</button>

<style lang="scss">
  @import '../../styles/colors';
  @import '../../styles/mixins';
  @import '../../styles/font-size';

  button {
    @include transition(background-color, box-shadow, border-color);
    display: flex;
    align-items: center;
    border-radius: 4px;
    padding: 6px 12px;
    text-transform: uppercase;
    outline: none;

    &.contained {
      color: $white;
      background-color: $primary-main;
      box-shadow: 0 3px 1px -2px rgba($black, 0.2),
        0 2px 2px 0px rgba($black, 0.14), 0 1px 5px 0px rgba($black, 0.12);

      &:hover,
      &:global(.focus-visible) {
        background-color: $primary-dark;
        box-shadow: 0 2px 4px -1px rgba($black, 0.2),
          0px 4px 5px 0px rgba($black, 0.14), 0px 1px 10px 0px rgb($black, 0.12);
      }
    }

    &.outlined {
      color: $primary-main;
      border: 1px solid $primary-light;

      &:hover,
      &:global(.focus-visible) {
        border: 1px solid $primary-main;
        background-color: rgba($primary-main, 0.1);
      }

      &.is-pressed,
      &:active {
        background-color: rgba($primary-main, 0.2);
      }
    }

    &.size-s {
      padding: 8px;
    }

    :global(.icon) {
      width: 18px;
      height: 18px !important;
    }

    &.icon-top {
      flex-direction: column-reverse;

      :global(.icon) {
        margin: 0 0 6px 0;
        width: 18px;
      }
    }

    &.icon-right {
      :global(.icon) {
        margin: 0 0 0 6px;
      }
    }

    &.icon-only {
      :global(.icon) {
        margin: 0;
      }
    }
  }
</style>
