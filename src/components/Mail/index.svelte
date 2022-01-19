<script lang="ts">
  import Folders from './Folders/index.svelte';
  import List from './List/index.svelte';
  import { getMail } from './utils/getMail';
  import { FolderType } from './Folders/constants';
  import type { Message } from '../../interfaces';

  let activeFolder = FolderType.INPUT;
  let messages: Message[] = [];

  const load = async () => {
    messages = await getMail(activeFolder);
  };

  $: activeFolder && load();
</script>

<Folders bind:activeFolder />
<List {messages} />
