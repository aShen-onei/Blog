export interface IModel<T, M, N> {
  namespace: string;
  state: T;
  effects: M;
  reducers: N;
}
