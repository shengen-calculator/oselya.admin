import * as React from 'react';
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Footer from "../../components/Footer";
import UnitBar from "../../components/UnitBar";
import {
    Box,
    Collapse,
    IconButton, Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Chip from "@mui/material/Chip";
import {Search} from "../../components/MainContent";
import {styled} from "@mui/material/styles";
import {tableCellClasses} from "@mui/material/TableCell";

export default function UnitPage() {

    function createData(
        name: string,
        calories: number,
        fat: number,
        carbs: number,
        protein: number,
        price: number,
    ) {
        return {
            name,
            calories,
            fat,
            carbs,
            protein,
            price,
            history: [
                {
                    date: '2020-01-05',
                    customerId: '11091700',
                    amount: 3,
                },
                {
                    date: '2020-01-02',
                    customerId: 'Anonymous',
                    amount: 1,
                },
            ],
        };
    }
    function Row(props: { row: ReturnType<typeof createData> }) {
        const { row } = props;
        const [open, setOpen] = React.useState(false);
        return (
            <React.Fragment>
                <StyledTableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                    <TableCell>
                        <IconButton
                            aria-label="expand row"
                            size="small"
                            onClick={() => setOpen(!open)}
                        >
                            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                        </IconButton>
                    </TableCell>
                    <TableCell component="th" scope="row">
                        {row.name}
                    </TableCell>
                    <TableCell align="right">{row.calories}</TableCell>
                    <TableCell align="right">{row.fat}</TableCell>
                    <TableCell align="right">{row.carbs}</TableCell>
                    <TableCell align="right">{row.protein}</TableCell>
                </StyledTableRow>
                <StyledTableRow>
                    <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                        <Collapse in={open} timeout="auto" unmountOnExit>
                            <Box sx={{ margin: 1 }}>
                                <Typography variant="h6" gutterBottom component="div">
                                    History
                                </Typography>
                                <Table size="small" aria-label="purchases">
                                    <TableHead>
                                        <StyledTableRow>
                                            <StyledTableCell>Date</StyledTableCell>
                                            <StyledTableCell>Customer</StyledTableCell>
                                            <StyledTableCell align="right">Amount</StyledTableCell>
                                            <StyledTableCell align="right">Total price ($)</StyledTableCell>
                                        </StyledTableRow>
                                    </TableHead>
                                    <TableBody>
                                        {row.history.map((historyRow) => (
                                            <StyledTableRow key={historyRow.date}>
                                                <TableCell component="th" scope="row">
                                                    {historyRow.date}
                                                </TableCell>
                                                <TableCell>{historyRow.customerId}</TableCell>
                                                <TableCell align="right">{historyRow.amount}</TableCell>
                                                <TableCell align="right">
                                                    {Math.round(historyRow.amount * row.price * 100) / 100}
                                                </TableCell>
                                            </StyledTableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </Box>
                        </Collapse>
                    </TableCell>
                </StyledTableRow>
            </React.Fragment>
        );
    }
    const rows = [
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 3.99),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 4.99),
        createData('Eclair', 262, 16.0, 24, 6.0, 3.79),
        createData('Cupcake', 305, 3.7, 67, 4.3, 2.5),
        createData('Gingerbread', 356, 16.0, 49, 3.9, 1.5),
    ];

    const handleClick = () => {
        console.info('You clicked the filter chip.');
    };

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
        },
    }));

    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
            border: 0,
        },
    }));

    return (
        <React.Fragment>
            <UnitBar/>
            <Container
                maxWidth="lg"
                component="main"
                sx={{display: 'flex', flexDirection: 'column', my: 16, gap: 4, pt: 5}}
            >
                <Typography variant="h1" gutterBottom>
                    Об'єкти
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                    <Box
                        sx={{
                            display: { xs: 'flex', sm: 'none' },
                            flexDirection: 'row',
                            gap: 1,
                            width: { xs: '100%', md: 'fit-content' },
                            overflow: 'auto',
                        }}
                    >
                        <Search />
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: { xs: 'column-reverse', md: 'row' },
                            width: '100%',
                            justifyContent: 'space-between',
                            alignItems: { xs: 'start', md: 'center' },
                            gap: 4,
                            overflow: 'auto',
                        }}
                    >
                        <Box
                            sx={{
                                display: 'inline-flex',
                                flexDirection: 'row',
                                gap: 3,
                                overflow: 'auto',
                            }}
                        >
                            <Chip
                                onClick={handleClick}
                                size="medium"
                                label="Рік"
                                sx={{
                                    backgroundColor: 'transparent',
                                    border: 'none',
                                }}
                            />
                            <Chip
                                onClick={handleClick}
                                size="medium"
                                label="6 місяців"
                                sx={{
                                    backgroundColor: 'transparent',
                                    border: 'none',
                                }}
                            />
                            <Chip
                                onClick={handleClick}
                                size="medium"
                                label="3 місяці"
                            />
                            <Chip
                                onClick={handleClick}
                                size="medium"
                                label="1 місяць"
                                sx={{
                                    backgroundColor: 'transparent',
                                    border: 'none',
                                }}
                            />
                        </Box>
                        <Box
                            sx={{
                                display: { xs: 'none', sm: 'flex' },
                                flexDirection: 'row',
                                gap: 1,
                                width: { xs: '100%', md: 'fit-content' },
                                overflow: 'auto',
                            }}
                        >
                            <Search />
                        </Box>
                    </Box>
                </Box>
                <TableContainer component={Paper}>
                    <Table aria-label="collapsible table">
                        <TableHead>
                            <StyledTableRow>
                                <StyledTableCell />
                                <StyledTableCell>Dessert (100g serving)</StyledTableCell>
                                <StyledTableCell align="right">Calories</StyledTableCell>
                                <StyledTableCell align="right">Fat&nbsp;(g)</StyledTableCell>
                                <StyledTableCell align="right">Carbs&nbsp;(g)</StyledTableCell>
                                <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell>
                            </StyledTableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <Row key={row.name} row={row} />
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
            <Footer/>
        </React.Fragment>
    );
}
