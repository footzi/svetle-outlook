<script>
  import Button from 'components/Button/index.svelte';
  import { faSave } from '@fortawesome/free-regular-svg-icons';
</script>

<div>
  <h2>Кнопки:</h2>

  <div class="list">
    <Button icon={faSave} variant="outlined" iconPosition="only" size="S" />
    <Button
      variant="outlined"
      size="S"
      icon={faSave}
      iconPosition="only"
      isPressed={true}
    />
    <Button variant="outlined" size="M" icon={faSave} iconPosition="only" />

    <Button
      variant="outlined"
      text="создать"
      icon={faSave}
      iconPosition="top"
    />

    <Button
      variant="outlined"
      text="outlined S"
      icon={faSave}
      size="S"
      iconPosition="top"
    />

    <Button
      variant="contained"
      text="contained S"
      size="S"
      icon={faSave}
      iconPosition="top"
    />

    <Button
      variant="contained"
      text="contained S"
      size="S"
      icon={faSave}
      iconPosition="right"
    />

    <Button
      variant="contained"
      text="contained S"
      size="M"
      icon={faSave}
      iconPosition="right"
    />

    <Button
      variant="outlined"
      text="contained S"
      size="M"
      icon={faSave}
      iconPosition="right"
    />
  </div>
</div>

<style>
  .list {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
</style>
