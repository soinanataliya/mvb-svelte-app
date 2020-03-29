<script>
  import { Link } from "svelte-routing";

  export let to = "";

  function getProps({ location, href, isPartiallyCurrent, isCurrent }) {
    const isActive = href === "/" ? isCurrent : isPartiallyCurrent || isCurrent;

    // The object returned here is spread on the anchor element's attributes
    if (isActive) {
      return { class: "nav-link--active" };
    }
    return {};
  }
</script>

<Link to="{to}" getProps="{getProps}">
  <slot />
</Link>

<style>
  :global(.nav-link--active) {
    color: #c47179;
  }
</style>