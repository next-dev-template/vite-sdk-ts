import { defineBuildConfig } from 'unbuild';

export default defineBuildConfig({
  entries: [
    'src/index',
  ],
  outDir: 'lib',
  rollup: {
    emitCJS: true,
  },
  declaration: true,
});
