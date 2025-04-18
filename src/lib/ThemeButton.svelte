<script lang="ts">
  import { goto } from "$app/navigation";
  import { themes, themeState, cycleTheme } from "$lib/theme.svelte.ts";
  import { page } from "$app/state";

  function handleClickDot() {
    cycleTheme();
  }
  function handleClickX() {
    goto("/");
  }
</script>

<div class="header-buttons-row">
  <button
    class="header-button"
    aria-label="Change theme"
    onclick={handleClickDot}
    style:color="var({themes[themeState.themeId].text})"
  >
    <svg class="icon" viewBox="0 0 100 100">
      <circle
        stroke-width="8"
        stroke="currentColor"
        fill="currentColor"
        cx="50"
        cy="50"
        r="45"
      />
    </svg>
  </button>

  {#if page.url.pathname !== "/"}
    <button
      class="header-button"
      aria-label="Navigate back"
      onclick={handleClickX}
      style:color="var({themes[themeState.themeId].text})"
    >
      <svg class="icon" viewBox="0 0 100 100">
        <path
          stroke-width="8"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          d="M 5 5 L 95 95 M 95 5 L 5 95"
        />
      </svg>
    </button>
  {/if}
</div>

<style>
  .header-buttons-row {
    margin-bottom: 1.5em;
    display: flex;
    justify-content: space-between;
  }
  @media (min-width: 720px) {
    /* if header-button-row contains only 1 child */
    .header-buttons-row:has(button:only-child) {
      float: right;
    }
  }
  .header-button {
    background: none;
    border: none;
    padding: 0;
    display: flex;
  }
  .header-button:hover {
    cursor: pointer;
  }
  svg.icon {
    width: 1.5em;
    height: 1.5em;
  }
</style>
