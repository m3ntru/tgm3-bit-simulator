import React, { Component } from 'react'
import ResultList from '../ResultList'
import Converter from '../../model/Converter'
import logoCgua from '../../img/tgm3Cgua.png';
import logoOD from '../../img/tgm3OD.png';
import logoAmon from '../../img/tgm3AMON.png';
import { Container, Typography, Card, CardContent, Button, TextField, Paper, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core/';
import Example from '../../example.json'
import ReactPlayer from 'react-player'

class MainConverter extends Component {
    state = {
        text: "",
        result: [],
        logo: logoCgua,
        example : 0,
        player: false,
        playerLink: ''
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
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
            result
        })
    }

    handleConverterClick = () => {
        if (this.state.text !== "") {
            if (this.state.text.toLowerCase() === "od9000") {
                this.setState({
                    player: false,
                    logo: logoOD,
                    text: '<message deleted>',
                    result: ['O什麼O啊，上一個O的，墳頭的草已經起飛了87cm囉。(๑′ܫ`)/ http://i.imgur.com/dvPGYeA.jpg https://www.twitch.tv/tetristhegrandmaster3/v/66031829 [warning]']
                })
            }
            else {
                var result = Converter.splitTextV1(this.state.text, [".", "!", "?", ":", ";", ",", " "], 90);
                this.setState({
                    player: false,
                    logo: logoCgua,
                    result
                })
            }
        }
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
                                小奇點注音斷句模擬器<br />
                                1.目前僅有純注音斷句，文字上限以及混合中文或Emoji還有待測試<br />
                                2.斷句沒有在自己想要的位置時，可使用以下注音作停頓：<br />
                                ㄐ˙ / ㄐ˙。 / ㄙㄟ / ㄙㄟ。<br />
                                3.中文轉注音轉換工具 <a href='https://www.chineseconverter.com/zh-tw/convert/zhuyin' target='blank'>
                                    https://www.chineseconverter.com/zh-tw/convert/zhuyin</a><br />
                                4.有計畫新增其他功能(ex.整段試聽)，什麼時候上線不知道，作者下班也是會想打個電動
                                <img src={logoAmon} alt='logo' style={{ height: '32px', width: '32px', verticalAlign: 'text-bottom'}} /> 
                            </Typography>
                        </CardContent>
                    </Card>
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
                        style={{ color: 'white', backgroundColor: '#009688', margin: '20px' }}
                    >載入</Button>
                    <div style={{ padding: '20px' }}>
                        <TextField component={Paper}
                            multiline
                            variant='outlined'
                            rows={7}
                            label='Message'
                            value={this.state.text}
                            style={{ width: '100%' }}
                            onChange={this.handleChange('text')}
                        />
                    </div>
                    <Button
                        variant='contained'
                        onClick={this.handleConverterClick}
                        style={{ color: 'white', backgroundColor: '#009688', margin: '20px' }}
                    >轉換</Button>
                    {(this.state.player)?
                    <ReactPlayer 
                        style={{ margin: 'auto', padding: '20px', maxWidth: '600px'}} 
                        url = {this.state.playerLink}
                        controls = {true}
                        width = {'auto'}   
                    />:
                    ''} 
                    <ResultList result={this.state.result} />
                </div>
            </Container>
        </div>
    )
}
}

export default MainConverter