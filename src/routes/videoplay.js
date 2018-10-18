import React from 'react';
// import { connect } from 'dva';
import { Button } from 'antd';
// import PropTypes from 'prop-types';
import moment from 'moment';
import styles from './videobody.less';
import Xgplayer from 'xgplayer-react';

const config = props => ({
    id: 'pili',
    url: '/video/1.mp4',
    poster: '/img/1.jpg',
    pip: true,
    bullet: {
        switch: 'on', //开启'on',关闭'off'
        url: './danmu.json',
        method: 'get'
    },
});


const VideoPlay = props => {
    // const checksize = () => {

    // };
    
    // Xgplayer.install('checksize', checksize);
    return(
        <div className={styles.video_body} style={{ width: props.width, height: props.height }}>
            <Xgplayer config={config(props)} format={'mp4'} playerInit={Player => Player} />
            <div className={styles.video_body_danmulist}>
                弹幕列表<br/>
                <div>时间&emsp;弹幕内容&emsp;发送时间</div>
                {require('../../danmu.json').data.map(
                    item =>
                    <div>{moment(item.offset_time).format('mm:ss')}&emsp;{item.text}&emsp;{moment(item.create_time).format('MM-DD hh:mm')}</div>
                )}
            </div>
            <Button
                onClick={
                    () => {
                        props.onChangeWidth(null);
                        props.onChangeHeight('calc(100vh)');
                    }}
            >切换网页全屏
            </Button>
        </div>
    )}

export default VideoPlay;