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
		<a class="btn btn-1" href="/project">⬤</a>
	</div>

	<div>
		<h1>
			Hi! I'm Poppe, a frontend developer. I'm good with people, and I love to create with the
			audience in mind.
		</h1>
	</div>

	<div class="text-chunks-container">
		<div class="main-chunk">
			<h2>Experience</h2>
			<p>7 years of experience in frontend and fullstack development</p>
		</div>

		<div class="main-chunk">
			<h2>Contact</h2>
			<p>
				Based in Berlin-Neukölln
				<br />
				poppeisadancer@gmail.com
				<br />
				0176 731 26346
			</p>
		</div>

		<div class="main-chunk">
			<h2>Skills</h2>
			<ul class="skills">
				<p>JavaScript</p>
				<p>Typescript</p>
				<p>React</p>
				<p>React Native</p>
				<p>Angular</p>
				<p>Vue</p>
				<p>Svelte</p>
			</ul>
		</div>
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

	<div class="text-chunks-container">
		<div class="footer-chunk">
			<h2>Poppe</h2>
			<p>
				Senior frontend developer
				<br />
				Download my CV
				<br />
				Check out my music on Soundcloud
			</p>
		</div>

		<div class="footer-chunk">
			<h2>Contact</h2>
			<p>
				poppeisadancer@gmail.com
				<br />
				0176 7126346
			</p>
		</div>

		<div class="footer-chunk">
			<h2>Legal</h2>
			<p>
				Imprint
				<br />
				Privacy policy
			</p>
		</div>
	</div>
</section>

<style>
	.text-chunks-container {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
		gap: 0.5em;
	}
	.skills {
		display: flex;
		flex-wrap: wrap;
		list-style: none;
		padding: 0;
		gap: 0.3em;
	}
	.skills > p {
		background-color: var(--color-bubble);
		border-radius: 1em;
		padding: 0.2em 0.6em;
	}
	.projects {
		margin-top: 1em;
		margin-bottom: 1em;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(21em, 1fr));
		gap: 1em;
	}
	.project-thumbnail {
		min-height: 150px;
		min-width: 100px;
		background-color: rgba(100, 100, 100, 0.3);
		padding: 1em;
	}
</style>
