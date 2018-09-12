<template>
  <div>
    <FormControl label="New Workout">
      <select v-model="program">
        <option disabled value=''>Choose A Workout</option>
        <option v-for="program in programs"
              :program="program"
              :key="program.id"
              :name="program.name"
              :selected="selected"
              >
              {{ program.name }}
        </option>
      </select>
    </FormControl>
    <FormControl>
      <button type="submit" @click.prevent="onSelect">Begin Workout</button>
    </FormControl>    
  </div>
</template>

<script>
import FormControl from './FormControl.vue';
export default {
  props: {
    onSelect: Function,
    programs: Array,
    selected: Object
  },
  components: {
    FormControl
  }

};
</script>

<style>

</style>
