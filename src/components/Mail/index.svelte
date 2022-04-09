<script lang="ts">
  import { faEnvelope, faTrashAlt } from '@fortawesome/free-regular-svg-icons';
  import ActionsPanel from 'components/ActionsPanel/index.svelte';
  import Button from 'components/Button/index.svelte';
  import { showMessageModal } from 'store/index';

  import type { Message } from '../../interfaces';
  // import Body from './Body/index.svelte';
  import { FolderType } from './Folders/constants';
  import Folders from './Folders/index.svelte';
  // import List from './List/index.svelte';
  import { getMail } from './utils/getMail';

  let activeFolder = FolderType.INPUT;
  let activeMessage: Message | null = null;
  let messages: Message[] = [];

  const handleCreateButton = () => showMessageModal.set(true);

  const load = async () => {
    const loadMessages = await getMail(activeFolder);

    if (loadMessages.length) {
      messages = loadMessages;
      activeMessage = loadMessages[0];
    }
  };

  $: activeFolder && load();
</script>

<ActionsPanel>
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
</ActionsPanel>

<div class="container">
  <Folders bind:activeFolder bind:activeMessage />
  <!--  <List {messages} bind:activeMessage />-->
  <!--  <Body {activeMessage} />-->
</div>

<style lang="scss">
  @import '../../styles/colors';

  .container {
    border-top: 1px solid rgba($gray-light, 0.3);
    display: flex;
    margin-top: 12px;
  }
</style>
