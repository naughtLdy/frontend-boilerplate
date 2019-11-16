import React from 'react';
import styled from 'styled-components';
import TextBoxComponent from '../atoms/TextBox';
import ButtonComponent from '../atoms/Button';

interface FormProps {
  input: string;
  onFormSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onInputChange: (e: React.FormEvent<HTMLInputElement>) => void;
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const TextBoxComponentStyled = styled(TextBoxComponent)`
  flex: 1;
  margin-right: 0.5rem;
  width: 100%;
`;

const InputForm = (props: FormProps) => (
  <form onSubmit={props.onFormSubmit}>
    <Wrapper>
      <TextBoxComponentStyled
        value={props.input}
        onChange={props.onInputChange}
      />
      <ButtonComponent type="submit" {...props}>
        Add Todo
      </ButtonComponent>
    </Wrapper>
  </form>
);

export default InputForm;
