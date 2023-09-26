<script>
  import Text from "../../atoms/Text/Text.svelte";
</script>

<div class="container">
  <img src="Genga.svg" alt="Genga" />
  <div class="summary_wrapper">
    <div class="title_wrapper">
      <Text label="‘내가 제일 중요해'의" type="result_title" />
      <Text label="특권의식/웅대성 유형" type="question" />
    </div>
    <div class="share_wrapper">
      <button>
        <img src="Kakao.svg" alt="Kakao" />
      </button>
      <button>
        <img src="Link.svg" alt="Link" />
      </button>
    </div>
    <div class="infomation">
      <Text
        label="남들보다 내가 더 똑똑하고, 노력하고 있으니 다르게 대우 받아야 하고, 정해진 규칙 등에 대해서 일부 예외가 될 수 있다는 생각을 많이 해요. 그리고 이러한 대우를 차지하기 위해 경쟁도 마다하지 않죠."
        type="infomation"
      />
    </div>
  </div>
</div>

<style scoped>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.3rem;
  }

  .summary_wrapper {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }

  .title_wrapper {
    display: flex;
    flex-direction: column;
    gap: 0.62rem;
  }

  .share_wrapper {
    display: grid;
    grid-template-columns: repeat(2, 2.8125rem);
    height: 2.8125rem;
    justify-content: center;
    gap: 0.94rem;
  }

  button {
    background-color: var(--white-color);
    filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.1));
    border: none;
    outline: none;
    cursor: pointer;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s;
  }

  img {
    transition: all 0.3s;
  }

  button:hover {
    filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.2));
    & > img {
      transform: scale(1.3);
    }
  }
</style>
