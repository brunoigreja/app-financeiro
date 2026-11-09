import React from 'react';
import { View, Text } from 'react-native';

import { Background } from './styles';
import { AppContainer } from 'react-native/unstable-internals-do-not-use';

export default function SignIn() {
    return (
        <Background>
            <AppContainer>
                <Logo>
                    source={require('../../assets/Logo.png')}
                </Logo>
            </AppContainer>
        </Background>
    )
}