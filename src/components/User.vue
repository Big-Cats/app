<template>
  <li>
    <div class="title">
      <h3>User: {{user.email}}</h3>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    user: Object
  }
};
</script>

<style scoped>


body {
  font-family: 'Open Sans';
}
li {
  list-style: none;
  border: 1px solid var(--darkbacon);
}
h3 {
  color: var(--darkbacon);
}

p {
  padding: 0px 5px;
}

.user-goals {
  display: grid;
  grid-template-columns: 0.1fr 1fr;
}
.col-1 {
  justify-self: end;
}
.col-2 {
  justify-self: start;
}

</style>

