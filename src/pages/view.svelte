<script>
  import { getAssetData } from "../lib/queryAssets";
  import Comment from "../components/comment.svelte";
  import { take } from "ramda";
  import Like from "../components/like.svelte";
</script>

<section class="hero min-h-screen bg-base-100 flex flex-col">
  <h1 class="text-2xl">View</h1>
  <p>
    Images may take a few minutes to update depending on network congestion...
  </p>
  <hr class="w-1/2 mt-2" />
  <!-- Get relevant data for assets from getAssetData function -->
  {#await getAssetData() then assets}
    <!-- If assets array is non empty, map over assets to render data -->
    {#if assets.length > 0}
      <div class="flex-col">
        {#each assets as asset}
          <div
            class="hero-content my-5 flex-col md:space-x-4 border-solid border-2 border-slate-300 rounded-lg"
          >
            <div class="w-7/8 px-0 mx-0 grid place-items-center">
              {#if asset.type === "image"}
                <img
                  class="w-[350px] object-contain rounded-lg"
                  src={asset.image}
                  alt={asset.title}
                />
              {/if}
            </div>
            <div class="flex flex-row items-center justify-center">
              <div class="w-7/8 mx-0">
                <div class="w-[320px] flex justify-between">
                  <p class="text-sm">
                    {take(5, asset.owner)}
                    <strong class="text-md">{asset.title}</strong>
                  </p>
                </div>
                <p class="text-sm text-gray-600">{asset.description}</p>
                {#if asset.topics.length > 0}
                  <p class="text-sm text-gray-400">
                    Hashtags: {asset.topics.join(", ")}
                  </p>
                {/if}
                <p class="text-xs text-gray-300">
                  {new Date(asset.timestamp).toDateString()}
                </p>
              </div>
              <Like id={asset.id} />
            </div>
            <Comment id={asset.id} />
          </div>
        {/each}
      </div>
    {:else}
      <div>Please post an image first!</div>
    {/if}
  {/await}
</section>
