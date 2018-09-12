<template>
  <form class="add-exercise">
    <h3>Add Exercise</h3>
    <FormControl label="Select" class="exercise-selector">
        <select v-model="selectedMuscle" v-on:change="handleChange" class="pulldown">
          <option v-for="muscle in Object.keys(muscleMovements)"
            :muscle="muscle"
            :key="muscle.id"
            :name="muscle">{{ muscle }}
          </option>
        </select>
      </FormControl>
    <FormControl label="New Movement" class="exercise-selector">
      <select class="pulldown">
        <option v-for="movement in muscleMovements[this.selectedMuscle]"
          :movement="movement"
          :key="movement.id"
          :name="movement.name">{{ movement.name }}
        </option>
      </select>
    </FormControl>
  </form>
</template>

<script>
import FormControl from './FormControl.vue';
export default {
  
  props: {
    movements: Array,
    muscleMovements: Object,
    selectedMuscle: String
  },
  computed: {
    selectMuscle() {
      return this.selectedMuscle;
    }
  },
  components: {
    FormControl
  },
  methods: {
    handleChange() {

    }
  }

};
</script>

<style>
.add-exercise {
  display: flex;
  border: 2px solid #C97560;
  background-color: #F7EDEA;
  border-radius: .5em;
  padding: .5em 0 1em 1em;

}

.exercise-selector {
  display: inline-block;
  margin: auto;
  padding: 0 .2em;
  border-radius: .3em;
  border: 1px solid #C97560;
}

.pulldown {
  border-radius: .2em;
}
</style>
