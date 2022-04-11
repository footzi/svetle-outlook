<script lang="ts">
  import Button from 'components/Button/index.svelte';

  const generate = () => {
    navigator.serviceWorker.getRegistration().then((req) => {
      req.showNotification('Hello world');
    });
  };

  const handleClick = () => {
    Notification.requestPermission().then((result) => {
      if (result === 'granted') {
        generate();
      }
    });
  };
</script>

<div>
  <h2>Здесь будущий календарь, а пока можно сгенерить случайное уведомление</h2>

  <Button on:click={handleClick} text="Уведомление" />
</div>
