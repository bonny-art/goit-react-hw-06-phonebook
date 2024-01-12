import styled from '@emotion/styled';

export const Contact = styled.li`
  display: grid;
  grid-template-columns: 8fr 5fr 1fr;
  align-items: center;

  padding: ${props => props.theme.spacing(4)} ${props => props.theme.spacing(6)};
  overflow: hidden;
  border-radius: ${props => props.theme.spacing(1)};

  background-color: ${props => props.theme.colors.gray};

  transition-property: transform, box-shadow;
  transition-duration: 0.25s;
  transition-timing-function: ${props => props.theme.animation.cubicBezier};

  &:hover {
    transform: scale(1.02);
    box-shadow: ${props => props.theme.shadows.small};
  }
`;

export const Name = styled.p`
  color: ${props => props.theme.colors.white};
  font-weight: 600;
  font-size: ${props => props.theme.fontSizes.small};
  letter-spacing: ${props => props.theme.spacing(0.25)};
`;

export const Number = styled.p`
  color: ${props => props.theme.colors.white};
  font-weight: 600;
  font-size: ${props => props.theme.fontSizes.small};
  letter-spacing: ${props => props.theme.spacing(0.25)};
`;

export const DeleteButton = styled.button`
  justify-self: end;

  width: ${props => props.theme.spacing(6)};
  height: ${props => props.theme.spacing(6)};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.light};

  cursor: pointer;

  color: ${props => props.theme.colors.black};
  font-weight: 600;
  font-size: ${props => props.theme.fontSizes.medium};
`;
