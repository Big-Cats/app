<template>
    <li>
      <ExerciseCounter
        v-for="(exercise, index) in exercises"
        :key="index"
        :exercise="exercise"
        :workout="workout"
        :workoutIndex="index"
        :handleRemoveExercise="handleRemoveExercise"
        :handleUpdateLog="handleUpdateLog"
      > 
      </ExerciseCounter>
      <AddExercise 
        :movements="movements"
        :muscles="muscles"
        :workout="workout"
        :muscleMovements="muscleMovements"
        :handleAddLog="handleAddLog"
      />
    </li>
</template>

<script>
import AddExercise from './AddExercise.vue';
import ExerciseCounter from './ExerciseCounter.vue';

export default {
  props: {
    movements: Array,
    muscles: Array,
    muscleMovements: Object,
    exercises: Array,
    workout: Object,
    handleAddLog: Function,
    handleRemoveExercise: Function,
    handleUpdateLog: Function

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
