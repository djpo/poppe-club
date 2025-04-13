<script lang="ts">
  import "../global.css";
  import { themes, themeState } from "$lib/theme.svelte.ts";

  let { children } = $props();
</script>

<div
  class="app"
  style:background-color="var({themes[themeState.themeId].bg})"
  style:color="var({themes[themeState.themeId].text})"
>
  <main>
    {@render children()}
  </main>
</div>

<style>
  .app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    min-width: 100vw;
    /* default colors, overridden by theme */
    background-color: var(--color-white);
    color: var(--color-black);
  }
  main {
    margin: 0 auto;
    box-sizing: border-box;
    flex: 1;
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1440px;
    padding: 1em;
  }
  @media (min-width: 720px) {
    main {
      padding: 2em;
    }
  }
</style>
