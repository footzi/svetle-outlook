<script lang="ts">
  import Icon from 'svelte-fa';
  import { FOLDERS, FolderType } from './constants';

  let activeFolder = FolderType.INPUT;

  const handleClickFolder = (type: FolderType) => (activeFolder = type);

  export { activeFolder };
</script>

<ul>
  {#each FOLDERS as { title, type, icon }}
    <li>
      <button
        on:click={() => handleClickFolder(type)}
        class:is-active={type === activeFolder}
      >
        <Icon {icon} size={'1x'} class="icon" />
        {title}
      </button>
    </li>
  {/each}
</ul>

<style lang="scss">
  @import '../../../styles/colors';
  @import '../../../styles/mixins';
  @import '../../../styles/font-size';

  ul {
    border-right: 1px solid rgba($gray-light, 0.3);
    padding-top: 8px;
    padding-right: 8px;
  }

  li {
    margin-bottom: 4px;
  }

  button {
    @include transition(background-color);
    width: 120px;
    display: flex;
    align-items: center;
    padding: 8px 12px;
    outline: none;

    &.is-active {
      background-color: rgba($gray-light, 0.1);

      :global(.icon) {
        color: $primary-main;
      }
    }

    &:hover,
    &:focus {
      background-color: rgba($gray-light, 0.1);
    }

    :global(.icon) {
      @include transition(color);
      margin-right: 8px;
    }
  }
</style>
