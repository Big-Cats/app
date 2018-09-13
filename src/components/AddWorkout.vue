<template>
  <div class="add-workout">
    <h3>Add a New Workout</h3>
    <form>
      <FormControl label="New Workout">
        <select v-model="selectedProgram">
          <option value=''>No Template</option>
          <option v-for="program in programSet"
                :program="program"
                :key="program.id + program.name"
                :name="program.name"
                :value="program.id"
                >
                {{ program.name }}
          </option>
        </select>
      </FormControl>
      <button type="submit" @click.prevent="onWorkoutAdd">Begin Workout</button>
    </form>
  </div>
</template>

<script>
import FormControl from './FormControl.vue';
export default {
  props: {
    handleAddWorkout: Function,
    programSet: Array,
  },
  components: {
    FormControl
  },
  data() {
    return {
      selectedProgram: ''
    };
  },
  methods: {
    onWorkoutAdd() {
      const selectedId = this.selectedProgram 
        ? this.programFinder(this.selectedProgram).id 
        : null;
      console.log('Id is ', selectedId);
      console.log('going to api', JSON.stringify({ id: selectedId }) )
      this.handleAddWorkout({ id: selectedId });
    },
    programFinder(programId) {
      return this.programSet.find((item) => { return item.id = programId; });
    }
  }

};
</script>

<style scoped>

.form-control {
  text-align: center;
  margin: 0 auto;
}

.add-workout {
  border: 1px solid black;
}

</style>
