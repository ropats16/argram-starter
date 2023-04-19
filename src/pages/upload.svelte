<script>
  import Deploy from "../dialogs/deploy.svelte";
  import Error from "../dialogs/error.svelte";
  import Confirm from "../dialogs/confirm.svelte";

  let files;
  let title = "";
  let description = "";
  let topics = "";
  let deployDlg = false;
  let errorMessage = "";
  let errorDlg = false;
  let confirmDlg = false;
  let tx = "";

  $: notValid = !(files && title !== "");

  async function createPost(e) {}
</script>

<section class="hero min-h-screen bg-base-100 items-start">
  <div class="flex flex-col items-center justify-start">
    <h1 class="text-2xl">Upload</h1>
    <form class="form mt-16 px-4 md:px-0" on:submit|preventDefault={createPost}>
      <div class="flex flex-col justify-center">
        <div>
          {#if files && files[0]}
            <img
              class="border-2 border-secondary w-full md:w-[500px] md:h-[350px] object-contain"
              src={URL.createObjectURL(files[0])}
              alt="preview"
            />
            <div class="mt-2 flex justify-end">
              <button on:click={() => (files = [])} class="link">clear</button>
            </div>
          {:else}
            <div class="form-control">
              <label
                for="file"
                class="bg-gray-200 h-[200px] md:h-[350px] w-full md:w-[500px] grid place-items-center rounded-xl hover:shadow-xl"
              >
                <div>
                  <span class="text-gray-400">Select Image 📷</span>
                </div>
              </label>
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
          <div class="form-control">
            <label for="title" class="label">Title *</label>
            <input
              id="title"
              class="input input-bordered"
              bind:value={title}
              required
            />
          </div>
          <div class="form-control">
            <label for="desc" class="label">Description</label>
            <textarea
              id="desc"
              class="textarea textarea-bordered"
              bind:value={description}
            />
          </div>
          <div class="form-control">
            <label for="topics" class="label">Topics</label>
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
            <button disabled={notValid} class="btn btn-block">Deploy</button>
          </div>
        </div>
      </div>
    </form>
  </div>
</section>
<Deploy open={deployDlg} />
<Error
  open={errorDlg}
  msg={errorMessage}
  on:cancel={() => (errorDlg = false)}
/>

<Confirm {tx} open={confirmDlg} on:cancel={() => (confirmDlg = false)} />
