<script lang="ts">
  import type { Message } from 'interfaces/index';

  let activeMessage: Message;

  export { activeMessage };
</script>

{#if activeMessage}
  <div class="container">
    <h2>{activeMessage.subject}</h2>

    <div>От кого: {activeMessage.sender.title}</div>
    <div>
      Кому:
      {#each activeMessage.recipients as recipient}
        {recipient.title}
      {/each}
    </div>

    <div class="body">
      {@html activeMessage.body.html}
    </div>
  </div>
{/if}

<style lang="scss">
  @import '../../../styles/colors';
  @import '../../../styles/mixins';
  @import '../../../styles/font-size';

  .container {
    padding: 16px;
  }

  h2 {
    @include font-h2;
    margin: 0 0 8px 0;
  }

  .body {
    margin-top: 8px;
  }
</style>
