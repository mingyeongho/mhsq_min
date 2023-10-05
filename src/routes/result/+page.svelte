<script>
  import { goto } from "$app/navigation";
  import Text from "../../component/atoms/Text/Text.svelte";
  import HeaderTitle from "../../component/molecules/HeaderTitle/HeaderTitle.svelte";
  import PostIt from "../../component/molecules/PostIt/PostIt.svelte";
  import Origin from "../../component/organisms/Origin/Origin.svelte";
  import ResultSummary from "../../component/organisms/ResultSummary/ResultSummary.svelte";

  const onRetry = () => {
    goto("survey");
  };
</script>

<div class="container">
  <HeaderTitle />
  <div class="result_wrapper">
    <div class="wrapper">
      <div class="post_it_wrapper">
        <PostIt tapeType="beige">
          <ResultSummary />
        </PostIt>
        <PostIt tapeType="long">
          <div class="result_information_wrapper">
            <div class="result_informations">
              <Text
                label="내가 남들보다 더 우선 시 되어야 하고, 나의 욕구를 그때그때 표출하는
                  것이 중요한 성향이에요. 남들과 협력해야 하는 상황에 자신의 개인적인
                  사정을 조금 더 중요시 여긴다거나, 단체 내에서 자신이 일부 희생해야
                  하거나 불편함을 감수해야 하는 상황에 대해 즉각적인 불만을 표출하는
                  경우도 생겨요."
                type="infomation"
              />
              <Text
                label="내가 남들보다 더 우선 시 되어야 하고, 나의 욕구를 그때그때 표출하는
                것이 중요한 성향이에요. 남들과 협력해야 하는 상황에 자신의 개인적인
                사정을 조금 더 중요시 여긴다거나, 단체 내에서 자신이 일부 희생해야
                하거나 불편함을 감수해야 하는 상황에 대해 즉각적인 불만을 표출하는
                경우도 생겨요."
                type="infomation"
              />
            </div>
            <button on:click={onRetry}>다시 해보기</button>
          </div>
        </PostIt>
      </div>
      <Origin />
    </div>
  </div>
</div>

<style scoped>
  .container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .result_wrapper {
    flex: 1;
    width: 100%;
    background-color: var(--accent-color);
    display: flex;
    justify-content: center;
    padding: 4.2rem 0 2.2rem;
  }

  .wrapper {
    width: 100%;
    max-width: 20rem;
    display: flex;
    flex-direction: column;
    gap: 1.62rem;
  }

  .post_it_wrapper {
    display: flex;
    flex-direction: column;
    gap: 4.3rem;
  }

  .result_information_wrapper {
    display: flex;
    flex-direction: column;
    gap: 1.88rem;
  }

  .result_informations {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
  }

  button {
    color: #fff;
    text-align: center;
    font-family: "Noto Sans";
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    border-radius: 1.875rem;
    background-color: var(--accent-color);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.1);
    border: none;
    outline: none;
    cursor: pointer;
    height: 3.75rem;
    transition: font-size 0.3s;
  }

  button:hover {
    font-size: 1.5rem;
  }
</style>
