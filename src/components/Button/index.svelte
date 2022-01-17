<script lang="ts">
  let text = ''
  let variant = 'contained'
  let color = 'primary'
  let iconPosition = 'top'

  export { text, variant, color }
</script>

<button
  class:icon-top={iconPosition === 'top'}
  class:contained={variant === 'contained'}
  class:outlined={variant === 'outlined'}
>
  {text}

  {#if $$slots.icon}
    <span class="icon-container">
      <slot name="icon" />
    </span>
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
    padding: 6px 16px;
    text-transform: uppercase;
    outline: none;
  }

  .contained {
    color: $white;
    background-color: $primary-main;
    box-shadow: 0 3px 1px -2px rgba($black, 0.2),
    0 2px 2px 0px rgba($black, 0.14), 0 1px 5px 0px rgba($black, 0.12);

    &:hover, &:focus {
      background-color: $primary-dark;
      box-shadow: 0 2px 4px -1px rgba($black, 0.2),
      0px 4px 5px 0px rgba($black, 0.14), 0px 1px 10px 0px rgb($black, 0.12);
    }
  }

  .outlined {
    color: $primary-main;
    border: 1px solid $primary-light;

    &:hover, &:focus {
      border: 1px solid $primary-main;
      background-color: rgba($primary-main, 0.1);
    }
  }

  .icon-top {
    flex-direction: column-reverse;

    .icon-container {
      margin: 0 0 4px 0;
    }
  }

  .icon-container {
    margin-left: 8px;
  }
</style>
