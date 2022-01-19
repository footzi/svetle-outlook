<script lang="ts">
  import Folders from './Folders/index.svelte';
  import List from './List/index.svelte';
  import Body from './Body/index.svelte';
  import { getMail } from './utils/getMail';
  import { FolderType } from './Folders/constants';
  import type { Message } from '../../interfaces';

  let activeFolder = FolderType.INPUT;
  let activeMessage: Message | null = null;
  let messages: Message[] = [];

  const load = async () => {
    const loadMessages = await getMail(activeFolder);

    if (loadMessages.length) {
      messages = loadMessages;
      activeMessage = loadMessages[0];
    }
  };

  $: activeFolder && load();
</script>

<Folders bind:activeFolder bind:activeMessage />
<List {messages} bind:activeMessage />
<Body {activeMessage} />
