<script lang="ts">
  export let showModal: boolean; // boolean
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="container" on:click|self={() => (showModal = false)}>
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div class="wrapper">
    <slot />
  </div>
</div>

<style scoped>
  .container {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #00000099;
    z-index: 99999;
    padding: 2.4rem;
  }

  .wrapper {
    border-radius: 16px;
    background: #fff;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    padding: 2.6rem 2rem;
    position: relative;
    width: 20rem;
    height: 16rem;
    overflow: auto;
  }

  @media screen and (max-width: 1200px) {
    .wrapper {
      height: 90vh;
    }
  }
  @media screen and (max-width: 768px) {
    .container {
      padding: 0.25rem;
    }
    .wrapper {
      height: 90vh;
      padding: 1.5rem;
    }
  }
  @media screen and (max-width: 576px) {
  }
</style>
