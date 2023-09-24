<script lang="ts">
  import Text from "../../atoms/Text/Text.svelte";

  export let index = 0;
  export let question = "";
</script>

<div class="container">
  <Text label="Q{index}" type="questionIndex" />
  <Text label={question} type="question" />
</div>

<style scoped>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.94rem;
    padding-top: 2rem;
  }
</style>
