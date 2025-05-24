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
        <h2>
          <a href={String(chunk.content)} target="_blank">
            <svg class="icon" viewBox="0 0 20 20">
              <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g
                  transform="translate(-140.000000, -7559.000000)"
                  fill="#000000"
                >
                  <g id="icons" transform="translate(56.000000, 160.000000)">
                    <path
                      d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399"
                      id="github-[#142]"
                    >
                    </path>
                  </g>
                </g>
              </g>
            </svg>
            {chunk.label}
          </a>
        </h2>
      {:else if chunk.type === "liveLink"}
        <h2>
          <a href={String(chunk.content)} target="_blank">
            <svg class="icon" viewBox="0 0 24 24">
              <path
                d="M23.632 9.201a.628.628 0 0 1-.22.678l-5.726 4.96 1.727 7.394a.606.606 0 0 1-.935.676l-6.503-3.953-6.503 3.953a.713.713 0 0 1-.374.112.57.57 0 0 1-.34-.109.629.629 0 0 1-.222-.679l1.729-7.393L.539 9.879A.607.607 0 0 1 .897 8.78l7.536-.635 2.965-7.083a.62.62 0 0 1 1.155.001l2.965 7.082 7.536.635a.63.63 0 0 1 .578.42z"
              />
              <path fill="none" d="M0 0h24v24H0z" />
            </svg>

            {chunk.label}
          </a>
        </h2>
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
  svg.icon {
    width: 1em;
    height: 1em;
  }
</style>
