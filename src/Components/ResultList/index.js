import React from "react";
import { Paper, Table, TableContainer, TableCell, TableRow, TableBody, Fab } from "@material-ui/core/";
import VolumeUpIcon from '@material-ui/icons/VolumeUp';

class ResultList extends React.Component {
    render(){
        const TTS = 'https://translate.google.com.tw/?hl=zh-TW&tab=wT&authuser=0#view=home&op=translate&sl=zh-CN&tl=zh-CN&text=';
        const { result } = this.props
        return(
            <div>
                <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                        <TableBody>
                        {result.map((data, index) => (
                            <TableRow key={index}>
                            <TableCell width="40px">{index + 1}</TableCell>
                            <TableCell>{data}</TableCell>
                            <TableCell width="50px">
                                <Fab size="medium" aria-label="GitHub" href={TTS + data} target='blank'>
                                    <VolumeUpIcon/>
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