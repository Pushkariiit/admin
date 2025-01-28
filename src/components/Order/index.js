import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  InputAdornment,
  TablePagination,
  MenuItem,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import ArrowIcon from '../../assets/ar.png'
import Rectangle from '../../assets/rec.png'


// Sample Data
const orders = [
  { id: "#10421", name: "Antonio Christ", product: "Nike Shirt", category: "Shirt", time: "8:00 am", rate: "+0.3", duration: "23s", price: "$23", status: "ongoing" },
  { id: "#10422", name: "Angelina Jouli", product: "Titan Watch", category: "Accessories", time: "8:00 pm", rate: "+0.7", duration: "27s", price: "$100", status: "halted" },
  { id: "#10423", name: "Darab Ahmed", product: "Adidas Shoes", category: "Footwear", time: "2:00 am", rate: "-0.4", duration: "24s", price: "$40", status: "completed" },
  { id: "#10424", name: "Leonardis", product: "Spoon set", category: "Kitchenware", time: "12:00 pm", rate: "+0.9", duration: "35s", price: "$50", status: "halted" },
  { id: "#10425", name: "Antonio Christ", product: "Nike Shirt", category: "Shirt", time: "12:15 am", rate: "-0.9", duration: "23s", price: "$23", status: "completed" },
  { id: "#10426", name: "Maria Susan", product: "Leather Bag", category: "Accessories", time: "10:00 am", rate: "+0.5", duration: "20s", price: "$70", status: "ongoing" },
  { id: "#10427", name: "David Warner", product: "Puma Cap", category: "Accessories", time: "1:00 pm", rate: "+0.2", duration: "19s", price: "$10", status: "completed" },
  { id: "#10428", name: "John Doe", product: "Kitchen Set", category: "Kitchenware", time: "4:00 pm", rate: "-0.3", duration: "30s", price: "$90", status: "halted" },
];

const summary = [
  { title: "Total Order", value: 281, change: "+55%", color: "green" },
  { title: "Ongoing Orders", value: 30, change: "-65%", color: "red" },
  { title: "Successful", value: 200, change: "+55%", color: "green" },
  { title: "Cancelled", value: 51, change: "+5%", color: "green" },
];

