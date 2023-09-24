<script lang="ts">
  type TextType =
    | "origin"
    | "foundation"
    | "title"
    | "header"
    | "progress"
    | "question"
    | "questionIndex";

  export let label: string = "";
  export let type: TextType = "origin";
</script>

<span class={type}>{label}</span>

<style scoped>
  .origin {
    font-family: "Noto Sans";
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.375rem;
    text-align: center;
    color: var(--white-color);
    word-break: keep-all;
  }

  .foundation {
    font-family: "GangwonEduAll";
    font-size: 1rem;
    font-weight: 400;
    line-height: normal;
    color: var(--text-color);
    text-align: center;
  }

  .title {
    font-family: "GangwonEduAll";
    font-size: 2.25rem;
    font-weight: 400;
    line-height: normal;
    color: var(--text-color);
    text-align: center;
  }

  .header {
    font-family: "GangwonEduAll";
    font-size: 1.125rem;
    font-weight: 400;
    color: var(--white-color);
  }

  .progress {
    font-family: "GangwonEduAll";
    font-size: 1.125rem;
    font-weight: 400;
    color: var(--text-color);
  }

  .question {
    font-family: "GangwonEduAll";
    font-size: 1.75rem;
    font-weight: 400;
    color: var(--text-color);
    text-align: center;
  }

  .questionIndex {
    font-family: "GangwonEduAll";
    font-size: 1.75rem;
    font-weight: 400;
    color: var(--accent-color);
  }
</style>
