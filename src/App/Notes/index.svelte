<script lang="ts">
  import { faChevronLeft, faPlus } from '@fortawesome/free-solid-svg-icons';
  import Button from 'components/Button/index.svelte';
  import { Routes } from 'enums/index';
  import type { Note } from 'interfaces/index';
  import { Route, navigate, useLocation, useParams } from 'svelte-navigator';
  import { getIsMobile } from 'utils/getIsMobile';

  import Preview from './Preview/index.svelte';
  import { getNotes } from './utils/getNotes';

  let notes: Note[] = [];
  // let activeNoteId: number;
  let activeNote: Note;

  const params = useParams();
  // const location = useLocation<{ note: Note }>();

  const navigateToNote = (note: Note) => {
    activeNote = note;
    navigate(`/${note.id}`);
  };

  const handleClickNote = (note: Note) => navigateToNote(note);

  const handleClickAdd = () => {
    const note = {
      id: notes.length + 1,
      text: 'Новая заметка'
    };
    notes = [...notes, note];

    const isMobile = getIsMobile();

    if (!isMobile) {
      navigateToNote(note);
    }
  };

  const load = async () => {
    const loadNotes = await getNotes();

    if (loadNotes.length) {
      const activeId = $params['*'];
      const note =
        loadNotes.find((note) => note.id === Number(activeId)) ?? loadNotes[0];

      const isMobile = getIsMobile();

      if (!isMobile) {
        navigateToNote(note);
      }

      notes = loadNotes;
    }
  };

  $: void load();

  // $: {
  //   if = $location.state?.note?.id ?? 0;
  // }

  /* eslint-disable */
</script>

<div class="container">
  <div class="list">
    <ul>
      {#each notes as note}
        <li>
          <a
            class="list__item"
            href={`/${note.id}`}
            class:is-active={note.id === activeNote?.id}
            on:click|preventDefault={() => handleClickNote(note)}
            ><span class="list__item-text">{note.text}</span></a
          >
        </li>
      {/each}
    </ul>

    <div class="list__bottom">
      <Button
        icon={faPlus}
        variant="outlined"
        iconPosition="only"
        size="S"
        on:click={handleClickAdd}
      />
    </div>
  </div>

  <!--{activeNote && activeNote.text}-->
  <Preview note={activeNote} />

  <!--  <div class="content" class:is-opened={Boolean(activeNoteId)}>-->
  <!--    <div class="content__header">-->
  <!--      <Button-->
  <!--        icon={faChevronLeft}-->
  <!--        variant="outlined"-->
  <!--        iconPosition="only"-->
  <!--        size="S"-->
  <!--        on:click={handleClickBack}-->
  <!--      />-->
  <!--    </div>-->

  <!--    <div class="content__text">-->
  <!--      <Route path={Routes.NOTES_ID}>-->
  <!--        &lt;!&ndash;{activeNote && activeNote.text}&ndash;&gt;-->
  <!--        <Preview />-->
  <!--      </Route>-->
  <!--    </div>-->
  <!--  </div>-->
</div>

<style lang="scss" module>
  @import './index';
</style>
