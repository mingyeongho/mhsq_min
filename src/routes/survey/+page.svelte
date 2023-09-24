<script lang="ts">
  import { page } from "$app/stores";
  import { questions } from "$lib/question";
  import type { StepType } from "$lib/type";
  import Funnel from "../../component/atoms/Funnel/Funnel.svelte";
  import Question from "../../component/molecules/Question/Question.svelte";
  import Header from "../../component/organisms/Header/Header.svelte";

  let 전체_질문_개수 = questions.length;
  $: searchParams = $page.url.searchParams;
  $: getInitFunnelStep = searchParams.get("funnel-step");
  $: getFunnelStep = getInitFunnelStep ? +getInitFunnelStep : 0;
  $: isPrevButton = getFunnelStep ?? 0 > 0 ? true : false;

  const selectSex: StepType = {
    name: 0,
    component: Question,
    props: {
      answers: [
        {
          answer: "여자",
          score: 1,
          index: 1,
        },
        {
          answer: "남자",
          score: 2,
          index: 2,
        },
        {
          answer: "비공개",
          score: 3,
          index: 3,
        },
      ],
      index: 0,
    },
  };

  const Steps: StepType[] = [selectSex].concat(
    questions.map((q) => {
      const { index, answers, question, group } = q;
      return {
        name: index,
        component: Question,
        props: {
          index,
          question,
          answers,
        },
      };
    })
  );
</script>

<div class="container">
  <Header
    bind:전체_질문_개수
    bind:현재_질문_순서={getFunnelStep}
    bind:isPrevButton
  />
  <Funnel steps={Steps} />
</div>

<style scoped>
  .container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
