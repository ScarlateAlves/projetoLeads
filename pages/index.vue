<template>
  <div class="leads">
    <Logo />
    <div class="leads__container">
      <h1 class="leads__title">Leads</h1>
      <div class="leads__div">
        <search-input tipo="text" name="Search name" v-model="filtro" />
        <search-dropdown
          v-model="selected"
          :options="categories"
        ></search-dropdown>
      </div>
    </div>
    <base-table :registros="filtre" />
  </div>
</template>
<script>
import des from '~/utils/index'
import SearchInput from '~/components/shared/search/SearchInput.vue'
import SearchDropdown from '~/components/shared/search/SearchDropdown.vue'
import BaseTable from '~/components/shared/table/BaseTable.vue'
export default {
  components: {
    'search-input': SearchInput,
    'search-dropdown': SearchDropdown,
    'base-table': BaseTable,
  },
  data() {
    return {
      filtro: '',
      leads: [],
      selected: '',
    }
  },
  computed: {
    categories() {
      return des.destructing(this.leads)
    },
    filtre() {
      return des.filtre(this.filtro, this.selected, this.leads)
    },
  },
  async asyncData(ctx) {
    return {
      leads: await ctx.app.$repository.index(),
    }
  },
}
</script>

<style lang="scss" scoped="true">
.leads {
  &__container {
    margin-top: 1.4rem;
    padding: 1.4rem 0;
    display: flex;
    justify-content: space-between;
    border-top: $border-color 1px solid;
  }
  &__div {
    display: flex;
    width: 50%;
    justify-content: space-between;
  }

  @media (max-width: 768px) {
    h1 {
      text-align: center;
      width: 100%;
    }
    &__container {
      display: flex;
      width: 100%;
      flex-wrap: wrap;
      text-align: center;
    }
    &__div {
      display: flex;
      flex-wrap: wrap;
      height: 8rem;
      width: 100%;
    }
  }
  @media (max-width: 388px) {
    &__container {
      display: flex;
      width: 100%;
      flex-wrap: wrap;
      text-align: center;
    }
    &__div {
      display: flex;
      flex-wrap: wrap;
      height: 8rem;
      width: 100%;
    }
  }
}
</style>
