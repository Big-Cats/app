<template>
  <div>
    <h3>{{ exercise.movement.toUpperCase() }} - {{ exercise.sets.length }} x {{ exercise.sets[0].attempted }}</h3>
    <div class="set">
      <LogButton 
        v-for="(set, index) in exercise.sets" 
        :set="set"
        :key="index"
        :handleUpdateLog="handleUpdateLog"
        :index="index"
      />
    </div>
    <button class="remove-exercise" @click="onExerciseRemove">x</button>
  </div>
</template>

<script>
import LogButton from './LogButton.vue';

export default {
  components: {
    LogButton
  },
  props: {
    exercise: Object,
    workout: Object,
    workoutIndex: Number,
    handleRemoveExercise: Function,
    handleUpdateLog: Function
  },
  computed: {
    setList() {
      return this.workout.exercises[this.workoutIndex].sets;
    }
  },

  methods: {
    onExerciseRemove() {
      const idArray = [];
      this.setList.forEach(item => idArray.push(item.logId));
      this.handleRemoveExercise(idArray);
    }
  }
};
</script>

<style>

.set,
.add {
  display: inline-block;
}

.remove-exercise {
  background-color: black;
  color: white;
  display: inline;
  margin-left: 30px;
  padding: 5px;
  width: 30px;
  height: 30px;
}


</style>
