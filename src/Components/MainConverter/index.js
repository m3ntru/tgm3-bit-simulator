import React, { Component } from 'react'
import ResultList from '../ResultList'
import Converter from '../../model/Converter'
import logoCgua from '../../img/tgm3Cgua.png';
import logoOD from '../../img/tgm3OD.png';
import logoAmon from '../../img/tgm3AMON.png';
import ONONON from '../../img/ONONON.gif';
import Katsuya from '../../img/Katsuya.jpg';
import HappyBirth from '../../HB.mp3';
import noSoul from '../../noSoul.mp3';
import noSoulPic from '../../img/noSoul.jpg';
import { Container, Typography, Card, CardContent, Button, TextField, Paper, FormControl, InputLabel, Select, MenuItem, Switch} from '@material-ui/core/';
import Example from '../../example.json'
import ReactPlayer from 'react-player'
import Konami from 'react-konami-code';
import AudioPlayer from 'react-audio-player';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import PhotoIcon from '@material-ui/icons/Photo';
import YouTubeIcon from '@material-ui/icons/YouTube';
import AudiotrackIcon from '@material-ui/icons/Audiotrack';


class MainConverter extends Component {
    state = {
        text: "",
        length: 0,
        maxLength: 500,
        result: [],
        logo: logoCgua,
        example: 0,
        player: false,
        playerLink: '',
        HappyBirth: false,
        noSoul: false,
        donateType: false,
        isAutoPlay: "",
    }

