import { atom } from 'nanostores'

type ThemeType = boolean | string

const ThemeState = atom<ThemeType>('light')

const ThemeReducer = (): void => {
	ThemeState.set(ThemeState.get() === 'light' ? 'dark' : 'light')
}

export {ThemeState, ThemeReducer}