<script lang="ts">
  import Button from 'components/Button/index.svelte';

  const generate = () => {
    const title = 'Заголовок уведомления';

    const options = {
      body: 'Тело уведомления',
      icon: './images/cat.jpeg'
    };

    new Notification(title, options);
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
