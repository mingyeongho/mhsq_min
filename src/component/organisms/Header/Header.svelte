<script lang="ts">
  import HeaderTitle from "../../molecules/HeaderTitle/HeaderTitle.svelte";
  import Progress from "../../molecules/Progress/Progress.svelte";

  export let 전체_질문_개수 = 0;
  export let 현재_질문_순서 = 0;
  export let isPrevButton = true;
</script>

<div>
  <HeaderTitle bind:isPrevButton />
  <Progress bind:전체_질문_개수 bind:현재_질문_순서 />
</div>

<style scoped>
  div {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
</style>
