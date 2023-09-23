<script lang="ts">
  import Text from "../../atoms/Text/Text.svelte";

  export let 전체_질문_개수 = 0;
  export let 현재_질문_순서: number = 0;
</script>

<div class="container">
  <div class="progress_bar">
    <div
      class="current_progress"
      style="width: {(현재_질문_순서 / 전체_질문_개수) * 100}%;"
    />
  </div>
  <div class="text_wrapper">
    <Text label="{현재_질문_순서}/{전체_질문_개수}" type="progress" />
  </div>
</div>

<style scoped>
  .container {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .progress_bar {
    width: 100%;
    height: 0.625rem;
    background-color: var(--ivory-color);
  }

  .current_progress {
    background-color: var(--accent-color);
    height: 100%;
    transition: all 0.3s;
  }

  .text_wrapper {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding: 0 0.94rem;
  }
</style>
