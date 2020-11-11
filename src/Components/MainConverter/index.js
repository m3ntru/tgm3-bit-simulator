import React, { Component } from 'react'
import ResultList from '../ResultList'
import Converter from '../../model/Converter'
import logoCgua from '../../img/tgm3Cgua.png';
import logoOD from '../../img/tgm3OD.png';
import logoAmon from '../../img/tgm3AMON.png';
import ONONON from '../../img/ONONON.gif';
import HappyBirth from '../../HB.mp3';
import { Container, Typography, Card, CardContent, Button, TextField, Paper, FormControl, InputLabel, Select, MenuItem, Switch} from '@material-ui/core/';
import Example from '../../example.json'
import ReactPlayer from 'react-player'
import Konami from 'react-konami-code';
import AudioPlayer from 'react-audio-player';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import PhotoIcon from '@material-ui/icons/Photo';
import YouTubeIcon from '@material-ui/icons/YouTube';


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
        donateType: false,
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

    handleLoadClick = () => {
        var exampleText = Example.case[this.state.example].origin;
        var result = Converter.splitTextV1(exampleText, [".", "!", "?", ":", ";", ",", " "], 90);
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
                result = Converter.splitTextV1(this.state.text, [".", "!", "?", ":", ";", ",", " "], 90);
                this.setState({
                    player: false,
                    logo: logoCgua,
                    result
                })
            }
        }
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
                                小奇點注音斷句模擬器 By M3ntru(zatd39)<br />
                                1. <a href='https://www.chineseconverter.com/zh-tw/convert/zhuyin' target='_blank'>
                                中文轉注音轉換工具</a><br />
                                2.目前混合中文或Emoji 長度過長是否會消音還有待測試<br />
                                3.試聽功能用的API架在免費空間(heroku)，有時試聽讀取緩慢為正常現象。<br />
                                4.斷句沒有在自己想要的位置時，可使用以下無聲字停頓以調整斷句位置：ㄐ˙ /ㄙㄟ /㔫<br />
                                5.注音發音每個字會以聲調或空格做切割，<br />
                                [ㄙㄟㄙㄟㄙㄟㄙㄟ]會無聲但只會停頓一單位長度，<br />
                                [ㄙㄟ ㄙㄟ ㄙㄟ ㄙㄟ ]則會停頓四單位長度<s>，精通後可用於偽裝掩護</s><br />
                                6.有計畫新增其他功能(ex.整段試聽)，什麼時候上線不知道，<s>想弄的時候會弄</s><br/>                              
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

                        {(this.state.donateType) ? '' : 
                        <Typography variant='caption' component='p' style={{ color: (this.state.maxLength - this.state.length < 0)?'red':'black'}}>
                            (聊天室字數上限 cheer長度也會計入 請自行預留)<br />
                            (cheer放在訊息最前面基本上不影響 放在中間和後面在訊息過長時可能有唸出來的情況 待測試)
                        </Typography>
                        }

                        <Button
                            variant='contained'
                            onClick={this.handleConverterClick}
                            style={{ color: 'white', backgroundColor: '#009688', margin: '20px' }}
                        >轉換</Button>

                        {(this.state.player) ?
                            <ReactPlayer
                                style={{ margin: 'auto', padding: '20px', maxWidth: '600px' }}
                                url={this.state.playerLink}
                                controls={true}
                                width={'auto'}
                            /> :
                            ''}

                        <ResultList text={this.state.text} result={this.state.result} type={this.state.donateType} />
                        <Konami action={this.easterEgg} />
                    </div>
                </Container>
            </div>
        )
    }
}

export default MainConverter