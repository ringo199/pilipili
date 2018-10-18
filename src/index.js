import dva from 'dva';
// import createLoading from 'dva-loading';
import createHistory from 'history/createBrowserHistory';
import './index.css';

// Non changeable!!!
export const history = createHistory();
const onError = (error) => {
  console.error('You got error: ', error);
};
// 1. Initialize
const app = dva({ history, onError })

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example').default); 
// app.model(require('./models/force').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');

export const AppStore = app._store;
