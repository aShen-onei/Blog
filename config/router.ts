/**
 * 路由的调配
 */

interface IRouter {
  /**
   * Any valid URL path
   */
  path?: string;
  /**
   * A React component to render only when the location matches.
   */
  component?: string | (() => any);
  wrappers?: string[];
  /**
   * navigate to a new location
   */
  redirect?: string;
  /**
   * When true, the active class/style will only be applied if the location is matched exactly.
   */
  exact?: boolean;
  routes?: any[];
  [k: string]: any;
}

const routers: IRouter[] = [{ path: '/', component: '@/pages/index' }];

export default routers;
