<script>
  // imports
  import { getAssetData } from "../lib/queryAssets";
  import Comment from "../components/comment.svelte";
  import { take } from "ramda";
  import Like from "../components/like.svelte";

  // write function call to getAssetData function
</script>

<!-- view page ui -->
<section class="hero min-h-screen bg-base-100 flex flex-col">
  <p>Images, comments and likes may take sometime to load...</p>
  <hr class="w-1/2 mt-2" />
  <!-- calls assetData variable -->
  <!-- call to assetData calls the 'getAssetData' function -->
  <!-- stores return value in temp var 'assets' -->
  {#await assetData then assets}
    <!-- ensures 'assets' has data -->
    {#if assets.length > 0}
      <div class="flex-col">
        <!-- maps over elements of 'assets' -->
        <!-- each element is given temp name 'asset' -->
        {#each assets as asset}
          <div
            class="hero-content my-5 flex-col md:space-x-4 border-solid border-2 border-slate-300 rounded-lg"
          >
            <div class="w-7/8 px-0 mx-0 grid place-items-center">
              {#if asset.type === "image"}
                <!-- renders post image -->
                <img
                  class="w-[350px] object-contain rounded-lg"
                  src={asset.image}
                  alt={asset.title}
                />
              {/if}
            </div>
            <!-- renders post information like owner, title, description, hashtags -->
            <div class="w-[350px] flex flex-row items-center justify-between">
              <div class="w-7/8 mx-0">
                <div class="flex justify-between">
                  <p class="text-md">
                    {asset.ownername ? asset.ownername : take(5, asset.owner)}
                    <strong class="text-lg">{asset.title}</strong>
                  </p>
                </div>
                <p class="text-sm text-gray-600">{asset.description}</p>
                {#if asset.topics.length > 0}
                  <p class="text-sm text-gray-400">
                    Hashtags: {asset.topics.join(", ")}
                  </p>
                {/if}
              </div>
              <!-- renders the 'Like' component -->
              <!-- sends post (asset) id to it to fetch post's likes information -->
              <Like id={asset.id} />
            </div>
            <!-- renders the 'Comment' component -->
            <!-- sends post (asset) id to it to fetch post's comment information -->
            <Comment id={asset.id} />
          </div>
        {/each}
      </div>
    {:else}
      <div>Please post an image first!</div>
    {/if}
  {/await}
</section>
