<script>
  import { questions } from "$lib/question";
  import Header from "../../component/organisms/Header/Header.svelte";

  export let 전체_질문_개수 = questions.length;
  export let 현재_질문_순서 = 0;
  export let isPrevButton = 현재_질문_순서 > 0 ? true : false;
</script>

<div class="container">
  <Header bind:전체_질문_개수 bind:현재_질문_순서 bind:isPrevButton />
</div>

<style scoped>
  .container {
    width: 100%;
    height: 100%;
  }
</style>
