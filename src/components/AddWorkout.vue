<template>
  <div class="add-workout">
    <h3>Add a New Workout</h3>
    <FormControl label="New Workout">
      <select v-model="selected">
        <option disabled value=''>Choose A Workout</option>
        <option v-for="program in programSet"
              :program="program"
              :key="program.id"
              :name="program.name"
              :selected="selected"
              >
              {{ program.description }}
        </option>
      </select>
    </FormControl>
    <p>{{ program.selected }}</p>
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
    programSet: Array,
    selected: Object
  },
  components: {
    FormControl
  }

};
</script>

<style>

.add-workout {
  border: 1px solid black;
}

</style>
