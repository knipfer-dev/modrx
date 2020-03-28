<script>
  export let label = undefined;
  export let id = undefined;
  export let value = '';
  export let name = '';
  export let isFormField = false;
  export let fullWidth = false;
  export let placeholder = '';
  export let required = false;
  export let hasError = false;
  $: classes =
    'bg-white appearance-none border-2 border-gray-400 rounded w-full px-4 py-3 text-gray-800 leading-tight focus:outline-none focus:border-gray-900 ' +
    ($$props.class ? $$props.class : '');
</script>

<div class:w-full={fullWidth} class="flex flex-col">
  {#if label}
    <label class="block text-gray-800 font-bold mb-1 uppercase text-sm">
      {label}
      {#if required}
        <span class="text-red-500">*</span>
      {/if}
    </label>
  {/if}
  <input
    type="text"
    {id}
    {name}
    {value}
    {placeholder}
    {required}
    on:change
    on:keyup
    class:mb-6={isFormField}
    class:border-red-300={hasError}
    class={classes} />
</div>
