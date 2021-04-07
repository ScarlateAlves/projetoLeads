export default {
  destructing(leads) {
    if (leads) {
      return new Set(
        leads
          .map((lead) => lead.company.bs)
          .join(' ')
          .split(' ')
      )
    } else {
      return 'vazio'
    }
  },

  search: (filter) => {
    if (filter) {
      return new RegExp(filter.trim(), 'i')
    }
  },

  filtre(filtro, selected, leads) {
    if (filtro) {
      return leads.filter((lead) => this.search(filtro).test(lead.name))
    }
    if (selected) {
      return leads.filter((lead) => this.search(selected).test(lead.company.bs))
    } else {
      return leads
    }
  },
}
