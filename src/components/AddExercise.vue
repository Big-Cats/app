<template>
  <form>
    <h3>Add Exercise</h3>
    <FormControl label="Select">
        <select v-if="muscleMovements"
        v-model="selectedMuscle" v-on:change="handleChange">
          <option v-for="muscle in muscles"
            :key="muscle.id"
            >{{ muscle.name }}
          </option>
        </select>
      </FormControl>
    <FormControl label="New Movement">
      <select>
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
    muscles: Array,
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

</style>
