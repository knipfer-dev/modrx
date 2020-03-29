<script>
  import { onMount } from 'svelte';

  export let currentRating;

  let numberOfStars = [0, 1, 2, 3, 4];
</script>

<div class="flex items-center">
  {#each numberOfStars as rating}
    <span
      class="text-xl text-gray-500 cursor-pointer"
      class:text-yellow-500={currentRating > rating}
      data-value={rating + 1}>
      &#9733;
    </span>
  {/each}
</div>
