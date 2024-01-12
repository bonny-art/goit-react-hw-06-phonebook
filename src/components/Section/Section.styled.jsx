import styled from '@emotion/styled';

export const Section = styled.div`
  width: ${props => props.theme.spacing(200)};
  margin-left: auto;
  margin-right: auto;

  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing(3)};
  padding-top: ${props => props.theme.spacing(5)};
`;

export const Header = styled.h1`
  padding: ${props => props.theme.spacing(5)};
  text-align: center;

  color: ${props => props.theme.colors.accent2};
  font-weight: 600;
  font-size: ${props => props.theme.fontSizes.large};
  letter-spacing: ${props => props.theme.spacing(0.25)};
`;

export const Title = styled.h1`
  padding: ${props => props.theme.spacing(5)};
  text-align: center;

  color: ${props => props.theme.colors.accent2};
  font-weight: 600;
  font-size: ${props => props.theme.fontSizes.medium};
  letter-spacing: ${props => props.theme.spacing(0.25)};
`;
