<script>
	import { Router, Route, Link } from "svelte-routing";
	import Header from './components/Header.svelte';
	import Footer from './components/Footer.svelte';
	import Home from './pages/Home.svelte';
	import Accessories from './pages/Accessories.svelte';
	import Contacts from './pages/Contacts.svelte';
	import NotFound from './pages/NotFound.svelte';
	import Login from './pages/Login.svelte';

	export let url = "";
</script>

<style lang="scss">
  .app {
    display: flex;
		flex-direction: column;
		min-height: 100%;
		align-items: center;
		overflow-x: hidden;
  }
</style>

<main class="app">
	<Router url="{url}">
		<Header />
			<Route path="accessories"><Accessories /></Route>
			<Route path="contacts"><Contacts /></Route>
			<Route path="/" ><Accessories /></Route>
			<Route path="/login" ><Contacts /></Route>
			<Route component={NotFound} />
	</Router>
	<Footer />
</main>
