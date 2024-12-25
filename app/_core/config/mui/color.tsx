const ColorPallet = (themeMode: string) => {
    ///primary=blue range color

    ///#37485f
    const primaryLight = {
        0: '#FFFFFF',
        100: 'rgba(244, 247, 254, 1)',
        200: 'rgba(123, 191, 255, 1)',
        300: 'rgba(81, 169, 252, 1)',
        400: 'rgba(26, 125, 255, 1)',
        500: 'rgba(0, 48, 92, 1)',
        600: 'rgba(0, 37, 71, 1)',
        title: 'rgba(0, 54, 134, 1)',
    }
    const primaryDark = {
        0: 'rgba(0, 37, 71, 1)',
        100: 'rgba(0, 48, 92, 1)',
        200: 'rgba(26, 125, 255, 1)',
        300: 'rgba(81, 169, 252, 1)',
        400: 'rgba(123, 191, 255, 1)',
        500: 'rgba(244, 247, 254, 1)',
        600: '#FFFFFF',
        title: '#FFFFFF',
    }
    ///secondary=yellow range color
    const secondaryLight = {
        50: '#FCF7D0',
        100: '#FBF4B3',
        200: '#FAEE7C',
        300: '#FAEC6C',
        400: '#F9E534',
        500: '#FCE300',
        600: '#EED706',
        700: '#E3CD05',
        800: '#D7C204',
        900: '#CCB804',
    }
    const secondaryDark = {
        50: '#CCB804',
        100: '#D7C204',
        200: '#E3CD05',
        300: '#EED706',
        400: '#FCE300',
        500: '#F9E534',
        600: '#FAEC6C',
        700: '#FAEE7C',
        800: '#FBF4B3',
        900: '#FCF7D0',
    }

    const whiteLight = {
        50: '#F5F5F5',
        100: '#EDEDED',
        200: '#F6F6F6',
        300: '#F7F7F7',
        400: '#F8F8F8',
        500: '#F9F9F9',
        600: '#FAFAFA',
        700: '#FBFBFB',
        800: '#FDFDFD',
        900: '#000',
    }

    const whiteDark = {
        50: '#000',
        100: '#EDEDED',
        200: '#FBFBFB',
        300: '#FAFAFA',
        400: '#F9F9F9',
        500: '#F8F8F8',
        600: '#F7F7F7',
        700: '#F6F6F6',
        800: '#EDEDED',
        900: '#F5F5F5',
    }

    const grayLight = {
        50: '#FCFCFC',
        100: '#EDEDED',
        200: '#C6C6C6',
        300: '#B3B3B3',
        400: '#999999',
        500: '#777777',
        600: '#656565',
        700: '#565656',
        800: '#494949',
        900: '#3E3E3E',
    }
    const grayDark = {
        50: '#3E3E3E',
        100: '#494949',
        200: '#565656',
        300: '#656565',
        400: '#777777',
        500: '#999999',
        600: '#B3B3B3',
        700: '#C6C6C6',
        800: '#EDEDED',
        900: '#FCFCFC',
    }

    const AlarmLight = {
        50: '#F5CECE',
        100: '#F1BDBD',
        200: '#ECA7A7',
        300: '#E68A8A',
        400: '#DE6363',
        500: '#D32F2F',
        600: '#B52626',
        700: '#9A2121',
        800: '#831C1C',
        900: '#6F1818',
    }

    const AlarmDark = {
        50: '#6F1818',
        100: '#831C1C',
        200: '#9A2121',
        300: '#B52626',
        400: '#D32F2F',
        500: '#DE6363',
        600: '#E68A8A',
        700: '#ECA7A7',
        800: '#F1BDBD',
        900: '#F5CECE',
    }

    const warningLight = {
        50: '#FFDCBF',
        100: '#FFD0A9',
        200: '#FFC08D',
        300: '#FFAB67',
        400: '#FF8F34',
        500: '#FA8D34',
        600: '#CB5B00',
        700: '#AD4E00',
        800: '#934200',
        900: '#7D3800',
    }

    const warningDark = {
        50: '#7D3800',
        100: '#934200',
        200: '#AD4E00',
        300: '#CB5B00',
        400: '#FA8D34',
        500: '#FF8F34',
        600: '#FFAB67',
        700: '#FFC08D',
        800: '#FFD0A9',
        900: '#FFDCBF',
    }

    const successLight = {
        50: '#C4E9C6',
        100: '#B1E2B3',
        200: '#96D99A',
        300: '#74CC78',
        400: '#48BB78',
        500: '#5FB664',
        600: '#46994A',
        700: '#2F8A34',
        800: '#38805F',
        900: '#2A6A2D',
    }
    const successDark = {
        50: '#2A6A2D',
        100: '#38805F',
        200: '#2F8A34',
        300: '#46994A',
        400: '#5FB664',
        500: '#48BB78',
        600: '#74CC78',
        700: '#96D99A',
        800: '#B1E2B3',
        900: '#C4E9C6',
    }

    const Colors =
        themeMode == 'dark'
            ? {
                  primary: primaryDark,
                  secondary: secondaryDark,
                  white: whiteDark,
                  gray: grayDark,
                  alarm: AlarmDark,
                  warning: warningDark,
                  success: successDark,
              }
            : {
                  primary: primaryLight,
                  secondary: secondaryLight,
                  white: whiteLight,
                  gray: grayLight,
                  alarm: AlarmLight,
                  warning: warningLight,
                  success: successLight,
              }
    return { Colors }
}

export default ColorPallet
