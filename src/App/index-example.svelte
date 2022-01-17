<script>
  import Title from '../components/Title/index.svelte'
  import Input from '../components/Input/index.svelte'
  import Box from '../components/Box/index.svelte'

  import { onMount } from 'svelte'

  const name = "VLAD";

  const html = '<strong>html</strong>'

  let count = 0;
  let photos = [];

  const incrementCount = () => count +=1;

  const handleHelloMessage = (event) => {
    alert(event.detail.text)
  }

  onMount(async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/photos?_limit=20`);
    photos = await res.json();
  });

</script>

<h1>hello</h1>
<img src='./images/cat.jpeg' alt='котэ'>

<p>
  {name}
</p>

<Title name={name} on:hello-message={handleHelloMessage}/>
<Input />
{@html html}

<p>
  {count}
</p>

<button on:click={incrementCount}>Change Count</button>

{#each photos as photo}
  <figure>
    <img src={photo.thumbnailUrl} alt={photo.title}>
    <figcaption>{photo.title}</figcaption>
  </figure>
{:else}
  <!-- this block renders when photos.length === 0 -->
  <p>loading...</p>
{/each}

<Box>
  <h2 slot='main'>А это внутренности коробки</h2>
  <h3 slot='second'>А это внутренности еще одного слота</h3>
</Box>

<style lang="scss">

</style>
