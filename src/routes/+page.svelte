<script>
	// import cancan from '$lib/images/cancan.webp';
	// import Counter from './Counter.svelte';

	const themes = [
		{ name: 'white', bg: '--color-bg-0', bubble: '--color-bubble-0' },
		{ name: 'black', bg: '--color-bg-1', bubble: '--color-bubble-1' },
		{ name: 'pink', bg: 'var(--color-bg-2)', bubble: 'var(--color-bubble-2)' },
		{ name: 'teal', bg: '--color-bg-0', bubble: '--color-bubble-0' },
		{ name: 'seafoam', bg: '--color-bg-0', bubble: '--color-bubble-0' },
		{ name: 'orange', bg: '--color-bg-0', bubble: '--color-bubble-0' },
		{ name: 'fuchsia', bg: '--color-bg-0', bubble: '--color-bubble-0' }
	];
	let themeIndex = 0;
	function handleClick() {
		if (themeIndex + 1 < themes.length) {
			themeIndex++;
		} else {
			themeIndex = 0;
		}
	}
</script>

<svelte:head>
	<title>poppe.club</title>
	<meta name="description" content="Svelte demo app" />

	{#if themeIndex === 0}
		<style>
			body {
				background-color: var(--color-bg-0);
			}
			.bubble {
				background-color: var(--color-bubble-0);
			}
		</style>
	{:else if themeIndex === 1}
		<style>
			:root {
				color: var(--color-text-1);
			}
			body {
				background-color: var(--color-bg-1);
			}
			.bubble {
				background-color: var(--color-bubble-1);
				color: var(--color-text-0);
			}
		</style>
	{:else if themeIndex === 2}
		<style>
			body {
				background-color: var(--color-bg-2);
			}
			.bubble {
				background-color: var(--color-bubble-2);
			}
		</style>
	{:else if themeIndex === 3}
		<style>
			body {
				background-color: var(--color-bg-3);
			}
			.bubble {
				background-color: var(--color-bubble-1);
			}
		</style>
	{:else if themeIndex === 4}
		<style>
			body {
				background-color: var(--color-bg-4);
			}
			.bubble {
				background-color: var(--color-bubble-3);
			}
		</style>
	{:else if themeIndex === 5}
		<style>
			body {
				background-color: var(--color-bg-5);
			}
			.bubble {
				background-color: var(--color-bubble-1);
			}
		</style>
	{:else if themeIndex === 6}
		<style>
			body {
				background-color: var(--color-bg-6);
			}
			.bubble {
				background-color: var(--color-bubble-4);
			}
		</style>
	{/if}
</svelte:head>

<!-- <img class="background-video" src={cancan} alt="welcome!!!!!!" /> -->

<section>
	<div class="header-with-button">
		<btn class="btn header-button" on:click={handleClick}>
			<p>⬤</p>
		</btn>
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
				<p class="bubble">JavaScript</p>
				<p class="bubble">Typescript</p>
				<p class="bubble">React</p>
				<p class="bubble">React Native</p>
				<p class="bubble">Angular</p>
				<p class="bubble">Vue</p>
				<p class="bubble">Svelte</p>
				<p class="bubble">HTML</p>
				<p class="bubble">CSS</p>
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
	.bubble {
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
