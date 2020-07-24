import rootReducer from 'modules/root-reducer'

export type RootState = ReturnType<typeof rootReducer>;
export { default as Store } from 'modules/store'
export { default as rootReducer } from 'modules/root-reducer'
