<script>
  import ThemeButton from "$lib/ThemeButton.svelte";
  import BubbleList from "$lib/BubbleList.svelte";
  import { homeContent } from "./content.ts";
</script>

<section>
  <div class="header-with-button">
    <ThemeButton />

    <h1>
      Hi! I'm Poppe, a frontend developer. I'm good with people, and I love to
      create with the audience in mind.
    </h1>
  </div>

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
    <a class="btn" href="/project">
      <div class="project-thumbnail">project 1: Flüsterpost</div>
    </a>
    <a class="btn" href="/project">
      <div class="project-thumbnail">project 2: Neofonie</div>
    </a>
    <a class="btn" href="/project">
      <div class="project-thumbnail">project 3: Taxfix</div>
    </a>
    <a class="btn" href="/project">
      <div class="project-thumbnail">project 4: this site</div>
    </a>
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
  .header-with-button {
    display: flex;
    flex-direction: column;
  }
  @media (min-width: 720px) {
    .header-with-button {
      display: flex;
      flex-direction: row-reverse;
    }
  }

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
  .project-thumbnail {
    min-height: 150px;
    min-width: 100px;
    max-width: 100%;
    background-color: rgba(100, 100, 100, 0.3);
    padding: 1em;
  }
</style>
