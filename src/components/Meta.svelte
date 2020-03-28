<script>
  export let title;
  export let description;
</script>

<svelte:head>
  <title>ModRX - {title}</title>
  <meta name="description" content={description} />
</svelte:head>
