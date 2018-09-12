<template>
    <li>
      <ExerciseCounter/>
      <AddExercise :movements="movements"
        :muscleMovements="muscleMovements"
        :selectedMuscle="selectedMuscle"
      />
    </li>
</template>

<script>
import AddExercise from './AddExercise.vue';
import ExerciseCounter from './ExerciseCounter.vue';

export default {
  props: {
    movements: Array,
    muscleMovements: Object,
    selectedMuscle: String
  },
  components: {
    AddExercise,
    ExerciseCounter
  }

};
</script>

<style>

</style>
