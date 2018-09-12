<template id="neighborhood-template">
  <div class="form-control">
    <label>
      {{ label }}
    </label>
    <div>
      <slot/>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    label: String,
  }
};

</script>

<style scoped>

.form-control {
  border: 1px solid black;
}

label {
  font-weight: bolder;
  margin-top: 10px;
}


</style>
