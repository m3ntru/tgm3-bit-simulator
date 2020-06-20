import React from "react";
import { Paper, Table, TableContainer, TableHead, TableCell, TableRow, TableBody } from "@material-ui/core/";

class ResultList extends React.Component {
    render(){
        const { result } = this.props
        return(
            <div>
                <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                        <TableBody>
                        {result.map((data, index) => (
                            <TableRow key={index}>
                            <TableCell>{index + 1}</TableCell>
                            <TableCell>{data}</TableCell>
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