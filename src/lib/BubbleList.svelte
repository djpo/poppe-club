<script lang="ts">
  import { themes, themeState } from "$lib/theme.svelte.ts";

  const { textList } = $props();
</script>

<ul class="bubble-list">
  {#each textList as text (text)}
    <li>
      <p
        class="bubble"
        style:background="var({themes[themeState.themeId].bubbleBg})"
        style:color="var({themes[themeState.themeId].bubbleText})"
      >
        {text}
      </p>
    </li>
  {/each}
</ul>

<style>
  .bubble-list {
    min-width: 50%;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 0.3em;
    list-style: none;
  }
  .bubble {
    border-radius: 1em;
    padding: 0.2em 0.6em;
    background: var(--color-lightgreen-2);
  }
</style>
