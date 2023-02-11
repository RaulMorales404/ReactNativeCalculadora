import { Platform, StyleSheet } from 'react-native';

export const sistem = (os: 'ios' | 'android') => {
    return Platform.OS === os;
}

export const getColorOpacisty = (colors: any): string | undefined => {
    if (colors.backgroundColor === '#eb7600') {
        return '#ec9640';
    } else if (colors.backgroundColor === '#ee8217') {
        return '#f09e4c';
    }
    else if (colors.backgroundColor === '#9b9b9b') {
        return '#c9c9c9';
    } else if (colors.backgroundColor === '#333333') {
        return '#787878';
    }
};
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
    calculadoraContainer: {
        flex: 1,
    },
    secctionResult: {
        justifyContent: 'flex-end',
        flex: 4,
    },
    direcctionButtons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 10,
    },
    sectionButtons: {
        flex: 6,
        padding: 10,
        margin: 10,
    },
    textResultSmall: {
        color: '#a19d9d',
        fontSize: 30,
        textAlign: 'right',
    },
    textResult: {
        color: 'white',
        fontSize: 60,
        textAlign: 'right',
    },
    bl: {
        backgroundColor: '#333333',
    },
    blLg: {
        backgroundColor: '#333333',
        width: sistem('android') ? 176 : 175,
        borderRadius: sistem('android') ? 80 : 80,
    },
    or: {
        backgroundColor: sistem('ios') ? '#eb7600' : '#ee8217',
    },
    gr: {
        backgroundColor: '#9b9b9b',
    },
    textBalckCe: {
        fontSize: 30,
        color: 'white',
        left: sistem('android') ? -53 : -43,
    },
    textBalck: {
        fontSize: 30,
        color: 'black',
    },
    textWhite: {
        fontSize: 30,
        color: 'white',
    },
});
