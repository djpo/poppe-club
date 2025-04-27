<script>
  import Nav from "$lib/Nav.svelte";
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

  <div class="footer-chunks-container">
    <div class="footer-chunk-wider">
      <h2>Poppe</h2>
      <p>
        Software developer
        <br />
        Visit me on
        <a href="https://linkedin.com/in/poppepoppe" target="_blank">LinkedIn</a
        >
        & <a href="https://github.com/djpo" target="_blank">GitHub</a>
        <br />
        Download my
        <a
          href="https://drive.google.com/file/d/1tAV-kmS_XbPHGOBskXjUu8u0kB6Sxbfd/view"
          target="_blank">CV</a
        >
        <br />
        Check out my music on
        <a href="https://soundcloud.com/poppe-poppe" target="_blank"
          >Soundcloud</a
        >
      </p>
    </div>

    <div>
      <h2>Contact</h2>
      <p>
        poppeisadancer@gmail.com
        <br />
        +49 176 7126346
      </p>
    </div>

    <div>
      <h2>More</h2>
      <p>
        <a href="/about">About me</a>
        <br />
        <a href="/privacy">Privacy policy</a>
        <br />
        Design by
        <a href="https://janagramlich.com/" target="_blank">Jana Gramlich</a>
      </p>
    </div>
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

  .footer-chunks-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1em;
  }
  @media (max-width: 719px) {
    .footer-chunks-container {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  .footer-chunk-wider {
    min-width: 280px;
  }
  @media (max-width: 719px) {
    .footer-chunk-wider {
      grid-column: 1 / span 2;
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
