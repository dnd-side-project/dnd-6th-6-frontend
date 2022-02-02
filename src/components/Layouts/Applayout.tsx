import styled from 'styled-components';

const Container = styled.div`
  padding: 0 20px;
`;

const AppLayout: React.FC = (props) => {
  return <Container>{props.children}</Container>;
};

export default AppLayout;
