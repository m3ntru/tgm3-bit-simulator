import React from "react";
import { Paper, Table, TableContainer, TableCell, TableRow, TableBody, Fab } from "@material-ui/core/";
import VolumeUpIcon from '@material-ui/icons/VolumeUp';

class ResultList extends React.Component {

    state = {
        
    }

    componentDidMount() {
        this.ttsInit()
    }

    componentDidUpdate = (prevProps, prevState) => {
      if (this.props.result !== prevProps.result) {
        this.ttsInit()
      }
    }
    
    ttsInit = async () => {
        fetch('https://m3ntru-tts.herokuapp.com/', {
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
                'X-Requested-With' : 'XMLHttpRequest'
            },
            method: 'GET',
        }).then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
        
    }

    render() {
        const { result, text } = this.props
        return (
            <div>
                <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                        <TableBody>
                            {result.map((data, index) => (
                                <TableRow key={index}>
                                    <TableCell width="40px">{index + 1}</TableCell>
                                    <TableCell>{data}</TableCell>
                                    <TableCell width="50px">
                                        <Fab size="medium" aria-label="Play" href={'https://m3ntru-tts.herokuapp.com/api/TTS/one?text=' + data} target='_blank'>
                                            <VolumeUpIcon />
                                        </Fab>
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