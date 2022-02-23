import styled from 'styled-components';

const Container = styled.div`
  padding: 18px 20px 36px;
  height: 100vh;
`;

const AppLayout: React.FC = (props) => {
  return <Container>{props.children}</Container>;
};

export default AppLayout;
