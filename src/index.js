import { render } from 'preact';
import getStore from './bundles';
import root from '@components/root';
import cache from '@common/cache';

const init = async () => {
  const cachedData = await cache.getAll();
  if (cachedData && process.env.NODE_ENV !== 'production') {
    console.log('starting with locally cache data:', cachedData);
  }
  return render(root(getStore(cachedData)), document.body);
};

init();
