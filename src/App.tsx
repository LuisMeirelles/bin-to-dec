import React, { ChangeEvent } from 'react';
import { useState } from 'react';
import GlobalStyle from './GlobalStyle';
import { Container, Input } from './styles';

const App: React.FC = () => {
    const [binNumber, setBinNumber] = useState('');
    const [decNumber, setDecNumber] = useState(0);

    const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
        const input = evt.target.value;

        const formattedInput = input
            .replace(/[^1,0]/g, '')
            .replace(/(\d{8})/g, '$1 ')
            .replace(/\s+/g, ' ')
            .replace(/^\s+|\s+$/g, '');

        setBinNumber(formattedInput);


        let decimal = 0;

        for (let i = 1; i <= formattedInput.length; i++) {
            const digit = Number(formattedInput[i - 1]);
            const exponent = formattedInput.length - i;

            decimal += digit * Math.pow(2, exponent);
        }

        setDecNumber(decimal);
    };

    const handleOnInvalid = () => { };

    return (
        <>
            <GlobalStyle />

            <Container>
                <Input
                    type="text"
                    placeholder="Digite o número em binário"
                    pattern="([0,1]*\s*)+"
                    onChange={handleChange}
                    value={binNumber}
                    onInvalid={handleOnInvalid}
                />

                <p>Decimal: {decNumber}</p>
            </Container>
        </>
    );
};

export default App;
