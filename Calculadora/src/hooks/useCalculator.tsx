import { useRef, useState } from 'react';

enum Operator {
    sum, subtract, multiply, divide
}
export const useCalculator = () => {

    const [previousNumber, setPreviousNumber] = useState('0');
    const [number, setNumber] = useState('0');
    const lastOperation = useRef<Operator>();

    const cleanScreen = () => {
        setNumber('0');
        setPreviousNumber('0');
    };
    const btnPositiveNumber = () => {
        if (number.includes('-')) {
            setNumber(number.replace('-', ''));
        } else {
            setNumber('-' + number);
        }
    };
    const pasPreViousNumber = () => {
        //validar que no lleve un putno
        if (number.endsWith('.')) {
            setPreviousNumber(number.substring(0, number.length - 1));
            setNumber('0');
        } else {
            setPreviousNumber(number);
            setNumber('0');
        }

    };

    const btnDeleteLast = () => {
        if (number.length === 1 || (number.includes('-') && number.length === 2)) {
            setNumber('0');
        } else {
            setNumber(number.substring(0, number.length - 1));
        }

    };

    const btnDivide = () => {
        // divide
        pasPreViousNumber();
        lastOperation.current = Operator.divide;
    };
    const btnMultiply = () => {
        //  multiply
        pasPreViousNumber();
        lastOperation.current = Operator.multiply;
    };
    const btnSubtract = () => {
        // subtract
        pasPreViousNumber();
        lastOperation.current = Operator.subtract;
    };
    const btnSum = () => {
        // sum
        pasPreViousNumber();
        lastOperation.current = Operator.sum;
    };
    const doOperation = () => {
        const num1 = Number(number);
        const num2 = Number(previousNumber);
        if (number !== '0' && previousNumber !== '0') {
            switch (lastOperation.current) {
                case Operator.sum:
                    setNumber(String(num1 + num2));
                    break;
                case Operator.divide:
                    setNumber(String(num2 / num1));
                    break;
                case Operator.multiply:
                    setNumber(String(num1 * num2));
                    break;
                case Operator.subtract:
                    setNumber(String(num2 - num1));
                    break;
                default:
                    setNumber('0');
                    break;
            }
        }

        setPreviousNumber('0');
    };

    const getNumber = (textNumber: string) => {
        if (number.length < 19) {
            //no aceptar doble punto ...
            if (number.includes('.') && textNumber === '.') return;
            if (number.startsWith('0') || number.startsWith('-0')) {
                //Punto decimal 
                if (textNumber === '.') {
                    setNumber(number + textNumber);
                    //Evaluar si hay otro cero y hay un punto
                } else if (textNumber === '0' && number.includes('.')) {
                    setNumber(number + textNumber);
                    //Evaluar si es diferente de cero, y no tiene un punto
                } else if (textNumber !== '0' && !number.includes('.')) {
                    setNumber(textNumber);
                    // Evitar el 000.0
                } else if (textNumber === '0' && !number.includes('.')) {
                    setNumber(number);
                } else {
                    setNumber(number + textNumber);
                }

            } else {
                setNumber(number + textNumber);
            }
        }
    };

    return {
        previousNumber,
        number,
        btnPositiveNumber,
        btnDeleteLast,
        getNumber,
        btnMultiply,
        btnSubtract,
        btnSum,
        btnDivide,
        doOperation,
        cleanScreen,
    };
};
