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
            <div class="overlay-label-bubble">
              <p class="overlay-label">{altText}</p>
            </div>
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
    background: radial-gradient(
      circle farthest-side,
      rgba(20, 20, 20, 0.55),
      rgba(20, 20, 20, 0.3)
    );
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
  }
  .overlay:hover {
    opacity: 1;
  }
  .overlay-label-bubble {
    /* margin-top to center within frame, not including topbar */
    margin-top: 0.9em;
    border-radius: 2em;
    padding: 0.3em 1em;
    background: rgba(0, 0, 0, 0.8);
    box-shadow: 0 0 2.5em 0.5em rgba(20, 20, 20, 0.2);
  }
  .overlay-label {
    color: white;
    font-size: 1.2em;
  }
</style>
