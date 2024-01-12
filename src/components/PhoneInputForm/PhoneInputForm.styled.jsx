import styled from '@emotion/styled';
import { Form, Field } from 'formik';

export const InputFormContainer = styled(Form)`
  background-color: ${props => props.theme.colors.black};
  border-radius: ${props => props.theme.spacing(1.5)};

  padding-top: ${props => props.theme.spacing(10)};
  padding-bottom: ${props => props.theme.spacing(10)};
  padding-left: ${props => props.theme.spacing(30)};
  padding-right: ${props => props.theme.spacing(30)};

  display: flex;
  flex-direction: column;
  row-gap: ${props => props.theme.spacing(0.5)};
`;

export const FormField = styled.label`
  position: relative;
  display: grid;
  grid-template-columns: ${props => props.theme.spacing(20)} 5fr;
  align-items: center;

  padding: ${props => props.theme.spacing(4)} ${props => props.theme.spacing(6)};

  border-radius: ${props => props.theme.spacing(1)};

  color: ${props => props.theme.colors.white};
  font-weight: 600;
  font-size: ${props => props.theme.fontSizes.small};
  letter-spacing: ${props => props.theme.spacing(0.25)};

  background-color: ${props => props.theme.colors.gray};
`;

export const FormInput = styled(Field)`
  width: 100%;
  padding: ${props => props.theme.spacing(1)} ${props => props.theme.spacing(2)};
  border-radius: ${props => props.theme.spacing(1)};
  border: none;

  color: ${props => props.theme.colors.light};
  font-weight: 600;
  font-size: ${props => props.theme.fontSizes.small};
  letter-spacing: ${props => props.theme.spacing(0.25)};
  line-height: inherit;

  transition-property: color;
  transition-duration: 0.25s;
  transition-timing-function: ${props => props.theme.animation.cubicBezier};

  background-color: ${props => props.theme.colors.gray};

  &:hover {
    color: ${props => props.theme.colors.white};

    &::placeholder {
      color: ${props => props.theme.colors.accent2};
    }
  }

  &:focus-visible {
    outline: none;
    color: ${props => props.theme.colors.white};
  }

  &::placeholder {
    color: ${props => props.theme.colors.accent1};
  }
`;

export const FormButton = styled.button`
  padding: ${props => props.theme.spacing(3)} ${props => props.theme.spacing(5)};

  border-radius: ${props => props.theme.spacing(1)};

  color: ${props => props.theme.colors.accent1};
  font-weight: 600;
  font-size: ${props => props.theme.fontSizes.small};
  letter-spacing: ${props => props.theme.spacing(0.25)};

  background-color: ${props => props.theme.colors.gray};

  &:hover {
    color: ${props => props.theme.colors.accent2};
  }
`;

export const ErrorMessageStyled = styled.button`
  position: absolute;
  top: ${props => props.theme.spacing(2.5)};
  right: ${props => props.theme.spacing(2.5)};

  padding: ${props => props.theme.spacing(3)} ${props => props.theme.spacing(5)};

  border: ${props => props.theme.spacing(0.25)} solid
    ${props => props.theme.colors.light};
  border-radius: ${props => props.theme.spacing(1)};

  color: ${props => props.theme.colors.accent2};
  font-weight: 600;
  font-size: ${props => props.theme.fontSizes.small};
  letter-spacing: ${props => props.theme.spacing(0.25)};

  background-color: ${props => props.theme.colors.dark};
`;
