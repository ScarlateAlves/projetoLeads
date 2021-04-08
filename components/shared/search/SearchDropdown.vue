<template>
  <select @input="$emit('input', $event.target.value)">
    <option value="">Categories</option>
    <option v-for="text in options" :key="text.id">
      {{ text }}
    </option>
  </select>
</template>
<script>
export default {
  props: ['options'],
}
</script>
<style scoped lang="scss">
select {
  width: 40%;
  min-width: 110px;
  height: 50px;
  font-size: 16px;
  border-radius: 4px;
  border: $border-color 1.5px solid;
  border-radius: 10px;
  color: rgb(116, 129, 138);
  font-weight: 500;
  padding: 0.5rem;
  box-shadow: 0 0 0 0;
  outline: 0;
}

select:hover {
  background: #ffffff;
  border: 1px solid rgb(116, 129, 138);
  cursor: pointer;
}

@media (max-width: 768px) {
  select {
    width: 80%;
    margin: auto;
    max-width: 300px;
  }
}
</style>
