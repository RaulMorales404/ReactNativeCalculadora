import { StyleSheet } from 'react-native';
import { sistem } from '../../theme/AppTheme';


export const styles = StyleSheet.create({
    btn: {
        justifyContent: 'center',
        alignItems: 'center',
        width: sistem('android') ? 80 : 80,
        borderRadius: 60,
        height: sistem('android') ? 80 : 80,
    },
});
