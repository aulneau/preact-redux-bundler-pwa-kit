import { h } from 'preact';
import { connect } from 'redux-bundler-preact';
import navHelper from 'internal-nav-helper';
import { Box } from '@components/primitives';

const App = ({ doUpdateUrl, route }) => {
  const Page = route;
  return (
    <Box onClick={navHelper(doUpdateUrl)}>
      <Page />
    </Box>
  );
};

export default connect(
  'selectRoute',
  'doUpdateUrl',
  App,
);
