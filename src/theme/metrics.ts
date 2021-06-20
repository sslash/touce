import { Dimensions } from 'react-native'

export const borderRadiusScale = [2, 4, 8, 12, 18, 28]
const window = Dimensions.get('window')
const screen = Dimensions.get('screen')
const { height: _screenHeight } = screen
const { width, height: _windowHeight } = window
const height = global.ifIos<number>(Math.max(_windowHeight, _screenHeight), window.height)

export const screenWidth = width < height ? width : height
export const screenHeight = width < height ? height : width
export const mainHorizontalMargin = 24
export const spaceUnderTransparentNav = 6
