import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

class MobTable extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div> 
                <Paper>
                    <Table> 
                        <TableHead>
                            <TableRow>
                                <TableCell>Mobster</TableCell>
                                <TableCell>
                                    <Fab color="primary" aria-label="Add">
                                        <AddIcon />
                                    </Fab>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>Amanda</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </Paper>
            </div>
        );
    }
}

export default MobTable;