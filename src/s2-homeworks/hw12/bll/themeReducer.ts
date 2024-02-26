const initState = {
    themeId: 1,
}

export const themeReducer = (state = initState, action: ThemeActionsType): InitStateType => { // fix any
    switch (action.type) {
        // дописать
        case 'SET_THEME_ID':
            return {...state, themeId: action.id}
        default:
            return state
    }
}

export const changeThemeId = (id: number): ChangeThemeIdActionType => ({ type: 'SET_THEME_ID', id }) // fix any

type ChangeThemeIdActionType = {
    type: 'SET_THEME_ID',
    id: number
}
type ThemeActionsType = ChangeThemeIdActionType
type InitStateType = {
    themeId: number
}