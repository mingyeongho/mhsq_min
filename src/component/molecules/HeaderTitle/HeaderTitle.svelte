<script lang="ts">
  import Text from "../../atoms/Text/Text.svelte";

  export let isPrevButton: boolean = true;
</script>

<div>
  {#if isPrevButton}
    <img src="ArrowLeft.svg" alt="ArrowLeft" />
  {/if}
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

  img {
    position: absolute;
    top: 0.81rem;
    left: 1rem;
    cursor: pointer;
  }
</style>
