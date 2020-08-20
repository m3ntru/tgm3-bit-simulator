import React from "react";
import { Paper, Table, TableContainer, TableCell, TableRow, TableBody, Fab } from "@material-ui/core/";
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import AudioPlayer from 'react-audio-player';

class ResultList extends React.Component {

    state = {
        audio: {}
    }

    componentDidMount() {
        this.ttsInit();
        this.setState({
            audio: {} 
        })
    }

    componentDidUpdate = (prevProps, prevState) => {
        if (this.props.result !== prevProps.result) {
            this.ttsInit();
            this.setState({
                audio: {}
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
        if(this.state[index] == null)
        {           
            this.setState(prevState => ({
                audio: {               
                    ...prevState.audio,   
                    [index]: true
                }
            }))
        }
    }

    render() {
        const { result, text, type } = this.props
        return (
            <div>
                <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                        <TableBody>
                            {result.map((data, index) => (
                                <TableRow key={index}>
                                    <TableCell width="40px">{index + 1}</TableCell>
                                    <TableCell width="auto">{data}</TableCell>
                                    <TableCell width="40px">
                                    {(this.state.audio[index]) ?
                                        <AudioPlayer
                                        src={"https://m3ntru-tts.herokuapp.com/api/TTS/one?text=".concat(encodeURIComponent(data).concat('&tl=').concat((type) ? 'tw' : 'cn'))}
                                        title={index + 1}
                                        autoPlay
                                        controls
                                        />  :
                                        <Fab size="medium" aria-label="Play" onClick={() =>this.start(index)}>
                                            <VolumeUpIcon />
                                        </Fab>
                                    } 
                                    </TableCell>
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