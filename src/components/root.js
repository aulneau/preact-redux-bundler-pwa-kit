import { h } from 'preact';
import { Provider } from 'redux-bundler-preact';
import { injectGlobal } from 'preact-emotion';
import { normalize } from 'polished';
import App from './app';

injectGlobal`
html, body{
font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif
}
  ${normalize()};
`;
const Root = (store) => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default Root;
