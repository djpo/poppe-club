<script>
  import Nav from "$lib/Nav.svelte";
  import Footer from "$lib/Footer.svelte";
  import BubbleList from "$lib/BubbleList.svelte";
  import ProjectImage from "$lib/ProjectImage.svelte";
  import { homeContent } from "./content.ts";
  import { projects } from "./projects-content.ts";
</script>

<section>
  <Nav />

  <h1>
    Hi! I'm Poppe, a frontend developer. I'm good with people, and I love to
    create with the audience in mind.
  </h1>

  <div class="main-chunks-container">
    {#each homeContent as chunk (chunk)}
      <div class="main-chunk">
        <h2>{chunk.label}</h2>
        {#if chunk.type === "bubbleList"}
          <BubbleList textList={chunk.content} />
        {:else}
          <p>{chunk.content}</p>
        {/if}
      </div>
    {/each}
  </div>

  <div class="projects">
    {#each projects as project (project)}
      <ProjectImage
        altText={project.name}
        imageUrl={project.images[0]?.url}
        navUrl={`/projects/${project.slug}`}
        labelOverlay={true}
      />
    {/each}
  </div>

  <Footer />
</section>

<style>
  @media (min-width: 720px) {
    .main-chunks-container {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(21em, 1fr));
      gap: 1em;
    }
  }
  .projects {
    margin-top: 2em;
    margin-bottom: 1em;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(21em, 1fr));
    gap: 1em;
  }
</style>
