import { StyledTitle } from './TitleStyled';

export interface IAtomTitleProps {
  fontSize?: string;
  fontWeight?: string;
  color?: string;
  mb?: string;
}

const Title: React.FC<IAtomTitleProps> = (props) => {
  return <StyledTitle {...props}>{props.children}</StyledTitle>;
};

export default Title;
