import React, { useMemo } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {
  startOfMonth,
  getISODay,
  getDate,
  endOfMonth,
  add,
  getWeeksInMonth,
  format
} from 'date-fns'

//TDO: add typings
const getCurrentMonth = () => {
  const currentDate = new Date();
  const firstDayOfMonth = startOfMonth(currentDate);
  const endDayOfMonth = endOfMonth(currentDate);
  const daysInMonth = getDate(endDayOfMonth);
  let currentMonthArray = [];
  for (let i = 0; i < daysInMonth; i++) {
    currentMonthArray.push(add(firstDayOfMonth, { days: i }));
  };
  const emptyCells = [];
  for (let i = 1; i < getISODay(firstDayOfMonth); i++) {
    emptyCells.push(null)
  };
  const currentMonthTableArray = emptyCells.concat(currentMonthArray);
  const currentMonthTableSlicedArray = [];
  for (let i = 0; i < getWeeksInMonth(currentDate); i++) {
    currentMonthTableSlicedArray.push(currentMonthTableArray.slice(i * 7, i * 7 + 7))
  };
  return currentMonthTableSlicedArray;
}

export const CalendarContainer: React.FC = () => {
  const currentMonth = useMemo(() => getCurrentMonth(), []);
  const currentDate = new Date();

  return (
    <>
      <h2>{format(currentDate, "MMMM yyyy")}</h2>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Monday</TableCell>
              <TableCell align="center">Tuesday</TableCell>
              <TableCell align="center">Wednesday</TableCell>
              <TableCell align="center">Thursday</TableCell>
              <TableCell align="center">Friday</TableCell>
              <TableCell align="center">Saturday</TableCell>
              <TableCell align="center">Sunday</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {currentMonth.map((row, index) => (
              <TableRow key={index}>
                {row.map((date, index) => <TableCell align="center" key={index}>{date && format(date, "dd MMMM yyyy")}</TableCell>)}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
