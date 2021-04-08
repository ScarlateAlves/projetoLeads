<template>
  <div>
    <label>
      {{ label }}
    </label>
    <input
      :type="tipo"
      :placeholder="name"
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>
<script>
export default {
  props: {
    tipo: {
      type: String,
      required: true,
    },
    name: {
      type: String,
    },
    label: {
      type: String,
    },
    value: {
      type: String,
    },
  },
}
</script>

<style scoped lang="scss">
div {
  width: 50%;
}
input {
  height: 47px;
  font-size: 16px;
  width: 100%;
  border: $border-color 1.5px solid;
  border-radius: 10px;
  padding-left: 2rem;
  background-image: url('~/img/pesquisa.png');
  background-repeat: no-repeat;
  background-position: 10px 15px;
  box-shadow: 0 0 0 0;
  outline: 0;
}

input:hover {
  background: #ffffff;
  border: 1px solid rgb(116, 129, 138);
  background-image: url('~/img/pesquisa.png');
  background-repeat: no-repeat;
  background-position: 10px 15px;
}
@media (max-width: 768px) {
  div {
    width: 90%;
    max-width: 400px;
    margin: auto;
  }

  input {
    width: 92%;
    max-width: 400px;
  }
  @media (max-width: 450px) {
    div {
      width: 90%;
      margin: auto;
    }

    input {
      width: 89%;
      max-width: 400px;
    }
  }
}
</style>
