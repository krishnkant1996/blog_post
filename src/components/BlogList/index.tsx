import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { selectPost } from "../../app/Slices/blog";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { addPost } from "../../app/Slices/blog";
import { Link } from "react-router-dom";
import {
  Paper,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Button,
  Typography,
} from "@material-ui/core";
import BlogForm from "../BlogForm";
interface Column {
  id: "title" | "date" | "content";
  label: string;
  minWidth?: number;
  align?: "right";
  format?: (value: number) => string;
}
const columns: Column[] = [
  { id: "title", label: "Title", minWidth: 170 },
  { id: "content", label: "Content", minWidth: 100 },
  {
    id: "date",
    label: "Date",
    minWidth: 170,
    align: "right",
  },
];
const useStyles = makeStyles({
  root: {
    width: "100%",
    padding: 20,
  },
  container: {
    maxHeight: 500,
    marginTop: 30,
  },
});

export default function BlogList() {
  const rows = useAppSelector(selectPost);
  const dispatch = useAppDispatch();

  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleAddPost = (state: any) => {
    dispatch(addPost(state));
    handleClose();
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="flex-start"
      >
        <Grid item xs={9}>
          <Typography variant="h5" component="h5">
            Blog Post list
          </Typography>
        </Grid>
        <Grid item xs>
          <Button variant="contained" color="primary" onClick={handleClickOpen}>
            Add Post
          </Button>
        </Grid>
      </Grid>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row: any) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      if (column.id === "title") {
                        return (
                          <TableCell key={column.id} align={column.align}>
                            <Link
                              style={{ textDecoration: "none" }}
                              to={`/blog_post/blog-details/${row["blogId"]}`}
                            >
                              {column.format && typeof value === "number"
                                ? column.format(value)
                                : value}
                            </Link>
                          </TableCell>
                        );
                      }
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
      {open && (
        <BlogForm
          open={open}
          handleClose={handleClose}
          handleAddPost={handleAddPost}
        />
      )}
    </Paper>
  );
}
