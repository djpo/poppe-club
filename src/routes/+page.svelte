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
	<div class="header-with-button">
		<div class="btn header-button">
			<p>⬤</p>
		</div>
		<h1>
			Hi! I'm Poppe, a frontend developer. I'm good with people, and I love to create with the
			audience in mind.
		</h1>
	</div>

	<div class="main-chunks-container">
		<div class="text-chunk main-chunk">
			<h2>Experience</h2>
			<p>
				7 years of experience in frontend development. Diverse environments including agencies,
				startups, growing businesses.
			</p>
		</div>

		<div class="text-chunk main-chunk">
			<h2>Skills</h2>
			<ul class="skills">
				<p>JavaScript</p>
				<p>Typescript</p>
				<p>React</p>
				<p>React Native</p>
				<p>Angular</p>
				<p>Vue</p>
				<p>Svelte</p>
				<p>HTML</p>
				<p>CSS</p>
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

	<div class="footer-chunks-container">
		<div class="text-chunk footer-chunk-wider">
			<h2>Poppe</h2>
			<p>
				Senior frontend developer
				<br />
				Download my CV
				<br />
				Check out my music on Soundcloud
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
				Imprint
				<br />
				Privacy policy
			</p>
		</div>
	</div>
</section>

<style>
	@media (min-width: 720px) {
		.header-with-button {
			display: flex;
			flex-direction: row-reverse;
		}
	}
	.header-button {
		width: 2em;
		height: 2em;
		cursor: pointer;
	}
	.header-button > p {
		font-size: 1.2em;
		text-align: center;
	}

	@media (min-width: 720px) {
		.main-chunks-container {
			display: grid;
			grid-template-columns: repeat(auto-fit, minmax(21em, 1fr));
			gap: 1em;
		}
	}
	@media (max-width: 480px) {
		.main-chunk {
			padding: 0;
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
	@media (max-width: 720px) {
		.footer-chunks-container {
			grid-template-columns: repeat(2, 1fr);
		}
	}
	.footer-chunk-wider {
		min-width: 280px;
	}
	@media (max-width: 720px) {
		.footer-chunk-wider {
			border-color: fuchsia;
			grid-column: 1 / span 2;
		}
	}

	.skills {
		min-width: 50%;
		padding: 0;
		display: flex;
		flex-wrap: wrap;
		gap: 0.3em;
		list-style: none;
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
		max-width: 100%;
		background-color: rgba(100, 100, 100, 0.3);
		padding: 1em;
	}
</style>
