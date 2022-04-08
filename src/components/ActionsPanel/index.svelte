<div class="container">
  <ul class="buttons">
    <slot />
  </ul>
</div>

<style lang="scss">
  @import '../../styles/colors';
  @import '../../styles/mixins';
  @import '../../styles/font-size';

  .container {
    background-color: $white;
    display: flex;
  }

  .buttons {
    display: flex;
    margin-top: 8px;

    :global(li) {
      margin-right: 8px;
    }
  }
</style>
