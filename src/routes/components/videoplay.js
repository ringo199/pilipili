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
    url: props.VideoInfo.videoplay.url,
    poster: props.VideoInfo.videoplay.poster,
    width: 1192,
    height: 750,
    bullet: {
        switch: 'on', //开启'on',关闭'off'
        url: props.danmuInfo.url,
        method: 'get'
    },
    //视频加载页logo
    enterLogo:props.VideoInfo.videoplay.enterLogo,
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
    console.log('danmuInfo', props.danmuInfo);
    return(
        <div className={styles.video_body}>
            {props.VideoInfo.videoplay && props.danmuInfo.url &&
            <Xgplayer config={config(props)} format={'mp4'} playerInit={Player => Player} />}
            <div className={styles.video_body_danmulist}>
                <div className={styles.video_body_danmulist_head}>
                    <b style={{ fontSize: '20px' }}>1</b>人正在看，{props.danmuInfo.num}条弹幕
                </div>
                <Tabs defaultActiveKey="2">
                    <TabPane tab="弹幕列表" key="2">
                        {props.danmuInfo.url &&
                        <Table
                            size="small"
                            columns={columns}
                            pagination={false}
                            className={styles.video_body_danmulist_danmucontent}
                            dataSource={transformList(props.danmuInfo.data, 'danmaku_id')}
                        />}
                    </TabPane>
                </Tabs>
            </div>
        </div>
    )}

export default VideoPlay;