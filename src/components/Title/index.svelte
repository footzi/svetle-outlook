<script>
  import { createEventDispatcher } from 'svelte';

  let name;
  const dispatch = createEventDispatcher();

  const handleSendClick = () => {
    dispatch('hello-message', {
      text: `hello ${name}`
    })
  }

  export { name };
</script>

<h1>Hello from Title {name}</h1>
<button on:click={handleSendClick}>on send message from button</button>

<style lang="scss">
    @import "../../styles/colors";
    h1 {
        color: $primary-main;
    }
</style>
