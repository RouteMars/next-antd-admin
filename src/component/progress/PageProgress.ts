import { Router } from 'next/router';

import NProgress from 'nprogress';

NProgress.configure({ showSpinner: false });

const init = () => {
  Router.events.on('routeChangeStart', (url) => {
    NProgress.start();
  });
  Router.events.on('routeChangeComplete', (url) => {
    NProgress.done(false);
  });
  Router.events.on('routeChangeError', (url) => {
    NProgress.done(false);
  });
};

export default { init };
