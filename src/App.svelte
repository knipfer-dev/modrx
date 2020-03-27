<script>
  import { onMount } from 'svelte';

  import Pages from './pages/Pages';

  onMount(() => {
    if (process.env.NODE_ENV === 'production') {
      if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
          navigator.serviceWorker
            .register('/sw.js')
            .then()
            .catch();
        });
      }
    }
  });
</script>

<Pages />
