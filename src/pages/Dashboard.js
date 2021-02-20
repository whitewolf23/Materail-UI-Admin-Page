import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import SideMenu from "../components/SideMenu";
import PageHeader from "../components/PageHeader";
import { PeopleOutlineTwoTone } from "@material-ui/icons";

import {
  makeStyles,
  CssBaseline,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Paper,
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

const headCells = [
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
                    <TableRow key={item.id}>
                      <TableCell>{item.person_id}</TableCell>
                      <TableCell>{item.gender_source_value}</TableCell>
                      <TableCell>{item.birth_datetime}</TableCell>
                      <TableCell>{item.age}</TableCell>
                      <TableCell>{item.race_source_value}</TableCell>
                      <TableCell>{item.ethnicity_source_value}</TableCell>
                      <TableCell>{item.death_date}</TableCell>
                    </TableRow>
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

export default DashBoard;
