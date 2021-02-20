import React from "react";
import { Table } from "@material-ui/core";

const useTable = (records, headCells) => {
  const TableContainer = () => {
    <Table></Table>;
  };

  return {
    TableContainer,
  };
};

export default useTable;
