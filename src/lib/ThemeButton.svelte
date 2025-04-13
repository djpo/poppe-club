<script lang="ts">
  import { themes, themeState, cycleTheme } from "$lib/theme.svelte.ts";

  function handleClick() {
    cycleTheme();
  }
</script>

<btn class="btn header-button prevent-select" onclick={handleClick}>
  <p style:color="var({themes[themeState.themeId].text})">⬤</p>
</btn>

<style>
  .header-button {
    width: 2em;
    height: 2em;
    cursor: pointer;
  }
  .header-button > p {
    font-size: 1.2em;
    text-align: center;
  }
</style>
