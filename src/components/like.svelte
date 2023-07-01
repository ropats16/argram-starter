<script>
  // imports
  import {
    readContractWOthent,
    writeContractWOthent,
  } from "arweavekit/contract";
  import { profile } from "../store";
  import { onMount } from "svelte";

  // id variable to get the transaction id of an asset (post) from the view page
  export let id = "";

  // object to store likes information for a post
  let likes = {};

  async function likePost() {
    // write code for liking posts
  }

  async function readLikes() {
    // write code for reading likes
  }

  onMount(async () => {
    // write code for fetching and rendering likes on component first time render
  });
</script>

<section>
  <!-- Calculates number of keys object -->
  <!-- number keys corresponds to the number of likes for a post -->
  <p class="text-center">{Object.keys(likes).length}</p>
  <!-- button to like a post -->
  <!-- button is disabled if user has already liked post -->
  <button
    class="btn btn-block"
    disabled={Object.keys(likes).includes($profile.contract_id)}
    on:click|preventDefault={likePost}>Like</button
  >
</section>
