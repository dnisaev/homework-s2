const initState = {
    isLoading: false,
}

export const loadingReducer = (state = initState, action: LoadingActionsType): InitStateType => { // fix any
    switch (action.type) {
        // пишет студент  // need to fix
        case 'CHANGE_LOADING': {
            return {...state, isLoading: action.isLoading}
        }
        default:
            return state
    }
}

export const loadingAC = (isLoading: boolean): ChangeLoadingActionType => ({
    type: 'CHANGE_LOADING',
    isLoading,
})

type ChangeLoadingActionType = {
    type: 'CHANGE_LOADING'
    isLoading: boolean
}
type LoadingActionsType = ChangeLoadingActionType
type InitStateType = {
    isLoading: boolean
}