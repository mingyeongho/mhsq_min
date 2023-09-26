<script lang="ts">
  export let tapeType: "default" | "beige" | "long" = "default";

  const tape = ({ tapeType }: { tapeType: "default" | "beige" | "long" }) => {
    switch (tapeType) {
      case "default":
        return "MaskingTape.svg";
      case "beige":
        return "MaskingTapeBeige.svg";
      case "long":
        return "MaskingTapeLong.svg";
    }
  };
</script>

<div class="container">
  <div class="tape_wrapper">
    <img src={tape({ tapeType })} alt="MaskingTape" />
  </div>
  <slot />
</div>

<style scoped>
  .container {
    position: relative;
    background-color: var(--ivory-color);
    width: 100%;
    padding: 3rem 1.3rem 1.62rem;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.2));
  }

  .tape_wrapper {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;
  }
</style>
