<template>
  <form>
    <FormControl label="Muscle Group">
        <select>
          <option v-for="muscle in Object.keys(muscleMovements)"
            :muscle="muscle"
            :key="muscle.id"
            :name="muscle">{{ muscle }}
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
    muscleMovements: Object,
    selectedMuscle: String
  },
  created() {
    this.selectedMuscle = '';
  },
  components: {
    FormControl
  }

};
</script>

<style>

</style>
