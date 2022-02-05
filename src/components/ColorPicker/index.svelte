<script lang="ts">
  import Icon from 'svelte-fa';
  import { fly } from 'svelte/transition';
  import {
    faPaintBrush,
    faChevronDown
  } from '@fortawesome/free-solid-svg-icons';
  import type { IconDefinition } from '@fortawesome/fontawesome-common-types';

  import { COLORS, DEFAULT_COLOR } from './constants';
  import { createEventDispatcher } from 'svelte';

  let mainIcon: IconDefinition | null = null;
  let isOpened = false;
  let selectedColor: string | null = null;
  let defaultColor: string = DEFAULT_COLOR;

  const dispatch = createEventDispatcher();

  const handleMainClick = () => (isOpened = !isOpened);

  const handleClickColor = (color: string) => {
    selectedColor = color;
    dispatch('select', { color });
    isOpened = false;
  };

  const handleClickReset = () => {
    selectedColor = null;
    dispatch('select', { color: defaultColor });
    isOpened = false;
  };

  export { selectedColor, mainIcon, defaultColor };
</script>

<div class="container">
  <button class="main-button" on:click={handleMainClick}>
    <div>
      <Icon icon={mainIcon ? mainIcon : faPaintBrush} class="icon" />

      {#if selectedColor}
        <div class="selected-color" style="background-color: {selectedColor}" />
      {/if}
    </div>

    <div class="separate" />
    <Icon icon={faChevronDown} class="chevron" />
  </button>

  {#if isOpened}
    <div class="content" transition:fly={{ y: -10, duration: 300 }}>
      <ul class="colors">
        {#each COLORS as color}
          <li>
            <button
              class="color"
              style="background-color: {color}"
              on:click={() => handleClickColor(color)}
            />
          </li>
        {/each}
      </ul>

      <button class="reset" on:click={handleClickReset}>Сбросить цвет</button>
    </div>
  {/if}
</div>

<style lang="scss">
  @import '../../styles/colors';
  @import '../../styles/mixins';
  @import '../../styles/font-size';

  .container {
    position: relative;
    display: flex;
  }

  .main-button {
    @include transition(background-color, box-shadow, border-color);
    display: flex;
    align-items: center;
    border-radius: 4px;
    padding: 8px;
    text-transform: uppercase;
    outline: none;
    color: $primary-main;
    border: 1px solid $primary-light;

    :global(.icon) {
      width: 16px;
      height: 16px !important;
    }

    :global(.chevron) {
      margin-left: 8px;
    }

    &:hover,
    &:focus {
      border: 1px solid $primary-main;
      background-color: rgba($primary-main, 0.1);
    }
  }

  .selected-color {
    width: 16px;
    height: 4px;
    margin-top: 1px;
    position: absolute;
    border-radius: 2px;
  }

  .separate {
    width: 1px;
    height: calc(100% + 10px);
    background-color: $primary-main;
    margin-left: 12px;
  }

  .content {
    position: absolute;
    background-color: $white;
    width: 200px;
    bottom: -4px;
    left: 50%;
    transform: translateX(-50%) translateY(100%);
    box-shadow: rgba($black, 20%) 0 2px 1px -1px,
      rgb($black, 14%) 0px 1px 1px 0px, rgb($black, 12%) 0px 1px 3px 0px;
  }

  .colors {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .color {
    width: 20px;
    height: 20px;
    margin: 8px;
  }

  .reset {
    color: $primary-main;
    margin: 0 auto 8px auto;
    display: flex;
  }
</style>
