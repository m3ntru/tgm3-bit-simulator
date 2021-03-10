import React from "react";
import logoAmon from '../../img/tgm3AMON.png';
import logoAho from '../../img/tgm3AHO.png';
import logoQ from '../../img/tgm3Q.png';
import { Paper, Table, TableContainer, TableCell, TableRow, TableBody, Fab, Tooltip } from "@material-ui/core/";
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import AudioPlayer from 'react-audio-player';

class ResultList extends React.Component {

    state = {
        audio: {},
        durationCheck: {},
        duration: {}
    }

    resultFormat = {
        description: {
            'T': "念得出來",
            'F': '太長了念不出來',
            'E': '請先試聽整句後才能判斷念不念得出來'
        },
        emote: {
            'T': logoAmon,
            'F': logoAho,
            'E': logoQ
        }
    };

    componentDidMount() {
        this.ttsInit();
        this.setState({
            audio: {},
            durationCheck: {},
            duration: {}
        })
    }

    componentDidUpdate = (prevProps, prevState) => {
        var audioTemp = prevState.audio;
        var durationCheckTemp = prevState.durationCheck;
        var durationTemp = prevState.duration;
        var diff = false;
        if (this.props.isAutoPlay) {
            var propsList = (prevProps.result.length > this.props.result.length) ? prevProps.result : this.props.result;
            propsList.map((data, index) => {
                if (prevProps.result[index] !== this.props.result[index]) {
                    durationCheckTemp = {
                        ...durationCheckTemp,
                        [index]: false
                    }
                    durationTemp = {
                        ...durationTemp,
                        [index]: 0
                    }
                    diff = true;
                }
                audioTemp[index] = true;
            })
        }
        else if (this.props.result !== prevProps.result) {
            audioTemp = {};
            durationCheckTemp = {};
            durationTemp = {};
            diff = true;
        }
        if ((prevProps.isAutoPlay !== this.props.isAutoPlay))
            diff = true;
        if (diff) {
            this.ttsInit();
            this.setState({
                audio: audioTemp,
                durationCheck: durationCheckTemp,
                duration: durationTemp
            })
        }
    }

    ttsInit = async () => {
        fetch('https://m3ntru-tts.herokuapp.com/', {
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
                'X-Requested-With': 'XMLHttpRequest'
            },
            method: 'GET',
        }).then(response => response.text())
            .then(result => console.log('API init success'))
            .catch(error => console.log('error', error));

    }

    start = (index) => {
        if (!this.state.audio[index]) {
            this.setState(prevState => ({
                audio: {
                    ...prevState.audio,
                    [index]: true
                }
            }))
        }
    }

    checkLength = (index) => event => {
        const { duration } = event.target;
        if (!this.state.durationCheck[index]) {
            this.setState(prevState => ({
                durationCheck: {
                    ...prevState.durationCheck,
                    [index]: (duration < 16.5) ? 'T' : 'F'
                },
                duration: {
                    ...prevState.duration,
                    [index]: duration
                }
            }))
        }
    }

    getLengthResult = (index) => {
        const result = (this.state.durationCheck[index]) ? this.state.durationCheck[index] : 'E';
        const description = this.resultFormat.description[result];
        const emote = this.resultFormat.emote[result];
        const duration = (this.state.duration[index]) ? this.state.duration[index] + "秒，" : '';
        return (
            <Tooltip title={
                <React.Fragment>
                    {duration + description}
                </React.Fragment>
            } arrow>
                <img src={emote} alt='logo' style={{ height: '28px', width: '28px', verticalAlign: 'text-bottom' }} />
            </Tooltip>
        )
    }

    render() {
        const { result, text, type, isAutoPlay } = this.props;
        return (
            <div>
                <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                        <TableBody>
                            {result.map((data, index) => (
                                <TableRow key={index}>
                                    <TableCell width="40px">{(!type && index === 0) ? "Bits" : index}</TableCell>
                                    <TableCell width="auto">{data}</TableCell>
                                    <TableCell width="40px">
                                        {(this.state.audio[index] && (index !== 0 || type)) ?
                                            <AudioPlayer
                                                muted={isAutoPlay}
                                                src={"https://m3ntru-tts.herokuapp.com/api/TTS/one?text=".concat(encodeURIComponent(data).concat('&tl=').concat((type) ? 'tw' : 'cn'))}
                                                title={index}
                                                controls
                                                autoPlay
                                                onEnded={this.checkLength(index)}
                                            /> :
                                            (!type && index === 0) ?
                                                ''
                                                :
                                                <Tooltip title="試聽" arrow>
                                                    <Fab size="medium" aria-label="Play" onClick={() => this.start(index)}>
                                                        <VolumeUpIcon />
                                                    </Fab>
                                                </Tooltip>
                                        }
                                    </TableCell>

                                    {(type || index === 0) ?
                                        ''
                                        :
                                        <TableCell width="40px">
                                            {this.getLengthResult(index)}
                                        </TableCell>
                                    }

                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        )
    }
}

export default ResultList