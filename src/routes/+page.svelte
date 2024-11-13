<script>
	// import cancan from '$lib/images/cancan.webp';
	// import Counter from './Counter.svelte';
</script>

<svelte:head>
	<title>poppe.club</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<!-- <img class="background-video" src={cancan} alt="welcome!!!!!!" /> -->

<section>
	<div>
		<button>O</button>
	</div>

	<div>
		<h1>Hi! I'm Poppe, a senior frontend developer. I'm good with people, and I love to create with the audience in mind.</h1>
	</div>

	<div class="main-chunk">
		<h2>Experience</h2>
		<p>7 years of experience in frontend/fullstack development</p>
	</div>

	<div class="main-chunk">
		<h2>Contact</h2>
		<p>
			Based in Berlin-Neukölln
			<br>
			poppeisadancer@gmail.com
			<br>
			0176 731 26346
		</p>
	</div>

	<div class="main-chunk">
		<h2>Skills</h2>
		<p>JavaScript; TypeScript; React; React Native; Angular; Svelte</p>
	</div>

	<div class="projects">
		<ul>
			<li class="project-thumbnail">project 1: Flüsterpost</li>
			<li class="project-thumbnail">project 2: Neofonie</li>
			<li class="project-thumbnail">project 3: Taxfix</li>
			<li class="project-thumbnail">project 4: this site</li>
		</ul>
	</div>

	<div class="footer-chunk">
		<h2>Poppe</h2>
		<p>
			Senior frontend developer
			<br>
			Download my CV
			<br>
			Check out my music on Soundcloud
		</p>
	</div>

	<div class="footer-chunk">
		<h2>Contact</h2>
		<p>
			poppeisadancer@gmail.com
			<br>
			0176 7126346
		</p>
	</div>

	<div class="footer-chunk">
		<h2>Legal</h2>
		<p>
			Imprint
			<br>
			Privacy policy
		</p>
	</div>
</section>

<style>
	section {
		flex: 1;
		padding: 0.8rem;
		display: flex;
		flex-direction: column;
	}

	.project-thumbnail {
		min-height: 100px;
		min-width: 100px;
		background-color: rgba(100,100,100,0.3);
		margin: 1rem;
	}

	p {
		text-align: left;
	}
</style>
