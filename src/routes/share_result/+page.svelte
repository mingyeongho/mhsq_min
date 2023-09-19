<script>
  import Header from "../../component/Survey/Header.svelte";
</script>

<div class="container">
  <main>
    <div class="padding_box">
      <Header />
    </div>
    <div class="result_wrapper">
      <div class="result">
        <div class="titles">
          <h4 class="intro_title">'내가 제일 중요해'의</h4>
          <h2 class="title">특권의식/웅대성 유형</h2>
        </div>
      </div>
      <div class="buttons">
        <button>테스트하기</button>
        <button>결과보기</button>
      </div>
    </div>
  </main>
  <div class="bottom" />
</div>

<style scoped>
  .container {
    flex: 1;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: #fbbd61;
  }

  main {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.56rem;
  }

  .padding_box {
    width: 100%;
    padding: 1.87rem 1.7rem 0;
    display: flex;
    flex-direction: column;
    gap: 1.125rem;
  }

  .result_wrapper {
    flex: 1;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1.62rem;
    border-top-left-radius: 60px;
    background: #f9f9f9;
    padding: 1.75rem 1.25rem;
  }

  .bottom {
    width: 100%;
    height: 10px;
    background-color: #fbbd61;
  }
</style>