const OrdersTable = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [search, setSearch] = useState("");
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("id");
  const [entriesPerPage, setEntriesPerPage] = useState(5);

  const handleChangePage = (event, newPage) => setPage(newPage);

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSort = (property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const filteredOrders = orders.filter((order) =>
    Object.values(order)
      .join(" ")
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const sortedOrders = filteredOrders.sort((a, b) => {
    if (order === "asc") {
      return a[orderBy] > b[orderBy] ? 1 : -1;
    }
    return a[orderBy] < b[orderBy] ? 1 : -1;
  });

  const paginatedOrders = sortedOrders.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <Box
      sx={{
        padding: '20px 42px',
        margin: 0,
        marginTop: '64px',
        marginLeft: '191px',
        backgroundColor: '#F5F6FA',
        minHeight: '100vh',
        boxSizing: 'border-box',
        overflow: 'hidden',
        width: 'calc(101vw - 229px)',
        fontFamily: ' sans-serif' 
      }}
    >
      <Box display="flex" justifyContent="space-between" gap={2} mb={4}>
        {summary.map((item, index) => (
          <Card
            key={index}
            sx={{
              flex: 1,
              borderRadius: '8px',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
              width: "200px",
              height: "120px",
              padding: "6px"
            }}
          >
            <CardContent sx={{ textAlign: "left" }}>
              <Typography variant="subtitle2" color="text.secondary">
                {item.title}
              </Typography>
              <Typography variant="h5" fontWeight="bold" sx={{ mb: 1 }}>
                {item.value}
              </Typography>
              <Box
                sx={{
                  width: "calc(120% + 22px)", // Add extra width to compensate for padding (6px on each side)
                  height: "1px",
                  backgroundColor: "#d3d3d3",
                  marginTop: "4px",
                  marginLeft: "-22px",
                  marginBottom: "8px"
                }}
              />
              <Typography variant="caption" fontWeight="bold" sx={{ fontSize: "14px" }}>
                <Box component="span" sx={{ color: item.change.startsWith("+") ? "green" : "red" }}>
                  {item.change}
                </Box>{" "}
                <Box component="span" sx={{ color: "text.secondary", fontWeight: "normal" }}>
                  than last week
                </Box>
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>

      {/* Orders Section with Single Card Styling */}
      <Card
        sx={{
          backgroundColor: "white",
          borderRadius: "8px",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          padding: "24px",
          marginTop: "16px",
        }}
      >
        <CardContent>
          <Typography component="span"  color="#344767" mb={1}  sx={{  fontFamily: ' sans-serif',fontWeight: 'bold',fontSize: '20px', }}>
            Orders Table
          </Typography>
          <Typography variant="body2" mb={2}>
            View all the orders
          </Typography>

          {/* Entries Per Page Selector and Search Bar */}
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            mb={2}
          >
            {/* Entries Per Page Selector */}
            <Box display="flex" alignItems="center" gap={1}>
              <TextField
                select
                value={entriesPerPage}
                onChange={(e) => setEntriesPerPage(Number(e.target.value))}
                size="small"
                variant="outlined"
                sx={{ width: 80 }} // Adjust width for consistent size
              >
                {[5, 10, 15].map((num) => (
                  <MenuItem key={num} value={num}>
                    {num}
                  </MenuItem>
                ))}
              </TextField>
              <Typography variant="body2">Entries per page</Typography>
            </Box>

            {/* Search Bar */}
            <Box display="flex" justifyContent="space-between" mb={2}>
              <TextField
                placeholder="Search here"
                variant="outlined"
                size="small"
                onChange={(e) => setSearch(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
                sx={{ maxWidth: 300, ml: 'auto' }} // Add margin-left to push it to the right
              />
            </Box>
          </Box>
          <TableContainer
            component={Paper}
            elevation={0}
            sx={{
              width: '110%', // Match the full width of the parent container
              marginX: '-60px', // Extend width by removing horizontal margin (to align with the Card padding)
              padding: '0 24px', // Adjust padding for alignment if needed
              overflowX: 'auto', // Add horizontal scrolling for smaller screens
            }}
          >
            <Table
              sx={{
                borderCollapse: 'collapse', // Ensures no gaps between cells
                width: '100%', // Ensure table fills the container
              }}
            >
              <TableHead sx={{ borderBottom: "2px solid #d3d3d3", }}>
                <TableRow
                  sx={{
                    '& > th': {
                      borderBottom: 'none', // Removes bottom border from header cells
                    },
                  }}
                >
                  {[
                    "ID",
                    "Customer Name",
                    "Product",
                    "Categories",
                    "Start at",
                    "Rate",
                    "Time",
                    "Price",
                    "Status",
                  ].map((header, index) => (
                    <TableCell
                      key={index}
                      onClick={() => handleSort(header.toLowerCase())}
                      sx={{
                        cursor: "pointer",
                        fontWeight: "bold",
                        border: 'none', // Removes all borders
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-evenly",
                        }}
                      >
                        <span>{header}</span>
                        <img
                          src={ArrowIcon} // Replace with the actual path to your rectangular icon
                          alt="icon"
                          style={{
                            width: '10px', // Adjust icon size
                            height: '20px',
                            marginRight: '4px',
                          }}
                        />
                      </div>
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>

              <TableBody>
                {paginatedOrders.map((row, index) => (
                  <TableRow
                    key={index}
                    sx={{
                      '& > td': {
                        borderBottom: 'none', // Removes bottom border from body cells
                      },
                    }}
                  >
                    <TableCell style={{ display: 'flex', alignItems: 'center', border: 'none' }}>
                      <img
                        src={Rectangle} // Replace IconPath with the actual path or variable for your icon
                        alt="icon"
                        style={{
                          width: '26px',  // Adjust the size of the icon
                          height: '26px',
                          marginRight: '4px', // Add some space between the icon and the ID
                        }}
                      />
                      {row.id}
                    </TableCell>
                    <TableCell sx={{ border: 'none' }}>{row.name}</TableCell>
                    <TableCell sx={{ border: 'none' }}>{row.product}</TableCell>
                    <TableCell sx={{ border: 'none' }}>{row.category}</TableCell>
                    <TableCell sx={{ border: 'none' }}>{row.time}</TableCell>
                    <TableCell
                      sx={{
                        color: row.rate > 0 ? "green" : row.rate < 0 ? "red" : "inherit",
                        fontWeight: "bold",
                        border: 'none',
                      }}
                    >
                      {row.rate}
                    </TableCell>
                    <TableCell sx={{ border: 'none' }}>{row.duration}</TableCell>
                    <TableCell sx={{ border: 'none' }}>{row.price}</TableCell>
                    <TableCell sx={{
                      border: 'none', color: row.status === "completed" ? "green" :
                        row.status === "halted" ? "red" :
                          row.status === "ongoing" ? "orange" : "inherit",
                    }}>{row.status}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          {/* Pagination and Showing Entries Information */}
          <Box mt={2} display="flex" justifyContent="space-between" alignItems="center">
            {/* Typography on the Left */}
            <Typography variant="body2">
              Showing {page * rowsPerPage + 1} to{" "}
              {Math.min((page + 1) * rowsPerPage, filteredOrders.length)} of{" "}
              {filteredOrders.length} entries
            </Typography>

            {/* Pagination on the Right */}
            <TablePagination
              component="div"
              count={filteredOrders.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Box>

        </CardContent>
      </Card>
    </Box>
  );
};

export default OrdersTable;
