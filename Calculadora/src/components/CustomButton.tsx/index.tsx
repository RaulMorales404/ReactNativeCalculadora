import React from 'react';
import { Text, TouchableHighlight } from 'react-native';
import { styles } from './style';
import { getColorOpacisty } from '../../theme/AppTheme';
type Props = {
    title: string,
    bg: Object,
    bgText: Object,
    action: (textNumber:string) => void
}
export const CustomButton = ({ bgText, title, bg, action }: Props) => {
    return (
        <TouchableHighlight onPress={() => action(title)} style={[styles.btn, bg]}
            underlayColor={getColorOpacisty(bg)}
        >
            <Text style={bgText}>{title}</Text>
        </TouchableHighlight>
    );
};

export default CustomButton;
