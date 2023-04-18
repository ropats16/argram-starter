<script>
  import { profile } from "../store.js";
  import { take } from "ramda";
  import othent from "othent";

  $: name = $profile ? $profile.given_name + $profile.family_name : "";

  async function handleConnect() {
    $profile = await othent.logIn();
    console.log($profile);
  }

  async function handleDisconnect() {
    await othent.logOut();
    $profile = null;
  }
</script>

<div class="navbar bg-base-100">
  <div class="navbar-start">
    <div class="dropdown dropdown-hover">
      <button class="btn btn-square btn-ghost">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          class="inline-block w-5 h-5 stroke-current"
          ><path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          /></svg
        >
      </button>
      <ul class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
        <li><a href="/upload">Upload</a></li>
        <li><a href="/view">View</a></li>
      </ul>
    </div>
  </div>
  <div class="navbar-center md:flex">
    <a href="/" class="btn btn-ghost normal-case text-xl">ArGram</a>
  </div>
  <div class="navbar-end md:flex">
    {#if $profile}
      <button class="btn btn-ghost" on:click={handleDisconnect}
        >{take(5, name)}...</button
      >
    {:else}
      <button on:click={handleConnect} class="btn btn-ghost">Connect</button>
    {/if}
  </div>
</div>
