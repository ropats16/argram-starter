<script>
  import {
    readContractWOthent,
    writeContractWOthent,
  } from "permawebjs/contract";
  import { profile } from "../store";
  import { onMount } from "svelte";

  export let id = "";

  let likes = {};

  async function likePost() {
    // Code for liking posts
  }

  async function readLikes() {
    // Code for reading likes
  }

  onMount(async () => {
    // Code for fetching and rendering likes on app refresh
  });
</script>

<section>
  <p>{Object.keys(likes).length}</p>
  <button
    class="btn btn-block"
    disabled={Object.keys(likes).includes($profile.contract_id)}
    on:click|preventDefault={likePost}>Like</button
  >
</section>
