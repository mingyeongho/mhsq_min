<script lang="ts">
  import PostIt from "../component/molecules/PostIt/PostIt.svelte";
  import Lobby from "../component/organisms/Lobby/Lobby.svelte";
  import Origin from "../component/organisms/Origin/Origin.svelte";
</script>

<div class="container">
  <div class="wrapper">
    <PostIt>
      <Lobby />
    </PostIt>
    <Origin />
  </div>
</div>

<style scoped>
  .container {
    width: 100%;
    height: 100%;
    background-color: var(--accent-color);
    /* padding: 4.5rem 1.88rem 2.5rem; */
    padding: 4.5rem 0 2.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .wrapper {
    width: 100%;
    max-width: 20rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.25rem;
  }
</style>
