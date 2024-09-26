import * as React from 'react';
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Footer from "../../components/Footer";
import UnitBar from "../../components/UnitBar";
import {
    Box,
    Collapse,
    IconButton, Menu, MenuItem, Paper,
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
import MoreVertIcon from '@mui/icons-material/MoreVert';

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
                    date: '01-07-2024',
                    customerId: 'Абонплата липень',
                    amount: 754,
                    balance: -754,
                },
                {
                    date: '19-07-2024',
                    customerId: '',
                    paid: 800,
                    balance: 46,
                },
                {
                    date: '01-08-2024',
                    customerId: 'Абонплата серпень',
                    amount: 754,
                    balance: -708,
                },
                {
                    date: '21-08-2024',
                    customerId: '',
                    paid: 800,
                    balance: 92,
                },
                {
                    date: '01-09-2024',
                    customerId: 'Абонплата вересень',
                    amount: 754,
                    balance: -662,
                }
            ],
        };
    }
    function Row(props: { row: ReturnType<typeof createData> }) {
        const { row } = props;
        const [open, setOpen] = React.useState(false);


        const options = [
            'Редагувати профіль',
            'Створити нарахування',
            'Відмінити нарахування',
            'Внести інфо про платіж',
            'Видалити інфо про платіж',
        ];

        const ITEM_HEIGHT = 48;

        const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
        const openMenu = Boolean(anchorEl);
        const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
            setAnchorEl(event.currentTarget);
        };
        const handleClose = () => {
            setAnchorEl(null);
        };
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
                    <TableCell align="right">
                        <div>
                            <IconButton
                                aria-label="more"
                                id="long-button"
                                aria-controls={openMenu ? 'long-menu' : undefined}
                                aria-expanded={openMenu ? 'true' : undefined}
                                aria-haspopup="true"
                                onClick={handleMenuClick}
                            >
                                <MoreVertIcon />
                            </IconButton>
                            <Menu
                                id="long-menu"
                                MenuListProps={{
                                    'aria-labelledby': 'long-button',
                                }}
                                anchorEl={anchorEl}
                                open={openMenu}
                                onClose={handleClose}
                                slotProps={{
                                    paper: {
                                        style: {
                                            maxHeight: ITEM_HEIGHT * 4.5,
                                            width: '28ch',
                                        },
                                    },
                                }}
                            >
                                {options.map((option) => (
                                    <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
                                        {option}
                                    </MenuItem>
                                ))}
                            </Menu>
                        </div>
                    </TableCell>
                </StyledTableRow>
                <StyledTableRow>
                    <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                        <Collapse in={open} timeout="auto" unmountOnExit>
                            <Box sx={{ margin: 1 }}>
                                <Typography variant="h6" gutterBottom component="div">
                                    Оплати та нарахування
                                </Typography>
                                <Table size="small" aria-label="purchases">
                                    <TableHead>
                                        <StyledTableRow>
                                            <StyledTableCell>Дата</StyledTableCell>
                                            <StyledTableCell>Опис</StyledTableCell>
                                            <StyledTableCell align="right">Нарахвано</StyledTableCell>
                                            <StyledTableCell align="right">Сплачено</StyledTableCell>
                                            <StyledTableCell align="right">Баланс</StyledTableCell>
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
                                                <TableCell align="right">{historyRow.paid}</TableCell>
                                                <TableCell align="right">{historyRow.balance}</TableCell>
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
        createData('Наукова 19В корп.7 кв.1', 2159.29, 0, -2159.29, 4.0, 3.99),
        createData('Наукова 19В корп.7 кв.2', 2237.31, 0, -2237.31, 4.3, 4.99),
        createData('Наукова 19В корп.7 кв.3', 2262.00, 1600, -662, 6.0, 3.79),
        createData('Наукова 19В корп.7 кв.4', 2305.55, 3700, 1395.55, 4.3, 2.5),
        createData('Наукова 19В корп.7 кв.5', 2356.00, 1600, -756, 3.9, 1.5),
        createData('Наукова 19В корп.7 кв.6', 1459.00, 1500, 41, 4.0, 3.99),
        createData('Наукова 19В корп.7 кв.7', 2347.59, 2347.59, 0, 4.3, 4.99),
        createData('Наукова 19В корп.7 кв.8', 1562.40, 1500.0, 62.40, 6.0, 3.79),
        createData('Наукова 19В корп.7 кв.9', 1905.21, 1905.21, 0, 4.3, 2.5),
        createData('Наукова 19В корп.7 кв.10', 1756.05, 1750, 6.05, 3.9, 1.5),
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
                                <StyledTableCell></StyledTableCell>
                                <StyledTableCell align="right">Нараховано</StyledTableCell>
                                <StyledTableCell align="right">Сплачено</StyledTableCell>
                                <StyledTableCell align="right">Баланс</StyledTableCell>
                                <StyledTableCell align="right"></StyledTableCell>
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
