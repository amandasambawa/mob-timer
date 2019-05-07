import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContentText';
import DialogContentText from '@material-ui/core/DialogContentText';

class MobTable extends Component {
    constructor(props) {
        super(props);

        this.state = {
            mobbers: [],
            open: false,
        };

        this.currName = "";

        this.addMobber = this.addMobber.bind(this);
        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.mobberName = this.mobberName.bind(this);
    }
    
    addMobber() {
        var mobberArray = this.state.mobbers;
        mobberArray.push(this.currName);
        console.log(mobberArray);

        this.handleClose();
    }

    handleOpen() {
        this.setState({
            open: true
        })
    }

    handleClose() {
        this.setState({
            open: false
        })
    }

    mobberName(event) {
        this.currName = event.target.value;
    }

    render() {
        return (
            <div> 
                <Paper>
                    <Table> 
                        <TableHead>
                            <TableRow>
                                <TableCell>Mobster</TableCell>
                                <TableCell style={{textAlign: "right"}}>
                                    <Fab color="primary" aria-label="Add" size="small" onClick={this.handleOpen}>
                                        <AddIcon />
                                    </Fab>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.state.mobbers.map(name => (
                                <TableRow hover id={name}>
                                    <TableCell>{name}</TableCell>
                                    <TableCell style={{textAlign: "right"}}></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Paper>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose} 
                >
                    <DialogContent style={{ margin: "1em"}}>
                        <DialogContentText id="alert-dialog-description">
                            <TextField onChange={this.mobberName}/>
                        </DialogContentText>
                    </DialogContent>
                    {/* <DialogActions> */}
                    <Button onClick={this.addMobber} color="primary">
                        Add Mobber
                    </Button>
                    {/* </DialogActions> */}
                </Dialog>
            </div>
        );
    }
}

export default MobTable;