import { Container } from './styles';
import P from 'prop-types';

export function App({ children }) {
  return <Container>{children}</Container>;
}

App.propTypes = {
  children: P.node.isRequired,
};
