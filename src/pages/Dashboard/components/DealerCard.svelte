<script>
  import StarRating from '../../../components/StarRating';

  export let name;
  export let location;
  export let modFriendlyRating;
</script>

<div
  class="bg-white rounded-lg shadow border-l-8 p-4"
  class:border-green-500={modFriendlyRating >= 4}
  class:border-red-500={modFriendlyRating <= 2}
  class:border-yellow-500={modFriendlyRating === 3}>
  <div class="flex flex-row justify-between items-center">
    <div class="text-2xl text-gray-800 font-bold">{name}</div>
    <StarRating currentRating={modFriendlyRating} />
  </div>
  <div class="text-gray-700 text-sm">{location}</div>
</div>
