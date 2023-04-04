import React from 'react';
import { ErrorContainer, ErrorName, ErrorMessage } from './ErrorComponent.style';

export interface IErrorComponent {
  name?: string;
  message?: string;
};

const ErrorComponent: React.FC<IErrorComponent> = ({ name, message }) => {
  return (
    <ErrorContainer role='alert'>
      <ErrorName>{name || "Error"}</ErrorName>
      <ErrorMessage>{message || "Something went wrong"}</ErrorMessage>
    </ErrorContainer>
  )
}

export default ErrorComponent;
