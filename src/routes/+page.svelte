<script>
  import Nav from "$lib/Nav.svelte";
</script>

<section>
  <Nav />

  <h1>hi! I'm Poppe.</h1>

  <h1 class="no-bottom-margin">welcome to my website!</h1>
  <p class="added-bottom-margin">I made it myself</p>

  <h1>check out the things I do:</h1>

  <h2><a href="/music">music</a></h2>
  <h2><a href="/film">film score & sound design</a></h2>
  <h2><a href="/dev">software development</a></h2>
  <h2><a href="/acting">acting & improv comedy</a></h2>
  <h2><a href="/photography">photography</a></h2>
  <h2><a href="/fuseletter">fuseletter (my nifty newsletter)</a></h2>
</section>

<style>
  .no-bottom-margin {
    margin-bottom: 0;
  }
  .added-bottom-margin {
    margin-bottom: 1em;
  }
</style>
