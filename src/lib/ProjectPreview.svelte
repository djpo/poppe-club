<div class="border">
  <div class="topbar">
    {#each Array(3)}
      <div class="fake-button">
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
      </div>
    {/each}
  </div>
  <div class="content">nothing to see here</div>
</div>

<style>
  .border {
    border: 2px solid var(--color-black);
    border-radius: 3px;
  }
  .topbar {
    background: var(--color-black);
    display: flex;
    gap: 0.2em;
    padding: 0.2em;
    color: var(--color-white);
  }
  .fake-button {
    display: flex;
  }
  svg.icon {
    width: 0.5em;
    height: 0.5em;
  }
  .content {
    min-width: 10em;
    min-height: 10em;
    background: var(--color-gray-translucent);
    padding: 1em;
  }
</style>
