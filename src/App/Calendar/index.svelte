<script lang="ts">
  import Button from 'components/Button/index.svelte';

  const generate = () => {
    navigator.serviceWorker.getRegistration().then((req) => {
      const title = 'Заголовок уведомления';

      const options = {
        body: 'Тело уведомления',
        icon: './images/cat.jpeg',
        action: [{ action: 'go', title: 'go to goggle' }]
      };

      req.showNotification(title, options);
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
