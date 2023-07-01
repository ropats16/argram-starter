<script>
  // imports
  // import { postAsset } from "../lib/post";
  import Deploy from "../dialogs/deploy.svelte";
  import Error from "../dialogs/error.svelte";
  import Confirm from "../dialogs/confirm.svelte";
  import { profile } from "../store";

  // variables for storing user inputs for post
  let files;
  let title = "";
  let description = "";
  let topics = "";

  // pop dialog boxes for status updates
  let deployDlg = false;
  let errorMessage = "";
  let errorDlg = false;
  let confirmDlg = false;

  // checks for valid file and title input to enable post button
  $: notValid = !(files && title !== "");

  async function createPost(e) {
    // write code to call postAsset function from `post.js` and create new post
  }
</script>

<!-- upload page ui -->
<section class="hero min-h-screen bg-black items-start mt-10">
  <div class="flex flex-col items-center justify-start">
    <!-- input form for calling 'createPost' function -->
    <form class="form mt-16 px-4 md:px-0" on:submit|preventDefault={createPost}>
      <div class="flex flex-col justify-center">
        <div>
          <!-- checks for valid file input for preview -->
          {#if files && files[0]}
            <img
              class="border-2 border-secondary w-full md:w-[500px] md:h-[350px] object-contain"
              src={URL.createObjectURL(files[0])}
              alt="preview"
            />
            <div class="mt-2 flex justify-end">
              <!-- button to clear file input -->
              <button on:click={() => (files = [])} class="link">clear</button>
            </div>
          {:else}
            <div class="form-control">
              <label
                for="file"
                class="bg-gray-200 h-[200px] md:h-[350px] w-full md:w-[500px] grid place-items-center rounded-xl hover:shadow-xl"
              >
                <div class="flex flex-col items-center">
                  <span class="text-gray-400">Select Image* 📷</span>
                  <br />
                  <span class="text-gray-400 text-xs"
                    >Valid Image Types are:</span
                  >
                  <span class="text-gray-400 text-xs"
                    >image/png, image/jpeg, image/gif, image/jpg, image/webp,
                    image/svg+xml</span
                  >
                  <br />
                  <span class="text-gray-400 text-xs"
                    >Make sure images are 100kB file size</span
                  >
                </div>
              </label>
              <!-- input for image file storing value in 'files' variable -->
              <input
                id="file"
                type="file"
                class="hidden input input-bordered"
                bind:files
                accept="image/png, image/jpeg, image/gif, image/jpg, image/webp, image/svg+xml"
                required
              />
              <p
                class="py-8 w-full md:w-[500px] bg-whitesmoke-200 text-gray-500 text-sm"
              >
                When uploading images, it is important to note that you are
                storing these images on a permanent blockchain and by uploading
                you are indicating that you have permission to do so. NSFW
                content is not permitted on this service.
              </p>
            </div>
          {/if}
        </div>
        <div>
          <!-- input for title storing value in 'title' variable -->
          <div class="form-control">
            <label for="title" class="label">Title *</label>
            <input
              id="title"
              class="input input-bordered"
              bind:value={title}
              required
            />
          </div>
          <!-- input for description storing value in 'description' variable -->
          <div class="form-control">
            <label for="desc" class="label">Description</label>
            <textarea
              id="desc"
              class="textarea textarea-bordered"
              bind:value={description}
            />
          </div>
          <!-- input for hashtags storing value in 'topics' variable -->
          <div class="form-control">
            <label for="topics" class="label">Hashtags</label>
            <input
              id="topics"
              class="input input-bordered"
              bind:value={topics}
            />
            <p class="label text-sm text-gray-400">
              Enter a comma-separated list topics (e.g. collection, category,
              etc)
            </p>
          </div>
          <div class="my-16 space-y-4">
            <!-- button to submit post request -->
            <button disabled={notValid} class="btn btn-block"
              >Create Post</button
            >
          </div>
        </div>
      </div>
    </form>
  </div>
</section>

<!-- error handling pop ups -->
<Deploy open={deployDlg} />
<Error
  open={errorDlg}
  msg={errorMessage}
  on:cancel={() => (errorDlg = false)}
/>

<Confirm open={confirmDlg} on:cancel={() => (confirmDlg = false)} />
