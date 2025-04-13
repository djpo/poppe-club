<script lang="ts">
  let { data, children } = $props();
</script>

<div class="layout">
  <main>
    {@render children()}
  </main>

  <aside class="all-posts">
    <h2>all posts:</h2>
    <ul>
      {#each data.summaries as { slug, title }}
        <li>
          <a href="/blog/{slug}">{title}</a>
        </li>
      {/each}
    </ul>
  </aside>
</div>

<style>
  .all-posts {
    background: lightgray;
    padding: 1em;
  }

  @media (min-width: 700px) {
    .layout {
      display: grid;
      gap: 2em;
      grid-template-columns: 1fr 18em;
    }
  }
</style>
