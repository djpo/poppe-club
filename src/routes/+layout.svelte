<script lang="ts">
  import { page } from "$app/state";
  import { counterState } from "$lib/counterState.svelte.ts";

  let { data, children } = $props();
</script>

<nav>
  <div class="links">
    <a href="/" aria-current={page.url.pathname === "/"}>home</a>
    <a href="/about" aria-current={page.url.pathname === "/about"}>about</a>
    <a
      href="/blog"
      aria-current={page.route.id === "/blog" ||
        page.route.id === "/blog/[slug]"}>blog</a
    >
  </div>

  <aside class="nav-right">
    <p
      class="visited-message"
      style:background-color={data.visited ? "pink" : "lightblue"}
    >
      {data.visited
        ? "this ain't your first rodeo!"
        : "it's your first time here - welcome!"}
    </p>
    <p class="global-count">
      global count: <span class="count">{counterState.count}</span>
    </p>
  </aside>
</nav>

{@render children()}

<style>
  p {
    margin: 0;
  }
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .links {
    display: flex;
    gap: 1em;
  }
  .nav-right {
    display: flex;
    gap: 1em;
  }
  .global-count {
    background-color: gray;
    padding: 0.4em;
    font-size: 0.7em;
    color: white;
  }
  .count {
    font-weight: 700;
  }
  .visited-message {
    padding: 0.4em;
    font-size: 0.7em;
  }
</style>
