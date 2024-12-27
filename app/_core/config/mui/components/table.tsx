// src/theme/components/tableTheme.js

const table = {
    MuiTableHead: {
        styleOverrides: {
            root: ({ theme }) => ({
                '& th': {
                    fontSize: '12px',
                    backgroundColor: theme.palette.grayAirsa[200],
                },
            }),
        },
    },

    MuiTableRow: {
        styleOverrides: {
            root: ({ theme }) => ({
                backgroundColor: theme.palette.white,
                '& th': {
                    fontSize: '12px',
                    fontWeight: 500,
                    color: theme.palette.black,
                },
                '& tr': {
                    fontSize: '12px',
                    fontWeight: 500,
                    backgroundColor: theme.palette.white,
                    color: theme.palette.black,
                },
            }),
        },
    },

    MuiTableBody: {
        styleOverrides: {
            root: ({ theme }) => ({
                '& tr > td': {
                    backgroundColor: theme.palette.white,
                    transition: theme.transitions.create('background-color', {
                        duration: theme.transitions.duration.short,
                        easing: theme.transitions.easing.easeInOut,
                    }),
                },
                '& tr:nth-of-type(even):not([data-selected="true"]):not([data-pinned="true"]) > td': {
                    backgroundColor: theme.palette.grayAirsa[50],
                },
                '& tr:nth-of-type(even):not([data-selected="true"]):not([data-pinned="true"]):hover > td': {
                    backgroundColor: theme.palette.primary[50],
                },
                '& tr:hover > td': {
                    opacity: 0.8,
                    backgroundColor: theme.palette.primary[50],
                    cursor: 'pointer',
                },
                '& tr[data-selected="true"] > td': {
                    backgroundColor: theme.palette.primary[100],
                },
            }),
        },
    },
    MuiTableCell: {
        styleOverrides: {
            root: {
                fontWeight: 400,
            },
        },
    },
}

export default table
