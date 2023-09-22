<script lang="ts">
  type ButtonType = "primary" | "secondary";

  export let label: string = "";
  export let onClick = () => {};
  export let type: ButtonType = "primary";
</script>

<button class={type} on:click={onClick}>
  {label}
</button>

<style scoped>
  button {
    width: 100%;
    height: 100%;
    font-family: "Noto Sans";
    border-radius: 1.875rem;
    border: none;
    outline: none;
    cursor: pointer;
  }

  .primary {
    background-color: var(--accent-color);
    color: var(--white-color);
    font-size: 1.25rem;
    font-weight: 700;
  }
</style>
