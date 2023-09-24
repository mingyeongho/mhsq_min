<script>
  import Text from "../../atoms/Text/Text.svelte";
</script>

<div class="container">
  <img src="GengaItem.svg" alt="GengaItem" />
  <Text label="성별을 알려주세요." type="question" />
</div>

<style scoped>
  .container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 2.92rem;
    padding-top: 2.3rem;
  }
</style>
