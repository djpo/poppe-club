<script>
  import Nav from "$lib/Nav.svelte";
  import BubbleList from "$lib/BubbleList.svelte";
  import ProjectPreview from "$lib/ProjectPreview.svelte";

  let { data } = $props();
</script>

<section>
  <Nav />

  <h1>{data.project.name}</h1>

  {#each data.project.contentChunks as chunk (chunk)}
    <div class="text-chunk main-chunk">
      <h2>{chunk.label}</h2>
      {#if chunk.type === "bubbleList"}
        <BubbleList textList={chunk.content} />
      {:else}
        <p>{chunk.content}</p>
      {/if}
    </div>
  {/each}

  <ProjectPreview altText={data.project.name} imageUrl={data.project.image} />
</section>
