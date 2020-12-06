import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Paper,
  TablePagination,
  CircularProgress,
  Toolbar,
} from "@material-ui/core";
import { getBudgets } from "../../redux/sagas/api";

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  container: {
    height: 360,
  },
});

const BudgetHistory = ({ user }) => {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [budgets, setBudgets] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(async () => {
      let temp = await getBudgets(user.id);
      setBudgets(temp);
    }, 1000);
    setIsLoading(false);
  }, []);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      <Toolbar>
        <Typography
          className={classes.title}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          Budget History
        </Typography>
      </Toolbar>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <div>
          <TableContainer className={classes.container}>
            <Table stickyHeader>
              <TableHead>
                <TableRow>
                  <TableCell>Month</TableCell>
                  <TableCell align="right">Category</TableCell>
                  <TableCell align="right">Total Amount</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {budgets.map((budget) => (
                  <TableRow className={classes.root}>
                    <TableCell component="th" scope="row">
                      {budget.date}
                    </TableCell>
                    <TableCell align="right">{budget.category}</TableCell>
                    <TableCell align="right">{budget.budget}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={budgets.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
        </div>
      )}
    </Paper>
  );
};

function mapStateToProps(state) {
  return { user: state.auth.user };
}

export default connect(mapStateToProps)(BudgetHistory);
