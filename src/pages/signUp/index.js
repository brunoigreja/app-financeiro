import React from 'react';
import { Platform } from 'react-native';

import { 
  Background, 
  Container, 
  AreaInput, 
  Input, 
  SubmitBottom, 
  SubmitText 
} from '../signin/styles';

export default function SignUp() {
  return (
    <Background>
      <Container
        behavior={Platform.OS === 'ios' ? 'padding' : ''}
        enabled
      >
        <AreaInput>
          <Input placeholder="Nome" />
        </AreaInput>

        <AreaInput>
          <Input
            placeholder="Seu email"
          />
        </AreaInput>

        <AreaInput>
          <Input
            placeholder="Sua senha"
            secureTextEntry={true}
          />
        </AreaInput>

        <SubmitBottom activeOpacity={0.8}>
          <SubmitText>Cadastrar</SubmitText>
        </SubmitBottom>
      </Container>
    </Background>
  );
}
