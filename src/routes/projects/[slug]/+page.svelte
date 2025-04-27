<script>
  import Nav from "$lib/Nav.svelte";
  import BubbleList from "$lib/BubbleList.svelte";
  import ProjectImage from "$lib/ProjectImage.svelte";

  let { data } = $props();
</script>

<section>
  <Nav />

  <h1>{data.project.name}</h1>

  {#each data.project.contentChunks as chunk (chunk)}
    <div class="main-chunk">
      {#if chunk.type === "githubLink"}
        <h2><a href={String(chunk.content)} target="_blank">GitHub repo</a></h2>
      {:else}
        <h2>{chunk.label}</h2>
        {#if chunk.type === "bubbleList"}
          <BubbleList textList={chunk.content} />
        {:else}
          <p>{@html chunk.content}</p>
        {/if}
      {/if}
    </div>
  {/each}

  <div class="images-container">
    {#each data.project.images as image (image)}
      <div class="image-wrapper">
        <h2 class="image-label">{image.label}</h2>
        <ProjectImage altText={image.label} imageUrl={image.url} />
      </div>
    {/each}
  </div>
</section>

<style>
  @media (min-width: 720px) {
    .images-container {
      margin-top: 2em;
      display: flex;
      flex-wrap: wrap;
      gap: 2em;
      justify-content: center;
    }
  }
  @media (max-width: 719px) {
    .image-wrapper {
      margin-top: 2em;
    }
  }
  .image-label {
    text-align: center;
  }
</style>
