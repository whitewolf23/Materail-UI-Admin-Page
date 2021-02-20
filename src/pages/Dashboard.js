import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import SideMenu from "../components/SideMenu";
import PageHeader from "../components/PageHeader";
import {
  PeopleOutlineTwoTone,
  KeyboardArrowUp,
  KeyboardArrowDown,
} from "@material-ui/icons";

import {
  makeStyles,
  CssBaseline,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Typography,
  Box,
  IconButton,
  Collapse,
  TableHead,
} from "@material-ui/core";

import useFetch from "../hooks/useFetch";
import useTable from "../hooks/useTable";

const useStyles = makeStyles((theme) => ({
  dashboard: {
    paddingLeft: "320px",
    width: "100%",
  },
  dashboardContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
  table: {
    marginTop: theme.spacing(3),
    "& thead th": {
      fontWeight: "600",
      color: "#fff",
      backgroundColor: theme.palette.primary.light,
    },
    "& tbody td": {
      fontWeight: "300",
    },
    "& tbody tr:hover": {
      backgroundColor: "#fffbf2",
      cursor: "pointer",
    },
  },
}));

const useRowStyles = makeStyles({
  root: {
    // "& > *": {
    //   borderBottom: "unset",
    // },
  },
});

const headCells = [
  { id: "collapse", label: "", disableSorting: true },
  { id: "person_id", label: "환자 id", disableSorting: true },
  { id: "gender_source_value", label: "성별" },
  { id: "birth_datetime", label: "생년월일" },
  { id: "age", label: "나이" },
  { id: "race_source_value", label: "인종" },
  { id: "ethnicity_source_value", label: "민족" },
  { id: "death_date", label: "사망 여부" },
];

const DashBoard = () => {
  const classes = useStyles();
  const personURL = "dummy/person.json";
  const [records, loading] = useFetch(personURL);

  const [filterFn, setFilterFn] = useState({
    fn: (items) => {
      return items;
    },
  });

  useEffect(() => {
    console.log(records.person);
  }, [records]);

  const {
    TableHeader,
    Pagination,
    recordsFilterPaginationAndSorting,
  } = useTable(records.person, headCells, filterFn);

  return (
    <>
      <SideMenu />
      <div className={classes.dashboard}>
        <Header />
        <PageHeader
          title="환자 테이블"
          subTitle="과제"
          icon={<PeopleOutlineTwoTone fontSize="large" />}
        />
        {loading ? (
          "loading"
        ) : (
          <>
            <Paper className={classes.dashboardContent}>
              <Table className={classes.table}>
                {/* 머리 */}
                <TableHeader />
                {/* 바디 */}
                <TableBody>
                  {recordsFilterPaginationAndSorting().map((item) => (
                    <Row key={item.person_id} row={item} />
                  ))}
                </TableBody>
              </Table>
              <Pagination />
            </Paper>
          </>
        )}
      </div>
      <CssBaseline />
    </>
  );
};

const Row = ({ row }) => {
  const [open, setOpen] = useState(false);
  const classes = useRowStyles();
  const visitURL = "dummy/visit_occurrence.json";
  const [records, loading] = useFetch(visitURL);

  useEffect (() => {

  },[])


  return (
    <>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
          </IconButton>
        </TableCell>
        <TableCell>{row.person_id}</TableCell>
        <TableCell>{row.gender_source_value}</TableCell>
        <TableCell>{row.birth_datetime}</TableCell>
        <TableCell>{row.age}</TableCell>
        <TableCell>{row.race_source_value}</TableCell>
        <TableCell>{row.ethnicity_source_value}</TableCell>
        <TableCell>{row.death_date}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={12}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                History
              </Typography>
              <Table size="large" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>전체 방문 수 </TableCell>
                    <TableCell>진단정보</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>

                  {/* {row.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row">
                        {historyRow.date}
                      </TableCell>
                      <TableCell>{historyRow.customerId}</TableCell>
                      <TableCell align="right">{historyRow.amount}</TableCell>
                      <TableCell align="right">
                        {Math.round(historyRow.amount * row.price * 100) / 100}
                      </TableCell>
                    </TableRow>
                  ))} */}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};

export default DashBoard;
