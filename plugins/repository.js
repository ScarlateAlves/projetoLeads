import createRepository from '~/api/repository.js'
export default (ctx, inject) => {
  const repositoryWithAxios = createRepository(ctx.$axios)
  inject('repository', repositoryWithAxios('/users'))
}
