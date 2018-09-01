import { createRouteBundle } from 'redux-bundler';
import HomePage from '../screens/home';

export default createRouteBundle({
  '/': HomePage,
});
