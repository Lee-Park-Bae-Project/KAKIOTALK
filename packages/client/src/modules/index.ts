import rootReducer from 'modules/rootReducer'

export type RootState = ReturnType<typeof rootReducer>;
export { default as Store } from 'modules/store'
export { default as rootReducer } from 'modules/rootReducer'
