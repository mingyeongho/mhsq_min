<script>
  import Button from "../../atoms/Button/Button.svelte";
  import Link from "../../atoms/Link/Link.svelte";
  import Text from "../../atoms/Text/Text.svelte";
</script>

<div class="container">
  <div class="top">
    <Text label="마음연구소" type="foundation" />
    <Text label="네 마음의 구조를 알려주맛!" type="title" />
  </div>
  <div class="mid">
    <img src="GengaGroup.svg" alt="GengaGroup" />
  </div>
  <div class="bot">
    <div class="start_button">
      <Button label="시작하기" type="primary" />
    </div>
    <Link label="마음연구소는?" href="https://www.maumlab.co.kr/" />
  </div>
</div>

<style scoped>
  .container {
    display: flex;
    flex-direction: column;
    gap: 1.69rem;
  }

  .top {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.44rem;
    padding: 0 1rem;
  }

  .mid {
    display: flex;
    justify-content: center;
  }

  .bot {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.63rem;
  }

  .start_button {
    width: 100%;
    height: 3.75rem;
  }
</style>
