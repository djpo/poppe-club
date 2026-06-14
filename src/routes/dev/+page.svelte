<script>
  import Nav from "$lib/Nav.svelte";
  import BubbleList from "$lib/BubbleList.svelte";
  import ProjectImage from "$lib/ProjectImage.svelte";
  import { devContent } from "$lib/dev-content.ts";
  import { devProjects } from "$lib/dev-projects-content.ts";
</script>

<section>
  <Nav />

  <h1>software development</h1>

  <h2>
    as a developer, I'm good with people, and I love to create with the audience
    in mind.
  </h2>

  <p>
    Visit me on
    <a href="https://linkedin.com/in/poppepoppe" target="_blank">LinkedIn</a>
    & <a href="https://github.com/djpo" target="_blank">GitHub</a>
    <br />
    Download my
    <a
      href="https://drive.google.com/file/d/11lJPkcGhqxN8v-R7AU6YNhHTSjpW73I6/view"
      target="_blank">CV</a
    >
  </p>

  <div class="main-chunks-container">
    {#each devContent as chunk (chunk)}
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
    {#each devProjects as project (project)}
      <ProjectImage
        altText={project.name}
        imageUrl={project.images[0]?.url}
        navUrl={`/dev/projects/${project.slug}`}
        labelOverlay={true}
      />
    {/each}
  </div>
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
