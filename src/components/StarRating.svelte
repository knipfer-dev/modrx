<script>
  import { onMount } from 'svelte';

  export let currentRating;

  let numberOfStars = [0, 1, 2, 3, 4];

  const setRating = () => {
    const stars = document.getElementsByClassName('star');

    Array.from(stars).forEach(star => {
      star.className =
        currentRating >= star.dataset.value
          ? 'text-yellow-500 text-lg'
          : 'text-gray-500 text-lg';
    });
  };

  onMount(() => {
    setRating();
  });
</script>

<div class="flex items-center">
  {#each numberOfStars as rating}
    <span class="star" data-value={rating + 1}>&#9733;</span>
  {/each}
</div>
