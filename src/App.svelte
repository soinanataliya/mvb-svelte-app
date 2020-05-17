<script>
	import { Router, Route, Link } from "svelte-routing";
	import Header from './components/Header.svelte';
	import Footer from './components/Footer.svelte';
	import Home from './pages/Home.svelte';
	import Accessories from './pages/Accessories.svelte';
	import Contacts from './pages/Contacts.svelte';
	import NotFound from './pages/NotFound.svelte';

	export let url = "";
</script>

<style lang="scss">
  .app {
    display: flex;
		flex-direction: column;
		min-height: 100%;
  }
</style>

<main class="app">
	<Router url="{url}">
		<Header />
		<div>
			<Route path="accessories" component="{Accessories}" />
			<Route path="contacts" component="{Contacts}" />
			<Route path="/" component="{Accessories}" />
			<Route component={NotFound} />
		</div>
	</Router>
	<Footer />
</main>
