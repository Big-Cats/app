<template>
    <main>
      <WorkoutDetail
          :workout="this.workout"
          :movements="movements"
          :muscles="muscles"
          :muscleMovements="muscleMovements"
          :exercises="workout.exercises"
          :handleAddLog="handleAddLog"
          :handleUpdateLog="handleUpdateLog"
          :handleRemoveExercise="handleRemoveExercise"
      />        
    </main>
</template>

<script>
import WorkoutDetail from "./WorkoutDetail.vue";
import AddWorkout from "./AddWorkout.vue";

export default {
  props: {
    workoutSet: Array,
    programSet: Array,
    movements: Array,
    muscles: Array,
    muscleMovements: Object,
    handleAddLog: Function,
    handleRemoveLog: Function,
    handleUpdateLog: Function,
    handleRemoveExercise: Function,
    updateCoreData: Function
  },
  data() {
    return {
      workout: null
    };
  },
  components: {
    WorkoutDetail,
    AddWorkout
  },
  // This should be calling api to get individual workout detail
  created() {
    // from "api":
    getWorkout(this.$router.params.id)
      .then(workout => this.workout = workout);
  }
};
</script>

<style>
@font-face {
  font-family: BOMBARD;
  src: url("../assets/fonts/BOMBARD.ttf") format("opentype");
}

.call-to-action {
  text-decoration: none;
  background-color: rgba(0, 0, 0, 0);
  color: var(--gymred);
  text-shadow: 2px 2px black;
  font-size: 72px;
  border: 5px solid var(--gymred);
  border-radius: 20px 20px;
  padding: 8px;
}

main {
  background: url(../assets/background.jpg);
  background-size: cover;
}
</style>
