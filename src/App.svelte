<script>
  // @ts-nocheck

  import { Route, router } from "tinro";
  import Navbar from "./components/navbar.svelte";
  import Upload from "./pages/upload.svelte";
  import View from "./pages/view.svelte";
  import Start from "./pages/start.svelte";
  import { profile } from "./store";

  router.mode.hash();
  router.subscribe((_) => window.scrollTo(0, 0));
</script>

<Navbar />
<main>
  <Route path="/">
    {#if $profile}
      <Upload />
    {:else}
      <Start />
    {/if}
  </Route>
  <Route path="/upload">
    {#if $profile}
      <Upload />
    {:else}
      <Start />
    {/if}
  </Route>
  <Route path="/view">
    {#if $profile}
      <View />
    {:else}
      <Start />
    {/if}
  </Route>
</main>
