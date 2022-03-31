import { $, $$ } from './utils';

interface Router {
  path: string;
  component: Element;
}

const nav = document.querySelector('.nav');
const baseURL = '/javascript-vendingmachine';

nav.addEventListener('click', (e: MouseEvent) => {
  historyRouterPush((e.target as HTMLElement).getAttribute('route'));
});

const historyRouterPush = (pathname: string) => {
  history.pushState({ pathname }, '', pathname);
  render(pathname);
};

const render = (path: string) => {
  $$('.focus-button').forEach((button) => button.classList.remove('focus-button'));
  $(`[route='${path}']`, nav)?.classList.add('focus-button');

  const cur = routers.find((route) => route.path === path)?.component ?? $('product-management');
  const prevs = routers.filter((route) => route.path !== path);

  cur.classList.remove('hidden');
  prevs.forEach((p: Router) => p.component.classList.add('hidden'));
};

const routers: Router[] = [
  { path: baseURL + '/', component: $('product-management') },
  { path: baseURL + '/charge', component: $('charge-tab') },
];

window.addEventListener('popstate', function () {
  render(window.location.pathname);
});

if (window.location.pathname === '/') {
  window.location.pathname = baseURL;
}

render(window.location.pathname);