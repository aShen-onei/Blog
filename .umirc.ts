import { defineConfig } from 'umi';
import routers from './config/router';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: routers,
  fastRefresh: {},
});
