<script lang="ts">
  import ThemeButton from "$lib/ThemeButton.svelte";

  let { children } = $props();
</script>

<div>
  <ThemeButton />

  <a class="btn btn-1" href="/">╳</a>
</div>

{@render children()}
