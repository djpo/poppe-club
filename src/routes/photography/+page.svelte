<script>
  import Nav from "$lib/Nav.svelte";
  import ProjectImage from "$lib/ProjectImage.svelte";
  import { photos } from "$lib/photography-content.ts";
</script>

<section>
  <Nav />

  <h1>photography</h1>

  <h2>
    I take portraits, landscapes, random views from my life, mostly on 35mm.
  </h2>

  <br />
  <p>here's a sample!</p>

  <div class="projects">
    {#each photos as photo}
      <ProjectImage altText={photo.label} imageUrl={photo.url} />
    {/each}
  </div>

  <p>all images © 2017-2025 Poppe</p>
</section>

<style>
  .projects {
    margin-top: 2em;
    margin-bottom: 1em;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(21em, 1fr));
    gap: 1em;
  }
</style>
