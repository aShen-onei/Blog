import { defineConfig } from 'umi';
import routers from './common/router';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  dva: {
    hmr: true,
  },
  routes: routers,
  fastRefresh: {},
});
