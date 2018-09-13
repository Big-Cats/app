<template>
  <footer>
    <img alt="logo" src="../assets/icon.png">
    <p>© Team BigCat - 2018</p>
  </footer>
</template>

<script>
export default {

};
</script>

<style scoped>

img {
  width: 50px;
  padding-top: 10px;
}
footer {
  background-color: var(--gymred);
  color: black;
}
@media screen and (max-width: 600px) {
  footer {   
    padding-bottom: 2em;
  }
  
}

</style>
