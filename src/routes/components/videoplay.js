import React from 'react';
// import { connect } from 'dva';
import { Table, Tabs } from 'antd';
// import PropTypes from 'prop-types';
import _ from 'lodash';
import moment from 'moment';
import styles from '../less/videobody.less';
import Xgplayer from 'xgplayer-react';

const { TabPane } = Tabs;

const config = props => ({
    id: 'pili',
    url: '/video/1.mp4',
    poster: '/img/1.jpg',
    // pip: true,
    width: 1192,
    height: 750,
    bullet: {
        switch: 'on', //开启'on',关闭'off'
        url: './danmu.json',
        method: 'get'
    },
    enterLogo:{ //视频加载页logo
      url: '/img/logo.jpg',
      width: 231,
      height: 115,
    },
});

const columns = [{
    title: '时间',
    dataIndex: 'offset_time',
    key: 'offset_time',
    width: 80,
    render: item => moment(item).format('mm:ss'),
  }, {
    title: '弹幕内容',
    dataIndex: 'text',
    key: 'text',
    // render: text => <span style={{ whiteSpace: 'nowrap' }}>{text}</span>
    // render: text => <div className={styles.video_body_danmulist_danmucontent_text}>{text}</div>
  }, {
    title: '发送时间',
    dataIndex: 'create_time',
    key: 'create_time',
    width: 120,
    render: item => moment(item).format('MM-DD hh:mm'),
  }];

const transformList = (list, transstr) => {
    if (_.isEmpty(list)) return [];
    const stringList = JSON.stringify(list);
    const replacelist = stringList.replace(new RegExp(transstr, 'g'), 'key');
    const viewList = JSON.parse(replacelist);
    return _.compact(viewList);
  }
const VideoPlay = props => {
    // const checksize = () => {

    // };

    // Xgplayer.install('checksize', checksize);
    return(
        <div className={styles.video_body}>
            <Xgplayer config={config(props)} format={'mp4'} playerInit={Player => Player} />
            <div className={styles.video_body_danmulist}>
            <div className={styles.video_body_danmulist_head}>
                <b style={{ fontSize: '20px' }}>1</b>人正在看，63条弹幕
            </div>
            <Tabs defaultActiveKey="2">
                <TabPane tab="弹幕列表" key="2">
                    <Table
                        size="small"
                        columns={columns}
                        pagination={false}
                        className={styles.video_body_danmulist_danmucontent}
                        dataSource={transformList(require('../../../danmu.json').data, 'danmaku_id')}
                    />
                </TabPane>
            </Tabs>
                
                {/* <div>时间&emsp;弹幕内容&emsp;发送时间</div>
                {require('../../../danmu.json').data.map(
                    item =>
                    <div>{moment(item.offset_time).format('mm:ss')}&emsp;{item.text}&emsp;{moment(item.create_time).format('MM-DD hh:mm')}</div>
                )} */}
            </div>
        </div>
    )}

export default VideoPlay;