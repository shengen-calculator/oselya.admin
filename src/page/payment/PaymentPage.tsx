import * as React from 'react';
import Typography from "@mui/material/Typography";
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import Footer from "../../components/Footer";
import {Paper, Table, TableBody, TableContainer, TableHead, TableRow} from "@mui/material";
import PaymentBar from "../../components/PaymentBar";

export default function PaymentPage() {
    const handleClick = () => {
        console.info('You clicked the filter chip.');
    };

    const TAX_RATE = 0.07;

    function ccyFormat(num: number) {
        return `${num.toFixed(2)} %`;
    }

    function priceRow(qty: number, unit: number) {
        return unit * 100/qty;
    }

    function createRow(desc: string, qty: number, unit: number) {
        const price = priceRow(qty, unit);
        return { desc, qty, unit, price };
    }

    interface Row {
        desc: string;
        qty: number;
        unit: number;
        price: number;
    }

    function subtotal(items: readonly Row[]) {
        return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
    }

    const rows = [
        createRow('Липень', 21613.91, 16821.34),
        createRow('Серпень', 21612.98, 17984.21),
        createRow('Вересень', 21934.56, 16211.15),
    ];

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
            <PaymentBar/>
            <Container
                maxWidth="lg"
                component="main"
                sx={{display: 'flex', flexDirection: 'column', my: 16, gap: 4, pt: 5}}
            >
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                    <div>
                        <Typography variant="h1" gutterBottom>
                            Оплати
                        </Typography>
                    </div>
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
                                label="Півріччя"
                                sx={{
                                    backgroundColor: 'transparent',
                                    border: 'none',
                                }}
                            />
                            <Chip
                                onClick={handleClick}
                                size="medium"
                                label="Квартал"
                            />
                            <Chip
                                onClick={handleClick}
                                size="medium"
                                label="Місяць"
                                sx={{
                                    backgroundColor: 'transparent',
                                    border: 'none',
                                }}
                            />
                        </Box>
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
                                label="Всі"
                                sx={{
                                    backgroundColor: 'transparent',
                                    border: 'none',
                                }}
                            />
                            <Chip
                                onClick={handleClick}
                                size="medium"
                                label="Паркленд"
                            />
                            <Chip
                                onClick={handleClick}
                                size="medium"
                                label="Сакура"
                                sx={{
                                    backgroundColor: 'transparent',
                                    border: 'none',
                                }}
                            />
                            <Chip
                                onClick={handleClick}
                                size="medium"
                                label="Ріверленд"
                                sx={{
                                    backgroundColor: 'transparent',
                                    border: 'none',
                                }}
                            />
                        </Box>
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
                                label="Всі"
                                sx={{
                                    backgroundColor: 'transparent',
                                    border: 'none',
                                }}
                            />
                            <Chip
                                onClick={handleClick}
                                size="medium"
                                label="Паркленд 1"
                                sx={{
                                    backgroundColor: 'transparent',
                                    border: 'none',
                                }}
                            />
                            <Chip
                                onClick={handleClick}
                                size="medium"
                                label="Паркленд 2"
                                sx={{
                                    backgroundColor: 'transparent',
                                    border: 'none',
                                }}
                            />
                            <Chip
                                onClick={handleClick}
                                size="medium"
                                label="Паркленд 3"
                                sx={{
                                    backgroundColor: 'transparent',
                                    border: 'none',
                                }}
                            />
                            <Chip
                                onClick={handleClick}
                                size="medium"
                                label="Паркленд 4"
                                sx={{
                                    backgroundColor: 'transparent',
                                    border: 'none',
                                }}
                            />
                            <Chip
                                onClick={handleClick}
                                size="medium"
                                label="Паркленд 5"
                                sx={{
                                    backgroundColor: 'transparent',
                                    border: 'none',
                                }}
                            />
                            <Chip
                                onClick={handleClick}
                                size="medium"
                                label="Паркленд 6"
                                sx={{
                                    backgroundColor: 'transparent',
                                    border: 'none',
                                }}
                            />
                            <Chip
                                onClick={handleClick}
                                size="medium"
                                label="Паркленд 7"
                            />

                        </Box>
                    </Box>
                </Box>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 700 }} aria-label="spanning table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>Період</StyledTableCell>
                                <StyledTableCell align="right">Нараховано</StyledTableCell>
                                <StyledTableCell align="right">Сплачено</StyledTableCell>
                                <StyledTableCell align="right"></StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <StyledTableRow key={row.desc}>
                                    <StyledTableCell>{row.desc}</StyledTableCell>
                                    <StyledTableCell align="right">{row.qty}</StyledTableCell>
                                    <StyledTableCell align="right">{row.unit}</StyledTableCell>
                                    <StyledTableCell align="right">{ccyFormat(row.price)}</StyledTableCell>
                                </StyledTableRow>
                            ))}
                            <StyledTableRow>
                                <StyledTableCell align="right">Всього</StyledTableCell>
                                <StyledTableCell align="right">65161.45</StyledTableCell>
                                <StyledTableCell align="right">51016.7</StyledTableCell>
                                <StyledTableCell align="right">78.29 %</StyledTableCell>
                            </StyledTableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
            <Footer/>
        </React.Fragment>
    );
}
