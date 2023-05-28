declare global {
    /**
     * ⚠️ FSD
     *
     * Its hack way to export redux infering types from @/app
     * and use it in @/shared/hooks/
     */

    // eslint-disable-next-line @typescript-eslint/consistent-type-imports
    type RootState = import("../src/app/store/appStore").RootState
    // eslint-disable-next-line @typescript-eslint/consistent-type-imports
    type AppStore = import("../src/app/store/appStore").AppStore
    type AppDispatch = import("../src/app/store/appStore").AppDispatch
}
export {};