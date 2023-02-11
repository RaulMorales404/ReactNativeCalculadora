import React  from 'react';
import { View, Text } from 'react-native';
import CustomButton from '../../components/CustomButton.tsx';
import { useCalculator } from '../../hooks/useCalculator';
import { styles } from '../../theme/AppTheme';


export const Calculadora = () => {
    const { previousNumber,
        number,
        btnPositiveNumber,
        btnDeleteLast,
        getNumber,
        btnMultiply,
        btnSubtract,
        btnSum,
        btnDivide,
        doOperation,
        cleanScreen, } = useCalculator();

    return (
        <View style={styles.calculadoraContainer}>
            <View style={styles.secctionResult}>
                <Text style={styles.textResultSmall}> {previousNumber !== '0' && previousNumber}</Text>
                <Text style={styles.textResult}
                    numberOfLines={1}
                    adjustsFontSizeToFit

                > {number} </Text>
            </View>
            <View style={styles.sectionButtons}>
                <View style={styles.direcctionButtons}>
                    <CustomButton action={cleanScreen} bg={styles.gr} bgText={styles.textBalck} title="C" />
                    <CustomButton action={btnPositiveNumber} bg={styles.gr} bgText={styles.textBalck} title="+/-" />
                    <CustomButton action={btnDeleteLast} bg={styles.gr} bgText={styles.textBalck} title="del" />
                    <CustomButton action={btnDivide} bg={styles.or} bgText={styles.textWhite} title="/" />
                </View>
                <View style={styles.direcctionButtons}>
                    <CustomButton action={getNumber} bg={styles.bl} bgText={styles.textWhite} title="7" />
                    <CustomButton action={getNumber} bg={styles.bl} bgText={styles.textWhite} title="8" />
                    <CustomButton action={getNumber} bg={styles.bl} bgText={styles.textWhite} title="9" />
                    <CustomButton action={btnMultiply} bg={styles.or} bgText={styles.textWhite} title="x" />
                </View>
                <View style={styles.direcctionButtons}>
                    <CustomButton action={getNumber} bg={styles.bl} bgText={styles.textWhite} title="4" />
                    <CustomButton action={getNumber} bg={styles.bl} bgText={styles.textWhite} title="5" />
                    <CustomButton action={getNumber} bg={styles.bl} bgText={styles.textWhite} title="6" />
                    <CustomButton action={btnSubtract} bg={styles.or} bgText={styles.textWhite} title="-" />
                </View>
                <View style={styles.direcctionButtons}>
                    <CustomButton action={getNumber} bg={styles.bl} bgText={styles.textWhite} title="1" />
                    <CustomButton action={getNumber} bg={styles.bl} bgText={styles.textWhite} title="2" />
                    <CustomButton action={getNumber} bg={styles.bl} bgText={styles.textWhite} title="3" />
                    <CustomButton action={btnSum} bg={styles.or} bgText={styles.textWhite} title="+" />
                </View>
                <View style={styles.direcctionButtons}>
                    <CustomButton action={getNumber} bg={styles.blLg} bgText={styles.textBalckCe} title="0" />
                    <CustomButton action={getNumber} bg={styles.bl} bgText={styles.textWhite} title="." />
                    <CustomButton action={doOperation} bg={styles.or} bgText={styles.textWhite} title="=" />
                </View>


            </View>

        </View>
    );
};
export default Calculadora;
