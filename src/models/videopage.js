// import _ from 'lodash';
import * as api from '../services/videopage';

export default {
  namespace: 'videopage',
  state: {
    VideoInfo: {},
    danmuInfo: {},
    UPInfo: {},
    taglist: [],
  },
  reducers: {
    setVideoInfo(state, { payload }) {
      return { ...state, VideoInfo: payload };
    },
    setdanmuInfo(state, { payload }) {
      return { ...state, danmuInfo: payload };
    },
    setUPInfo(state, { payload }) {
      return { ...state, UPInfo: payload };
    },
    settaglist(state, { payload }) {
      return { ...state, taglist: payload };
    },
  },
  effects: {
    *clearRemote(__, { put }) {
        yield put({ type: 'setVideoInfo',  payload: {} });
        yield put({ type: 'setUPInfo',  payload: {} });
        yield put({ type: 'settaglist',  payload: [] });
    },
    *getVideoInfoRemote({ payload }, { call, put }) {
      const result = yield call(api.getVideoInfo, payload);
      if (result && result.status === 200) {
        yield put({
          type: 'setVideoInfo',
          payload: result.data,
        });
        yield put({
          type: 'getdanmuInfoRemote',
          payload: { videoID: result.data.id },
        });
        yield put({
          type: 'getUPInfoRemote',
          payload: { UPid: result.data.UPid },
        });
        yield put({
          type: 'gettaglistRemote',
          payload: { videoID: result.data.id },
        });
      }
      return result;
    },
    *getdanmuInfoRemote({ payload }, { call, put }) {
      const result = yield call(api.getdanmuInfo, payload);
      if (result && result.status === 200) {
        yield put({
          type: 'setdanmuInfo',
          payload: result.data,
        });
      }
      return result;
    },
    *getUPInfoRemote({ payload }, { call, put }) {
      const result = yield call(api.getUPInfo, payload);
      if (result && result.status === 200) {
        yield put({
          type: 'setUPInfo',
          payload: result.data,
        });
      }
      return result;
    },
    *gettaglistRemote({ payload }, { call, put }) {
      const result = yield call(api.gettaglist, payload);
      if (result && result.status === 200) {
        yield put({
          type: 'settaglist',
          payload: result.data,
        });
      }
      return result;
    },
  },
  subscriptions: {
  },
};
