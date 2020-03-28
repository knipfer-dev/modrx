<script>
  import { onMount } from 'svelte';

  import Pages from './pages/Pages';

  export let ready;

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

<svelte:head>
  <script
    defer
    async
    src={`https://maps.googleapis.com/maps/api/js?key=${process.env.MAPS_API_KEY}&callback=initMap`}>

  </script>
</svelte:head>

{#if ready}
  <Pages />
{/if}
