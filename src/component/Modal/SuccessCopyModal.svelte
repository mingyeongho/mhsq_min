<script lang="ts">
  import Modal from "./Modal.svelte";

  export let showModal = false;
</script>

<Modal bind:showModal>
  <div class="container">
    <span>링크가 복사되었습니다.</span>
    <button on:click={() => (showModal = false)}>확인</button>
  </div>
</Modal>

<style scoped>
  .container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 100%;
  }

  span {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #4a4141;
    font-family: NanumGothic;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.875rem; /* 150% */
  }

  button {
    width: 100%;
    border-radius: 1.875rem;
    background-color: var(--accent-color);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    border: none;
    padding: 0.9rem;
    color: var(--white-color);
    text-align: center;
    font-family: Nanum Gothic;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
</style>
