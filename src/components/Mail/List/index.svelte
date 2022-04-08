<script lang="ts">
  import type { Message } from '../../../interfaces';

  let messages: Message[] = [];
  let activeMessage: Message | null = null;

  const handleClickMessage = (selectedId: number) => {
    const currentMessage = messages.find(({ id }) => id === selectedId);

    if (currentMessage) {
      activeMessage = currentMessage;
    }
  };

  export { messages, activeMessage };
</script>

<ul>
  {#each messages as { id, sender, subject, time, body }}
    <li>
      <button
        class:is-active={activeMessage?.id === id}
        on:click={() => handleClickMessage(id)}
      >
        <div class="wrapper">
          <div class="title">{sender.title}</div>
          <div class="subject">
            <span>{subject}</span>
            <time>{time}</time>
          </div>
          <div class="body">
            {body.title}
          </div>
        </div>
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
    padding: 8px 0;
    width: 30%;
    overflow: hidden;
    flex-shrink: 0;
  }

  li {
    width: 100%;
  }

  button {
    @include transition(background-color);
    @include font-text;
    padding: 12px 24px 0 24px;
    cursor: pointer;
    width: 100%;
    outline: none;
    text-align: left;

    &.is-active {
      background-color: rgba($primary-main, 0.1);
      pointer-events: none;
    }

    &:hover {
      background-color: rgba($gray-light, 0.1);
    }

    &:global(.focus-visible) {
      outline: 1px solid $primary-main;
    }
  }

  .wrapper {
    border-bottom: 1px solid rgba($gray-light, 0.3);
    padding-bottom: 12px;
  }

  .title {
    @include font-h3;
    font-weight: 500;
    margin: 0 0 4px 0;
  }

  .subject {
    margin-bottom: 4px;
    display: flex;
    width: 100%;

    span {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      margin-right: 4px;
    }

    time {
      color: $gray-light;
    }
  }

  .body {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-transform: uppercase;
    color: $gray-light;
  }
</style>
