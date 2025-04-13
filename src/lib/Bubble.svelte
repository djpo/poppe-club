<script lang="ts">
  import { themes, themeState } from "$lib/theme.svelte.ts";

  const { text } = $props();
</script>

<p
  class="bubble"
  style:background-color="var({themes[themeState.themeId].bubbleBg})"
  style:color="var({themes[themeState.themeId].bubbleText})"
>
  {text}
</p>

<style>
  .bubble {
    border-radius: 1em;
    padding: 0.2em 0.6em;
    background-color: var(--color-lightgreen-2);
  }
</style>
