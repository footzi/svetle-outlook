<script lang="ts">
  import Button from '../../../components/Button/index.svelte';
  import { faEnvelope, faTrashAlt } from '@fortawesome/free-regular-svg-icons';
  import { HeaderMenuType } from '../constants';
  import { showMessageModal } from '../../../store';

  let activeMenu = HeaderMenuType.MAIN;

  const handleCreateButton = () => showMessageModal.set(true);

  export { activeMenu };
</script>

<div class="container">
  {#if activeMenu === HeaderMenuType.MAIN}
    <div class="panel">
      <ul class="buttons">
        <li>
          <Button
            variant="outlined"
            color="primary"
            text="создать"
            icon={faEnvelope}
            iconPosition="top"
            on:click={handleCreateButton}
          />
        </li>
        <li>
          <Button
            variant="outlined"
            color="primary"
            text="удалить"
            iconPosition="top"
            icon={faTrashAlt}
          />
        </li>
      </ul>
    </div>
  {/if}

  {#if activeMenu === HeaderMenuType.SORT}
    <div class="panel" />
  {/if}
</div>

<style lang="scss">
  @import '../../../styles/colors';
  @import '../../../styles/mixins';
  @import '../../../styles/font-size';

  .container {
    background-color: $white;
  }

  .buttons {
    display: flex;
    margin-top: 8px;

    li {
      margin-right: 8px;
    }
  }
</style>
