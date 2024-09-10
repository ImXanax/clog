<script>
  import Logo from "./assets/Logo.svelte";
  let w = 200;
  let h = 200;
</script>

<main>
  <Logo />
</main>

<style>
  :global(body) {
    padding: 0;
    margin: 0;
    width: 100vw;
    height: 100vh;
    background-color: cadetblue;
  }
  :global(#x-logo) {
    width: 200px;
    height: 200px;
  }
  main {
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Arial, sans-serif;
    overflow-y: hidden;
    color: white;
    width: 100vw;
    height: 100vh;
    background-color: #ffffff;
  }
  #test {
    width: 200px;
    height: 200px;
  }
</style>
