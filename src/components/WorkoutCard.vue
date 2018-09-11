<template>
    <li>
      <ExerciseCounter/>
      <AddExercise :movements="movements"/>
    </li>
</template>

<script>
import AddExercise from './AddExercise.vue';
import ExerciseCounter from './ExerciseCounter.vue';

export default {
  props: {
    movements: Array,
    program: Object
  },
  components: {
    AddExercise,
    ExerciseCounter
  }

};
</script>

<style>
li {
  border: 1px solid black;
}

</style>
