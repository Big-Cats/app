<template>
    <li>
      <ExerciseCounter
        v-for="(exercise, index) in exercises"
        :key="index"
        :exercise="exercise"
      > 
      </ExerciseCounter>
      <AddExercise 
        :movements="movements"
        :muscles="muscles"
        :workout="workout"
        :muscleMovements="muscleMovements"
        :selectedMuscle="selectedMuscle"
        :handleAddLog="handleAddLog"
      />
      <button @click.prevent="onRemoveWorkout">Remove this workout</button>
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
    selectedMuscle: String,
    exercises: Array,
    workout: Object,
    handleAddLog: Function,
    handleRemoveWorkout: Function
  },
  components: {
    AddExercise,
    ExerciseCounter
  },
  methods: {
    onRemoveWorkout() {
      console.log('WorkoutCard removing workout ' + this.workout.id);
      
      this.handleRemoveWorkout(this.workout.id);    
    }
  }
};
</script>

<style>

li {
  border: 1px solid black;
}

</style>
