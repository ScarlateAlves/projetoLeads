<template>
  <div class="leads">
    <div class="leads__list">
      <table>
        <thead class="leads__thead">
          <tr class="leads__title">
            <th>NAME</th>
            <th>EMAIL</th>
            <th>PHONE</th>
            <th>COMPANY</th>
            <th></th>
          </tr>
        </thead>
        <tbody class="leads__tbody">
          <tr
            v-for="registro in registros"
            :key="registro.id"
            class="leads__registros"
          >
            <td>
              {{ registro.name }}
            </td>
            <td>
              {{ registro.email }}
            </td>
            <td>
              {{ registro.phone }}
            </td>
            <td>
              {{ registro.company.name }}
            </td>
            <td>...</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  props: ['registros'],
}
</script>

<style lang="scss" scoped="true">
.leads {
  &__list {
    color: black;
    margin: 1rem 0;
    display: flex;
    width: 100%;
    justify-content: space-between;
  }

  &__list > table {
    border-spacing: 0;
    width: 100%;
    border: $border-color 1.5px solid;
    border-radius: 4px;
    background: white;
  }

  &__title > th {
    border-bottom: $border-color 1.5px solid;
  }
  &__registros:nth-child(odd) {
    background-color: rgba(246, 247, 249, 255);
  }

  th,
  td {
    padding: 0.5rem;
    padding-bottom: 1rem;
    padding-top: 1rem;
    text-align: justify;
    color: rgb(116, 129, 138);
    font-weight: 500;
  }
}
</style>
