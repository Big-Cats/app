<template>
  <div>
    <h3>
      {{ exercise.movement.toUpperCase() }} - {{ exercise.sets.length }} x {{ exercise.sets[0].attempted }} {{ exercise.sets[0].weight ? `@ ${exercise.sets[0].weight} lb` : null }}
    </h3>
    <div class="set">
      <LogButton 
        v-for="(set, index) in exercise.sets" 
        :set="set"
        :key="index"
        :handleUpdateLog="handleUpdateLog"
        :index="index"
      />
    </div>
    <button v-show="hideRemove" class="remove-exercise" @click="onExerciseRemove">x</button>
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
    sets: Array,
    handleRemoveExercise: Function,
    handleUpdateLog: Function,
    hideRemove: Boolean
  },

  methods: {
    onExerciseRemove() {
      const setIds = this.sets.map(set => set.logId);
      this.handleRemoveExercise(setIds);
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
  display: inline-block;
  margin-left: 30px;
  padding: 5px;
  width: 30px;
  height: 30px;
  border-radius: 15%;
}
.remove-exercise:hover {
  background-color: darkgrey;
  cursor: pointer;
}


</style>
