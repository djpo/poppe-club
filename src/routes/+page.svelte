<script>
  import Nav from "$lib/Nav.svelte";
  import BubbleList from "$lib/BubbleList.svelte";
  import ProjectPreview from "$lib/ProjectPreview.svelte";
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
      <div class="text-chunk main-chunk">
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
      <a class="btn" href="/projects/{project.slug}">
        <ProjectPreview name={project.name} />
      </a>
    {/each}
  </div>

  <div class="footer-chunks-container">
    <div class="text-chunk footer-chunk-wider">
      <h2>Poppe</h2>
      <p>
        Frontend developer
        <br />
        Download my
        <a
          href="https://drive.google.com/file/d/1LjoMApP79TjppJpmG1pg8q77wIMyDcJi/view"
          target="_blank">CV</a
        >
        <br />
        Check out my music on
        <a href="https://soundcloud.com/poppe-poppe" target="_blank"
          >Soundcloud</a
        >
      </p>
    </div>

    <div class="text-chunk">
      <h2>Contact</h2>
      <p>
        poppeisadancer@gmail.com
        <br />
        0176 7126346
      </p>
    </div>

    <div class="text-chunk">
      <h2>Legal</h2>
      <p>
        <a href="/imprint">Imprint</a>
        <br />
        <a href="/privacy">Privacy policy</a>
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
  @media (max-width: 479px) {
    .main-chunk {
      padding: 0;
    }
  }
  @media (max-width: 719px) {
    .main-chunk {
      margin-top: 1em;
    }
  }
  @media (min-width: 1080px) {
    .main-chunk {
      padding-right: 10%;
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
