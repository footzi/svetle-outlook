<script lang="ts">
  import { faSave } from '@fortawesome/free-regular-svg-icons';
  import { showMessageModal } from 'store/index';
  import { focusTrap } from 'svelte-focus-trap';
  import { fade, fly } from 'svelte/transition';

  import Button from '../../Button/index.svelte';
  import ColorPicker from '../../ColorPicker/index.svelte';
  import type { ColorPickerSelectedEvent } from '../../ColorPicker/interfaces';
  import {
    ALIGN_TEXT_OPERATIONS,
    COLOR_OPERATIONS,
    FORM_TEXT_OPERATIONS,
    MessageEditorOperations
  } from './constants';

  let isShowMessageModal = false;
  let operations: MessageEditorOperations[] = [];

  showMessageModal.subscribe((value: boolean) => {
    isShowMessageModal = value;
  });

  const handleCLickOverlay = () => showMessageModal.update(() => false);

  const handleClickOperation = (type: MessageEditorOperations) => {
    if (operations.includes(type)) {
      operations = operations.filter((op) => op !== type);
    } else {
      operations = [...operations, type];
    }

    // eslint-disable-next-line
    document.execCommand(type);
  };

  const handleClickChangeColor =
    (type: MessageEditorOperations) =>
    (event: CustomEvent<ColorPickerSelectedEvent>) => {
      document.execCommand(type, true, event.detail.color);
    };
</script>

{#if isShowMessageModal}
  <div class="container" transition:fade={{ delay: 100, duration: 300 }}>
    <div class="overlay" on:click={handleCLickOverlay} />
    <div
      class="content"
      transition:fly={{ y: -100, duration: 300 }}
      use:focusTrap
    >
      <div>
        <Button
          text="Сохранить"
          icon={faSave}
          variant="outlined"
          iconPosition="top"
        />
      </div>
      <div class="control-panel">
        <ul class="controls">
          {#each FORM_TEXT_OPERATIONS as { type, icon }}
            <li>
              <Button
                variant="outlined"
                size="S"
                {icon}
                iconPosition="only"
                isPressed={operations.includes(type)}
                on:click={() => handleClickOperation(type)}
              />
            </li>
          {/each}
        </ul>

        <ul class="controls">
          {#each ALIGN_TEXT_OPERATIONS as { type, icon }}
            <li>
              <Button
                variant="outlined"
                size="S"
                {icon}
                iconPosition="only"
                isPressed={operations.includes(type)}
                on:click={() => handleClickOperation(type)}
              />
            </li>
          {/each}
        </ul>

        <ul class="controls">
          {#each COLOR_OPERATIONS as { type, icon, defaultColor }}
            <li>
              <ColorPicker
                mainIcon={icon}
                {defaultColor}
                on:select={handleClickChangeColor(type)}
              />
            </li>
          {/each}
        </ul>
      </div>

      <div class="field" contenteditable="true" />
    </div>
  </div>
{/if}

<style lang="scss">
  @import '../../../styles/colors';
  @import '../../../styles/mixins';
  @import '../../../styles/font-size';

  .container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    overflow: auto;
    padding: 24px;
  }

  .overlay {
    width: calc(100% + 48px);
    height: calc(100% + 48px);
    margin-left: -24px;
    margin-top: -24px;
    background-color: rgba($black, 0.2);
    position: fixed;
    cursor: pointer;
  }

  .content {
    position: relative;
    z-index: 2;
    background-color: $white;
    box-shadow: rgba($black, 20%) 0 2px 1px -1px,
      rgb($black, 14%) 0px 1px 1px 0px, rgb($black, 12%) 0px 1px 3px 0px;
    width: 70%;
    height: 600px;
    padding: 24px;
    margin: auto;
    display: flex;
    flex-direction: column;
  }

  .control-panel {
    display: flex;
    margin-top: 8px;
  }

  .controls {
    display: flex;
    margin-right: 12px;

    li {
      margin-right: 8px;
    }
  }

  .field {
    width: 100%;
    height: 100%;
    margin-top: 12px;
    padding: 8px;
    border: 1px solid rgba($gray-light, 0.3);
    outline: none;

    &:global(.focus-visible) {
      outline: 1px solid $primary-main;
    }
  }
</style>
