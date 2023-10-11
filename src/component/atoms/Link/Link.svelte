<script lang="ts">
  export let label: string = "";
  export let href: string = "";
  export let id = "";
</script>

<a {href} target="_blank" {id}>{label}</a>

<style scoped>
  a {
    font-family: "GangwonEduAll";
    font-size: 1.125rem;
    font-weight: 400;
    color: var(--link-color);
    text-align: center;
  }
</style>
