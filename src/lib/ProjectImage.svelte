<script lang="ts">
  import ProjectImageContent from "$lib/ProjectImageContent.svelte";

  let { altText, imageUrl = "", navUrl = "", labelOverlay = false } = $props();
</script>

<div class="wrapper">
  {#if navUrl}
    <a class="btn" href={navUrl}>
      {#if labelOverlay}
        <div class="overlay-wrapper">
          <div class="overlay">
            <p class="overlay-label">{altText}</p>
          </div>
          <ProjectImageContent {altText} {imageUrl} />
        </div>
      {:else}
        <ProjectImageContent {altText} {imageUrl} />
      {/if}
    </a>
  {:else}
    <ProjectImageContent {altText} {imageUrl} />
  {/if}
</div>

<style>
  .wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .overlay-wrapper {
    position: relative;
  }
  .overlay {
    position: absolute;
    height: 100%;
    width: 100%;
    border-radius: 3px;
    background: rgba(0, 0, 0, 0.65);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .overlay:hover {
    opacity: 0;
  }
  .overlay-label {
    color: white;
    font-size: 1.5em;
  }
</style>
