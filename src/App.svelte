<script>
	import { Router, Route, Link } from "svelte-routing";
	import Header from './components/Header.svelte';
	import Home from './pages/Home.svelte';
	import Accessories from './pages/Accessories.svelte';
	import Contacts from './pages/Contacts.svelte';
	import NotFound from './pages/NotFound.svelte';

	export let url = "";
</script>

<main>
	<Router url="{url}">
		<Header />
		<div>
			<Route path="accessories" component="{Accessories}" />
			<Route path="contacts" component="{Contacts}" />
			<Route path="/" component="{Accessories}" />
			<Route component={NotFound} />
		</div>
	</Router>
</main>

<style>
	
</style>