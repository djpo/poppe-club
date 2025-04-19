<script lang="ts">
  let { name, image: imageUrl = "" } = $props();

  // type for import.meta.glob
  // https://github.com/vitejs/vite/issues/9599#issuecomment-1209333753
  const imageModules = import.meta.glob<Record<string, string>>(
    "$lib/images/*.png",
    {
      eager: true,
      query: {
        enhanced: true,
      },
    }
  );
</script>

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

  {#if !imageUrl}
    <div class="content no-image">{name}</div>
  {:else}
    <div class="content">
      <enhanced:img
        src={imageModules[`/src/lib/images/${imageUrl}`].default}
        alt="some alt text"
        class="project-image"
      />
    </div>
  {/if}
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
    min-height: 10em;
    background: var(--color-gray-translucent);
  }
  .content.no-image {
    padding: 1em;
  }
  .project-image {
    width: 100%;
    max-height: 20em;
    object-fit: scale-down;
  }
</style>
