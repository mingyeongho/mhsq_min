<script lang="ts">
  import type { AnswerType } from "$lib/type";
  import Button from "../../atoms/Button/Button.svelte";
  import QuestionTitle from "../QuestionTitle/QuestionTitle.svelte";
  import Sex from "../Sex/Sex.svelte";

  export let index: number = 0;
  export let question = "";
  export let answers: AnswerType[] = [];
  export let onNext = () => {};
</script>

<div class="container">
  <div class="question_section">
    {#if index === 0}
      <Sex />
    {:else}
      <QuestionTitle bind:index bind:question />
    {/if}
  </div>
  <div
    class="answer_section"
    style="grid-template-rows: repeat({answers.length}, 3.125rem);"
  >
    {#each answers as answer}
      <Button
        label={answer.answer}
        type="secondary"
        onClick={() => {
          onNext();
        }}
      />
    {/each}
  </div>
</div>

<style scoped>
  .container {
    width: 18.75rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .question_section {
    height: 17rem;
  }

  .answer_section {
    flex: 1;
    width: 17.1825rem;
    display: grid;
    gap: 1.25rem;
  }
</style>
