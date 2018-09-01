import { composeBundles, createCacheBundle } from 'redux-bundler';
import routes from './routes';
import cache from '../common/cache';

export default composeBundles(routes, createCacheBundle(cache.set));
