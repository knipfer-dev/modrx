<script>
  export let name;
  export let location;
  export let modFriendlyRating;
</script>

<div class="bg-white rounded-lg shadow border-l-8 border-blue-600 p-4">
  <div class="flex flex-row justify-between items-center">
    <div class="text-2xl text-gray-800 font-bold">{name}</div>
    <div class="text-gray-800 font-bold">{modFriendlyRating}</div>
  </div>
  <div class="text-gray-700 text-sm">{location}</div>
</div>
