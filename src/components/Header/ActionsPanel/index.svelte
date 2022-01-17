<script lang="ts">
  import Button from '../../../components/Button/index.svelte';
  import Fa from 'svelte-fa/src/fa.svelte';
  import { faEnvelope, faTrashAlt } from '@fortawesome/free-regular-svg-icons';
  import { HeaderMenuType } from '../constants';

  let activeMenu = HeaderMenuType.MAIN;

  export { activeMenu }
</script>

<div class="container">
  {#if activeMenu === HeaderMenuType.MAIN}
    <div class="panel">
      <ul class="buttons">
        <li>
          <Button variant="outlined" color="primary" text="создать">
            <svelte:fragment slot="icon">
              <Fa icon={faEnvelope} size={'1.6x'} />
            </svelte:fragment>
          </Button>
        </li>
        <li>
          <Button variant="outlined" color="primary" text="удалить">
            <svelte:fragment slot="icon">
              <Fa icon={faTrashAlt} size={'1.6x'} />
            </svelte:fragment>
          </Button>
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
    padding-left: 20px;
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
