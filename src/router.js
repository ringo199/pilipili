import React from 'react';
import Home from './routes/home';
import Homepage from './routes/homepage';
import VideoPage from './routes/videopage';
import { LocaleProvider } from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import 'moment/locale/zh-cn';
// import PropTypes from 'prop-types';
// import dynamic from 'dva/dynamic';
import { Route, Switch, routerRedux } from 'dva/router';
// import App from './routes/app/App';

const { ConnectedRouter } = routerRedux;

const RouterConfig = ({ history }) => (
  <LocaleProvider locale={zh_CN}>
    <ConnectedRouter history={history} locale={zh_CN}>
      <Switch>
        <Route
          path="/"
          component={route => (
            <Home {...route}>
              <Switch>
                <Route path="/" exact component={Homepage} />
                <Route path="/home" exact component={Homepage} />
                <Route path="/pilipili" exact component={VideoPage} />
                <Route path="/*" exact render={() => <div>404</div>} />
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
        <Route path="*" exact render={() => <div>404</div>} />
      </Switch>
    </ConnectedRouter>
  </LocaleProvider>
);


export default RouterConfig;
