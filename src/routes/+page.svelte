<script>
  import cancan from "$lib/images/cancan.webp";
  import Counter from "./Counter.svelte";
</script>

<img class="background-video" src={cancan} alt="welcome!!!!!!" />

<section>
  <h1 class="gray-box">welcome to poppe.club</h1>

  <h2 class="gray-box">fresh site incoming</h2>

  <div class="counter-container gray-box">
    <p class="counter-label">
      while you wait,<br />here,<br />count some electric sheep:
    </p>
    <Counter />
  </div>
</section>

<style>
  .background-video {
    position: fixed;
    height: 100%;
    width: 100%;
    margin: 0;
    z-index: -1;
    opacity: 0.4;
  }

  section {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .gray-box {
    border: 2px solid var(--gray-box-border);
    background-color: var(--gray-box-background);
    padding: 1rem 1.2rem;
  }

  .counter-container {
    margin-top: 6rem;
  }

  .counter-label {
    margin: 0 0 1rem 0;
  }
</style>
