<script>
  import {
    readContractState,
    writeContract,
    writeWOthent,
  } from "permawebjs/contract";
  import { profile } from "../store";
  import { userDetails } from "permawebjs/auth";
  import { take } from "ramda";
  import { onMount } from "svelte";
  import Deploy from "../dialogs/deploy.svelte";
  import Error from "../dialogs/error.svelte";
  import Confirm from "../dialogs/confirm.svelte";

  export let id = "";

  let comments = {};
  let commentsData = readComments();
  let commentsArray = [];

  let deployDlg = false;
  let errorMessage = "";
  let errorDlg = false;
  let confirmDlg = false;
  let tx = "";

  async function addComment(e) {
    // Code for adding comments on posts
  }

  async function readComments() {
    // Code for reading comments
  }

  onMount(async () => {
    // Code for fetching and rendering comments on app refresh
  });
</script>

<section
  class="hero pb-4 bg-base-100 flex flex-col border-solid border-2 border-slate-300 rounded-lg"
>
  <!-- commentsData calls readComments() and stores result in var commentsArray  -->
  <!-- Each comment component is associated with a post, commentsArray are returned for given post -->
  {#await commentsData then commentsArray}
    <!-- Check if commentsArray has comments or is an empty array -->
    {#if commentsArray.length > 0}
      <!-- Map over each comment from the array and render it -->
      {#each commentsArray as comment}
        <p
          class="text-sm px-4 md:px-12 gap-2 flex flex-row items-center justify-start w-full"
        >
          <strong>{take(5, comment.user)}</strong>: {comment.comment}
        </p>
      {/each}
    {/if}
  {/await}
  <form
    class="form px-4 md:px-12 mx-0 gap-2 flex flex-row items-center justify-center w-full"
    on:submit|preventDefault={addComment}
  >
    <div class="form-control w-full">
      <label for="comment" class="label">Comments</label>
      <input
        id="comment"
        class="input input-bordered"
        bind:value={comments[id]}
        required
      />
      <p class="label text-sm text-gray-400">Enter a comment</p>
    </div>
    <button disabled={!comments[id]} class="btn btn-block w-1/4">
      Comment
    </button>
  </form>
</section>
<Deploy open={deployDlg} />
<Error
  open={errorDlg}
  msg={errorMessage}
  on:cancel={() => (errorDlg = false)}
/>

<Confirm {tx} open={confirmDlg} on:cancel={() => (confirmDlg = false)} />
