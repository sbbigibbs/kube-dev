function resolveModuleRequires(
  resolutionResponse,
  module,
) {
  const pairs = resolutionResponse.getResolvedDependencyPairs(module);
  return pairs ? pairs.map(([, dependencyModule]) => dependencyModule) : [];
}

function getModuleDependents(
  cache,
  module,
) {
  let dependents = cache.get(module);
  if (!dependents) {
    dependents = new Set();
    cache.set(module, dependents);
  }
  return dependents;
}

/**
 * Returns an object that indicates in which module each module is required.
 */
function getInverseDependencies (
  resolutionResponse,
) {
  const cache = new Map();

  resolutionResponse.dependencies.forEach(module => {
    resolveModuleRequires(resolutionResponse, module).forEach(dependency => {
      getModuleDependents(cache, dependency).add(module);
    });
  });

  return cache;
}

export default getInverseDependencies;
