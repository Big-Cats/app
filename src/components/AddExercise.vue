<template>
  <FormControl label="New Movement">
    <p>I am here</p>
    <select>
      <option v-for="movement in movements"
        :movement="movement"
        :key="movement.id"
        :name="movement.name">{{ movement.name }}
      </option>
    </select>
  </FormControl>
</template>

<script>
import FormControl from './FormControl.vue';
export default {
  props: {
    movements: Array
  },
  components: {
    FormControl
  }

};
</script>

<style>

</style>
