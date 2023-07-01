<script>
  // @ts-nocheck
  // imports
  import { Route, router } from "tinro";
  import Upload from "./pages/upload.svelte";
  import View from "./pages/view.svelte";
  import Start from "./pages/start.svelte";
  import { profile } from "./store";
  import Navbar from "./components/navbar.svelte";

  // scroll to top of page
  router.mode.hash();
  router.subscribe((_) => window.scrollTo(0, 0));
</script>

<main class="static">
  <!-- Renders Navbar component -->
  <Navbar />
  <Route path="/">
    <!-- Redirects user to Upload page if connected to app -->
    {#if $profile}
      <Upload />
      <!-- else displays Start (landing) page -->
    {:else}
      <Start />
    {/if}
  </Route>
  <Route path="/upload">
    <!-- Displays Upload page only if user is connected to app -->
    {#if $profile}
      <Upload />
      <!-- else displays Start (landing) page -->
    {:else}
      <Start />
    {/if}
  </Route>
  <Route path="/view">
    <!-- Displays View page only if user is connected to app -->
    {#if $profile}
      <View />
      <!-- else displays Start (landing) page -->
    {:else}
      <Start />
    {/if}
  </Route>
</main>
