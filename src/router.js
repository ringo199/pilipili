import React from 'react';
import Home from './routes/home';
import { LocaleProvider } from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import 'moment/locale/zh-cn';
// import PropTypes from 'prop-types';
import dynamic from 'dva/dynamic';
import { Route, Switch, routerRedux } from 'dva/router';
// import App from './routes/app/App';

const { ConnectedRouter } = routerRedux;

const routes = [
  {
    // 首页(默认跳转)
    path: '/',
    models: () => [],
    component: () => import('./routes/homepage'),
  },
  {
    // 首页
    path: '/home',
    models: () => [],
    component: () => import('./routes/homepage'),
  },
  {
    // 播放页面
    path: '/pilipili/pv:videoID',
    models: () => [import('./models/videopage')],
    component: () => import('./routes/videopage'),
  },
]

const RouterConfig = ({ history, app }) => (
  <LocaleProvider locale={zh_CN}>
    <ConnectedRouter history={history} locale={zh_CN}>
      <Switch>
        <Route
          path="/"
          component={route => (
            <Home {...route}>
              <Switch>
                {
                  routes.map(({ path, ...dynamics }, key) => (
                    <Route
                      exact
                      key={`${path}${key}`}
                      path={path}
                      component={dynamic({ app, ...dynamics })}
                    />
                  ))
                }
                <Route path="*" exact render={() => <div>404</div>} />
              </Switch>
            </Home>
          )}
        />
          {/* {account.map(({ path, ...dynamics }) => (
            <Route
              exact
              key={path}
              path={path}
              component={dynamic({ app, ...dynamics })}
            />
          ))
        } */}
        {/* <Route
          path="/"
          component={route => (
            <App {...route}>
              <Switch>
                {
                  routes.map(({ path, ...dynamics }, key) => (
                    <Route
                      exact
                      key={`${path}${key}`}
                      path={path}
                      component={dynamic({ app, ...dynamics })}
                    />
                  ))
                }
              </Switch>
            </App>
          )}
        /> */}
        {/* <Redirect from="/temple" to="/temple/introduction" /> */}
        <Route path="/*" exact render={() => <div>404</div>} />
      </Switch>
    </ConnectedRouter>
  </LocaleProvider>
);


export default RouterConfig;
