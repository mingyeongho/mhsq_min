<script lang="ts">
  import { goto } from "$app/navigation";
  import Button from "../../component/atoms/Button/Button.svelte";
  import Text from "../../component/atoms/Text/Text.svelte";
  import HeaderTitle from "../../component/molecules/HeaderTitle/HeaderTitle.svelte";
  import PostIt from "../../component/molecules/PostIt/PostIt.svelte";

  const onGoTest = () => {
    goto("/");
  };

  const onGoResult = () => {
    goto("/result");
  };
</script>

<div class="container">
  <HeaderTitle title="네 마음의 구조를 알려주맛!" isPrevButton={false} />
  <div class="result_wrapper">
    <div class="wrapper">
      <PostIt tapeType="beige">
        <div class="post_it_inner_wrapper">
          <img src="GengaItem.svg" alt="GengaItem" />
          <div class="title_wrapper">
            <Text label="‘내가 제일 중요해'의" type="result_title" />
            <Text label="특권의식/웅대성 유형" type="question" />
          </div>
          <Text
            label="남들보다 내가 더 똑똑하고, 노력하고 있으니 다르게 대우 받아야 하고, 정해진 규칙 등에 대해서 일부 예외가 될 수 있다는 생각을 많이 해요. 그리고 이러한 대우를 차지하기 위해 경쟁도 마다하지 않죠."
            type="infomation"
          />
          <div class="buttons_wrapper">
            <Button
              label="테스트하기"
              type="secondary_medium"
              onClick={onGoTest}
            />
            <Button
              label="결과보기"
              type="primary_medium"
              onClick={onGoResult}
            />
          </div>
        </div>
      </PostIt>
    </div>
    <Text type="origin" label="마음연구소" />
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
    flex-direction: column;
    align-items: center;
    gap: 1.25rem;
    padding: 4.2rem 0 2.2rem;
  }

  .wrapper {
    width: 100%;
    max-width: 20rem;
    display: flex;
    flex-direction: column;
    gap: 1.62rem;
  }

  .post_it_inner_wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.28rem;
  }

  img {
    width: 6.33456rem;
    height: 3.59694rem;
  }

  .title_wrapper {
    display: flex;
    flex-direction: column;
    gap: 0.62rem;
  }

  .buttons_wrapper {
    width: 100%;
    height: 3.125rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: space-between;
    gap: 0.62rem;
  }
</style>