    getLength = (type, msg) => {
        var l = msg.match(/[^ -~]/g);
        var chars = msg.length + (l ? l.length : 0);
        return (type) ? chars : msg.length;
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    handleTextChange = () => event => {
        var msg = event.target.value;
        this.setState({
            text: msg,
            length: this.getLength(this.state.donateType, msg)
        });
    };

    handleSwitchChange = () => event => {
        this.setState({
            donateType: event.target.checked,
            result: [],
            player: false,
            length: this.getLength(event.target.checked, this.state.text),
            maxLength: (event.target.checked)? 100 : 500
        });
    };

    handlePlayerSwitchChange = () => event => {
        this.setState({
            isAutoPlay: event.target.checked
        });
    };

    handleLoadClick = () => {
        var exampleText = Example.case[this.state.example].origin;
        var result = Converter.formatText(exampleText, [".", "!", "?", ":", ";", ",", " "], 90);
        this.setState({
            text: exampleText,
            logo: logoCgua,
            player: true,
            playerLink: Example.case[this.state.example].link,
            result,
            length: this.getLength(this.state.donateType, exampleText),
            maxLength: (this.state.donateType)? 100 : 500
        })

    }

    handleConverterClick = () => {
        var result = [];
        if (this.state.text !== "") {
            if (this.state.text.toLowerCase() === "od9000") {
                this.setState({
                    player: false,
                    logo: logoOD,
                    text: '<message deleted>',
                    result: ['O什麼O啊，上一個O的，墳頭的草已經起飛了87cm囉。(๑′ܫ`)/ http://i.imgur.com/dvPGYeA.jpg https://www.twitch.tv/tetristhegrandmaster3/v/66031829 [warning]']
                })
                console.log('%c  ', [
                    'font-size: 900px;',
                    'background: url(http://i.imgur.com/dvPGYeA.jpg) no-repeat;'
                ].join(' '));
            }
            else if (this.state.donateType) {
                result = [this.state.text];
                this.setState({
                    player: false,
                    logo: logoCgua,
                    result
                })
            }
            else {
                result = Converter.formatText(this.state.text, [".", "!", "?", ":", ";", ",", " "], 90);
                this.setState({
                    player: false,
                    logo: logoCgua,
                    result
                })
            }
        }
    }

    handleAprilFoolClick = () => {
        var result = [];
        result = Converter.formatText(Example.noSoul, [".", "!", "?", ":", ";", ",", " "], 90);
        result[0] = "Cheer8787";
        this.setState({
            text: "骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯",
            player: true,
            playerLink: "https://youtu.be/yozCG5WmWzg",
            logo: noSoulPic,
            noSoul: true,
            result
        })
    }

    easterEgg = () => {
        var today = new Date();
        this.setState({
            text: (today.getMonth() + 1) + "月" + today.getDate() + "日是我們的實況主———吳彩學的生日，記得跟彩學說聲生日快樂喔！ https://clips.twitch.tv/ClumsyProudShrewHeyGuys",
            logo: ONONON,
            HappyBirth: true
        })
        console.log("フンフン……こっちにいい匂いが……");
        console.log("誰で実験しよっかな～？");
        console.log('%c   ', [
            'font-size:400px;',
            'background: url(https://m3ntru-tts.herokuapp.com/api/TTS/mitsuketa?day=' + today.getDay() + ') no-repeat;'
        ].join(' '));
    }

    render() {
        return (
            <div style={{ margin: '20px' }}>
                <Container style={{ backgroundColor: '#e0f2f1', margin: '12px auto', padding: '0px' }} >
                    <div style={{ backgroundColor: '#009688', padding: '15px' }}>
                        <img src={this.state.logo} alt='logo' />
                    </div>
                    <div>
                        <Card style={{ margin: '20px' }}>
                            <CardContent>
                                <Typography variant='subtitle2' component='p'>
                                    小奇點斷句模擬器 By M3ntru(zatd39)<br />
                                1. <a href='https://hackmd.io/@M3ntru/tgm3cheer' target='_blank' rel="noopener noreferrer">
                                        軍火製作說明文件</a><br />
                                2. <a href='https://www.chineseconverter.com/zh-tw/convert/zhuyin' target='_blank' rel="noopener noreferrer">
                                        中文轉注音轉換工具</a><br />
                                3.現在可以直接輸入Bits的觸發字(cheer)了，會將所有Bits統一放在第一列。<br />
                                4.試聽功能用的API架在免費空間(heroku)，有時試聽讀取緩慢為正常現象。<br />
                                5.斷句後方的長度判斷工具，請先將該斷句撥放完成才能判斷。 <br />
                                6.整段試聽功能緩慢搬移中 <br />
                                7.網站有任何問題，請不要找彩學，請直接聯繫
                                <a href='https://www.plurk.com/zatd39' target='_blank' rel="noopener noreferrer">
                                作者<img src={logoAmon} alt='logo' style={{ height: '28px', width: '28px', verticalAlign: 'text-bottom' }} /></a><br/>
                                -----------------------------------------------------------<br/>  
                                巴包採購有賺有賠[
                                <a href='https://imgur.com/a/QC5QM5X' target='_blank' rel="noopener noreferrer"><TrendingUpIcon style={{ fontSize: 18}} />走勢</a>]<br/>
                                塞包前請詳閱公開說明[
                                <a href='https://imgur.com/a/69PQR3q' target='_blank' rel="noopener noreferrer"><PhotoIcon style={{ fontSize: 18}} />圖片</a> 
                                <a href='https://youtu.be/wohlMiTqamk' target='_blank' rel="noopener noreferrer"><YouTubeIcon style={{ fontSize: 18}} />影片</a>]<br/>
                                -----------------------------------------------------------<br/>         
                                網站更新時間： 2021/07/21<br />
                                </Typography>
                            </CardContent>
                        </Card>
                        <div>
                            <Typography variant='caption' component='p'>
                                小奇點
                            <Switch
                                    color="default"
                                    onChange={this.handleSwitchChange()}
                                />
                            歐付寶
                        </Typography>
                        </div>

                        {(this.state.donateType) ?
                            ''
                            :
                            <div>
                                <FormControl>
                                    <InputLabel id="demo-simple-select-label">範例</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={this.state.example}
                                        onChange={this.handleChange('example')}
                                    >
                                        {Example.case.map((data, index) => (
                                            <MenuItem key={data.id} value={data.id}>{data.title}</MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                                <Button
                                    size="small"
                                    variant='contained'
                                    onClick={this.handleLoadClick}
                                    style={{ color: '#007264', backgroundColor: '#f3f5f5', margin: '20px' }}
                                >載入</Button>
                            </div>
                        }
                        <div>

                            {(this.state.HappyBirth) ?
                                <AudioPlayer
                                    src={HappyBirth}
                                    title={"骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯"}
                                    autoPlay
                                    controls
                                />
                            :''}  
                            {(this.state.noSoul) ?
                                <div>
                                    <div>
                                        <AudioPlayer
                                            src={noSoul}
                                            title={"為什麼我現在要放一首歌叫Too Fast，齁"}
                                            autoPlay
                                            controls
                                        />
                                    </div>
                                   <a href='https://open.spotify.com/album/46aOOtkWu7vNte9O5wRWqY?' target='_blank' rel="noopener noreferrer"><AudiotrackIcon style={{ fontSize: 18}} /></a>  
                                </div>
                            :''}  

                        </div>
                        <div style={{ padding: '20px' }}>
                            <TextField component={Paper}
                                multiline
                                variant='outlined'
                                rows={7}
                                label='Message'
                                value={this.state.text}
                                style={{ width: '100%' }}
                                onChange={this.handleTextChange()}
                            />
                        </div>
                        <Typography variant='caption' component='p' style={{ color: (this.state.maxLength - this.state.length < 0)?'red':'black'}}>
                            {this.state.maxLength - this.state.length} / {this.state.maxLength}
                        </Typography>
                        <div>
                            <Typography variant='caption' component='p'>
                                　　　　不撥放
                            <Switch
                                    color="default"
                                    onChange={this.handlePlayerSwitchChange()}
                                />
                            全部撥放+靜音
                        </Typography>
                        <Typography variant='caption' component='p'>
                            (撥放器套件有點原生的問題待解決，要是轉換時沒有全部靜音，請來回切換開關即可)
                        </Typography>
                        </div>
                        <Button
                            variant='contained'
                            onClick={this.handleConverterClick}
                            style={{ color: 'white', backgroundColor: '#009688', margin: '20px' }}
                        >轉換</Button>

                        {(this.state.HappyBirth) ?
                            <Button
                            variant='contained'
                            onClick={this.handleAprilFoolClick}
                            style={{ color: 'white', backgroundColor: '#009688', margin: '20px' }}
                            >整段試聽</Button>
                        :''} 


                        {(this.state.player) ?
                            <ReactPlayer
                                style={{ margin: 'auto', padding: '20px', maxWidth: '600px' }}
                                url={this.state.playerLink}
                                controls={true}
                                width={'auto'}
                            /> :
                            ''}

                        <ResultList result={this.state.result} type={this.state.donateType} isAutoPlay={this.state.isAutoPlay} />
                        <Konami action={this.easterEgg} />
                    </div>
                </Container>
            </div>
        )
    }
}

export default MainConverter