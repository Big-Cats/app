<template>
    <div>
        <p>Excercise 1</p>
        <p>Exercise 2</p>
        <FormControl label="New Movement">
            <select>
                <option v-for="movement in movements"
                :movement="movement"
                :key="movement.id"
                :name="movement.name">{{ movement.name }}</option>
            </select>
        </FormControl>
    </div>
</template>

<script>
import FormControl from './FormControl.vue';
export default {
  props: {
    movements: Array,
    program: Object
  },
  components: {
    FormControl
  }

};
</script>

<style>

</style>
