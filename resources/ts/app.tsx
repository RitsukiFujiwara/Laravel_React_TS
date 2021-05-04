import React from 'react';
import ReactDOM from 'react-dom';
import {
    Button,
    Avatar,
    Badge,
    Table,
    TableHead,
    TableCell,
    TableRow,
    TableBody,
    TableSortLabel,
} from "@material-ui/core";
 
 
const App: React.FC = () => {
    return (
        <div>
            <Button
            variant="contained"
            color="primary"
            size="small"
            >
                Add New
            </Button>
　　　　　   Hello World
        </div>
    )
}
 
 
if (document.getElementById('app1')) {
    ReactDOM.render(<App />, document.getElementById('app1'));
}