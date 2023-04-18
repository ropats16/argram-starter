<script>
  import { onMount } from "svelte";
  import { getAssetData } from "../lib/asset";
  import Comment from "../components/comment.svelte";

  let assetData = getAssetData();
  let assets = [];

  onMount(async () => {
    assets = await assetData;
  });
</script>

<section class="hero min-h-screen bg-base-100 flex flex-col">
  <h1 class="text-2xl">View</h1>
  <p>
    Images may take a few minutes to update depending on network congestion...
  </p>
  <hr class="w-1/2 mt-2" />
  {#await assetData then assets}
    {#if assets.length > 0}
      <div class="flex-col">
        {#each assets as asset}
          <div class="hero-content py-5 m-0 flex-col md:space-x-4">
            <div class="w-1/2 px-0 mx-0 grid place-items-center">
              {#if asset.type === "image"}
                <img
                  class="w-full md:w-[500px] object-contain"
                  src={asset.image}
                  alt={asset.title}
                />
              {/if}
            </div>
            <div class="w-[325px] md:w-1/2 md:ml-8">
              <div class="mb-4 flex items-start justify-between">
                <strong class="text-xl">{asset.title}</strong>
              </div>
              <p class="text-xl">{asset.description}</p>
              {#if asset.topics.length > 0}
                <p class="mt-4 text-sm">Topics: {asset.topics.join(", ")}</p>
              {/if}
              <p class="text-xs">
                {new Date(asset.timestamp).toDateString()}
              </p>
            </div>
          </div>
          <Comment id={asset.id} />
          <hr />
        {/each}
      </div>
    {:else}
      <div>Please post an image first!</div>
    {/if}
  {/await}
</section>
