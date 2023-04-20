<script>
  import {
    writeContractWOthent,
    readContractWOthent,
  } from "permawebjs/contract";
  import { profile } from "../store";
  import { take } from "ramda";
  import Deploy from "../dialogs/deploy.svelte";
  import Error from "../dialogs/error.svelte";
  import Confirm from "../dialogs/confirm.svelte";
  import { onMount } from "svelte";

  export let id = "";

  let comments = {};

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
  <!-- Check if commentsArray has comments or is an empty array -->
  {#if commentsArray.length > 0}
    <!-- Map over each comment from the array and render it -->
    {#each commentsArray as comment}
      <p
        class="text-sm px-4 md:px-12 gap-2 flex flex-row items-center justify-start w-full"
      >
        <strong
          >{comment.username && comment.username != ""
            ? comment.username
            : take(5, comment.id)}</strong
        >: {comment.comment}
      </p>
    {/each}
  {/if}
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
