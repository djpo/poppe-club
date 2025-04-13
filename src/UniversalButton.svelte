<script lang="ts">
  import { counterState } from "$lib/counterState.svelte.ts";
</script>

<button onclick={() => (counterState.count += 1)}>
  clicks: {counterState.count}
</button>

<style>
  button {
    border: 2px solid red;
  }
</style>
