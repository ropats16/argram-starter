<script>
  let comments = {};
  let errorMessage = "";
  let errorDlg = false;

  export let id = "";

  async function addComment(e) {}
</script>

<section class="hero pb-4 bg-base-100">
  <form
    class="form px-4 md:px-12 gap-2 flex flex-row items-center justify-center w-full"
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
