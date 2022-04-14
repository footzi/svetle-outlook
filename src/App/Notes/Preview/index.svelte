<script lang="ts">
  import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
  import Button from 'components/Button/index.svelte';
  import { Routes } from 'enums/index';
  import type { Note } from 'interfaces/index';
  import { Route, navigate } from 'svelte-navigator';

  let note: Note;

  let isOpenPreview = false;

  const handleClickBack = () => {
    navigate(Routes.NOTES);
    isOpenPreview = false;
  };

  $: {
    if (note) {
      isOpenPreview = true;
    }
  }

  export { note };
</script>

<div class="content" class:is-opened={isOpenPreview}>
  <Route path={Routes.NOTES_ID}>
    <div class="content__header">
      <Button
        icon={faChevronLeft}
        variant="outlined"
        iconPosition="only"
        size="S"
        on:click={handleClickBack}
      />
    </div>

    <div class="content__text">
      {#if note}
        {note.text}
      {/if}
    </div>
  </Route>
</div>

<!--{#if note} {note.text}{/if}-->
<style lang="scss" module>
  @import './index';
</style>
