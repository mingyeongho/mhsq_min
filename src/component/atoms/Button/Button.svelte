<script lang="ts">
  type ButtonType =
    | "primary"
    | "secondary"
    | "primary_medium"
    | "secondary_medium";

  export let label: string = "";
  export let onClick = () => {};
  export let type: ButtonType = "primary";
  export let id = "";
</script>

<button class={type} on:click={onClick} {id}>
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

  .secondary {
    border: 1px solid var(--accent-color);
    background-color: var(--white-color);
    color: var(--text-color);
    font-family: "Noto Sans";
    font-size: 1.0625rem;
    font-weight: 500;
    transition: all 0.3s;
  }

  .primary_medium {
    background-color: var(--accent-color);
    color: var(--white-color);
    font-size: 1rem;
    font-weight: 700;
    transition: all 0.3s;
  }

  .secondary_medium {
    border: 2px solid var(--accent-color);
    background-color: var(--white-color);
    color: var(--text-color);
    font-size: 1rem;
    font-weight: 700;
    transition: all 0.3s;
  }

  @media (hover: hover) {
    .secondary:hover {
      background-color: var(--accent-color);
      color: var(--white-color);
      font-size: 1.25rem;
      font-weight: 700;
    }

    .primary_medium:hover {
      font-size: 1.125rem;
    }

    .secondary_medium:hover {
      font-size: 1.125rem;
    }
  }
</style>
