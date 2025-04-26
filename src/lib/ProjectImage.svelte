<script lang="ts">
  import ProjectImageContent from "$lib/ProjectImageContent.svelte";

  let { altText, imageUrl = "", navUrl = "" } = $props();
</script>

<div class="wrapper">
  {#if navUrl}
    <a class="btn" href={navUrl}>
      <ProjectImageContent {altText} {imageUrl} />
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
</style>
