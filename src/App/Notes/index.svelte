<script lang="ts">
  import { faSave } from '@fortawesome/free-regular-svg-icons';
  import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
  import Button from 'components/Button/index.svelte';
  import type { Note } from 'interfaces/index';

  import { getNotes } from './utils/getNotes';

  let notes: Note[] = [];
  let activeNote: Note;
  let isActiveOpenNote: boolean = false;

  const handleClickNote = (id: number) => {
    const currentNote = notes.find((note: Note) => note.id === id);

    if (currentNote) {
      activeNote = currentNote;
      isActiveOpenNote = true;
    }
  };

  const handleClickBack = () => (isActiveOpenNote = false);

  const load = async () => {
    const loadNotes = await getNotes();

    if (loadNotes.length) {
      notes = loadNotes;
      activeNote = loadNotes[0];
    }
  };

  $: load();
</script>

<div class="container">
  <ul class="list">
    {#each notes as note}
      <li
        class="list__item"
        class:is-active={note.id === activeNote.id}
        on:click={() => handleClickNote(note.id)}
      >
        <span class="list__item-text">{note.text}</span>
      </li>
    {/each}

    <Button icon={faSave} variant="outlined" iconPosition="only" />
  </ul>

  <div class="content" class:is-opened={isActiveOpenNote}>
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
      {activeNote && activeNote.text}
    </div>
  </div>
</div>

<style lang="scss">
  @import './index';
</style>
