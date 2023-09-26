<script lang="ts">
  import { browser } from "$app/environment";
  import Text from "../../atoms/Text/Text.svelte";

  export let isPrevButton: boolean = true;

  const onPrev = () => {
    if (browser) {
      window.history.back();
    }
  };
</script>

<div>
  <button on:click={onPrev}>
    {#if isPrevButton}
      <img src="ArrowLeft.svg" alt="ArrowLeft" />
    {/if}
  </button>
  <Text label="마음연구소" type="header" />
</div>

<style scoped>
  div {
    width: 100%;
    height: 3.125rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--accent-soft-color);
    position: relative;
  }

  button {
    background-color: transparent;
    border: none;
    outline: none;
  }

  img {
    position: absolute;
    top: 0.81rem;
    left: 1rem;
    cursor: pointer;
  }
</style>
