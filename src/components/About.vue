<template>
  <div>
    <h2>About ~whatever we call this~ </h2>
   
  </div>
</template>

<script>

export default {

};

</script>

<style scoped>

h2 {
  font-size: 36px;
}

p.center {
  text-align: center;
}

p {
  font-size: 18px;
  text-align: left;
  width: 30%;
  padding: 10px;
  margin: 10px auto;
}

@media screen and (max-width: 480px) {

    p {
    width: 50%;
    }

    h2 {
      margin: 5% 10%;
    }
    
}

</style>
