import React from 'react';
import ReactDOM from 'react-dom';
import Loadable from 'react-loadable';
import Root from 'Root';

// import App from 'components/App';
const LoadableComponent = Loadable({
  loader: () => import('components/App'),
  loading() {
    return <div>Loading...</div>;
  },
  delay: 900
});

ReactDOM.render(
  <Root>
    <LoadableComponent />
  </Root>,
  document.querySelector('#root')
);
