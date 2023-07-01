<script>
  // imports
  import { profile } from "../store.js";
  import { Othent } from "arweavekit/auth";

  async function handleConnect() {
    // write code for handling connection with app
  }
</script>

<!-- landing page ui -->
<section class="hero h-full min-h-screen bg-black">
  <div class="hero-content flex-col space-y-16">
    <h1 class="text-8xl text-white font-bold hover:text-primary font-lobster">
      ArGram
    </h1>
    <p class="text-2xl dark:text-white text-center">
      A decentralised image sharing application on Arweave <br /> that allows
      you to post your images <br /> as atomic assets.
    </p>
    <div class="flex space-x-4">
      <!-- connect button to handle log in -->
      <button class="btn btn-primary" on:click={handleConnect}>Log In</button>
    </div>
  </div>
</section>
