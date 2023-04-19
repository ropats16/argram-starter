<script>
  import { profile } from "../store";

  async function handleConnect() {
    // // code for handling connection with app
  }
</script>

<main>
  <section class="hero min-h-screen bg-base-100">
    <div class="hero-content flex-col space-y-16">
      <h1 class="text-8xl font-bold hover:text-primary">ArGram</h1>
      <p class="text-2xl dark:text-white text-center">
        A decentralised Instagram on Arweave <br /> that allows you to post your
        images <br /> as tradeable atomic assets.
      </p>
      <div class="flex space-x-4">
        <button class="btn btn-primary" on:click={handleConnect}>Connect</button
        >
      </div>
    </div>
  </section>
</main>
