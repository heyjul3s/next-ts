import tsConfig from '../../tsconfig.json';
import tsConfigPaths from 'tsconfig-paths';

tsConfigPaths.register({
  baseUrl: './',
  paths: tsConfig.compilerOptions.paths
});
