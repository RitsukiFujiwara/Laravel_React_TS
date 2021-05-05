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
　　　　　    <Table>
             <TableHead>
                <TableRow>
                    <TableCell>test_header</TableCell>
                    <TableCell>test2_header</TableCell>
                    <TableCell>test3_header</TableCell>
                    <TableCell>test4_header</TableCell>
                </TableRow>
             </TableHead>
                 <TableBody>
                     <TableRow>
                        <TableCell>test</TableCell>
                        <TableCell>test2</TableCell>
                        <TableCell>test3</TableCell>
                        <TableCell>test4</TableCell>
                    </TableRow>
                 </TableBody>
            </Table>
        </div>
    )
}
 
 
if (document.getElementById('app1')) {
    ReactDOM.render(<App />, document.getElementById('app1'));
}