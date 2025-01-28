import React, { useState } from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
    Paper,
    Select,
    MenuItem,
    Pagination,
    TextField,
    Button,
    Grid,
    Box,
} from "@mui/material";

const InventoryTable = () => {
    const [entriesPerPage, setEntriesPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    const [minPrices, setMinPrices] = useState({});

    const data = Array.from({ length: 12 }, (_, index) => ({
        id: `#1042${index + 1}`,
        price: "$140.69",
        status: index % 2 === 0 ? "Active" : "Inactive",
        category: "Shirts",
        product: "Nike Sport V2",
        behavior: index % 3 === 0 ? "Low" : index % 3 === 1 ? "High" : "Normal",
    }));

    const totalPages = Math.ceil(data.length / entriesPerPage);
    const startIndex = (currentPage - 1) * entriesPerPage;
    const currentData = data.slice(startIndex, startIndex + entriesPerPage);

    const handleSetMinPrice = (id) => {
        const newPrice = prompt(`Set minimum price for ${id}:`);
        if (newPrice && !isNaN(newPrice)) {
            setMinPrices((prev) => ({
                ...prev,
                [id]: `$${parseFloat(newPrice).toFixed(2)}`,
            }));
        }
    };
    // Function to handle Save action
    const handleSaveMinPrice = (id) => {
        if (minPrices[id]) {
            alert(`Min price for ${id} has been saved: ${minPrices[id]}`);
        } else {
            alert(`Please set a min price for ${id} before saving.`);
        }
    };

    // Function to handle Delete action
    const handleDeleteMinPrice = (id) => {
        setMinPrices((prev) => ({
            ...prev,
            [id]: undefined, // Remove the min price for the specific ID
        }));
        alert(`Min price for ${id} has been reset to default.`);
    };


    return (
        <Paper className="p-4">
            <Typography color="#344767" sx={{ fontFamily: ' sans-serif', fontSize: '18px', pt: 2, ml: 3, fontWeight: "bold" }}>
                Inventory Individual Product
            </Typography>

            <div style={{ margin: "20px" }}>
                {/* Grid layout for Entries per page and Search */}
                <Grid container spacing={2}>
                    <Grid item>
                        <TextField
                            select
                            value={entriesPerPage}
                            onChange={(e) => setEntriesPerPage(Number(e.target.value))}
                            size="small"
                            variant="outlined"
                            sx={{ width: 60 }}
                        >
                            {[5, 10, 15].map((num) => (
                                <MenuItem key={num} value={num}>
                                    {num}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Grid>
                    <Grid item>
                        <Typography variant="body2">Entries per page</Typography>
                    </Grid>

                    <Grid item xs={6} container justifyContent="flex-end">
                        <TextField
                            label="Search here"
                            variant="outlined"
                            size="small"
                            sx={{ width: 300 }}
                        />
                    </Grid>
                </Grid>
            </div>

            <TableContainer
                component={Paper}
                sx={{
                    boxShadow: 'none', // Removes the box shadow
                    borderRadius: '0', // Removes the border radius
                }}
            >
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ px: 1 }}>ID</TableCell>
                            <TableCell sx={{ px: 1 }}>Default Price</TableCell>
                            <TableCell sx={{ px: 1 }}>Status</TableCell>
                            <TableCell sx={{ px: 1 }}>Category</TableCell>
                            <TableCell sx={{ px: 1 }}>Product</TableCell>
                            <TableCell sx={{ px: 1 }}>Behavior</TableCell>
                            <TableCell sx={{ px: 1 }}>Set Min Price</TableCell>
                            <TableCell sx={{ px: 1 }}>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {currentData.map((item, idx) => (
                            <TableRow
                                key={idx}
                                sx={{
                                    "&:last-child td, &:last-child th": { border: 0 },
                                    px: 0, // Removes padding along the x-axis
                                }}
                            >
                                <TableCell sx={{ px: 1 }}>{item.id}</TableCell>
                                <TableCell sx={{ px: 1 }}>{item.price}</TableCell>
                                <TableCell sx={{ px: 1 }}>
                                    <Button
                                        variant="outlined"
                                        color={item.status === "Active" ? "success" : "error"}
                                        size="small"
                                    >
                                        {item.status}
                                    </Button>
                                </TableCell>
                                <TableCell sx={{ px: 1 }}>{item.category}</TableCell>
                                <TableCell sx={{ px: 1 }}>{item.product}</TableCell>
                                <TableCell sx={{ px: 1 }}>
                                    <Select
                                        value={item.behavior}
                                        size="small"
                                        variant="outlined"
                                        style={{ width: 120 }}
                                    >
                                        {[{ label: "Low", value: "Low" }, { label: "High", value: "High" }, { label: "Normal", value: "Normal" }].map((opt) => (
                                            <MenuItem key={opt.value} value={opt.value}>
                                                {opt.label}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </TableCell>
                                <TableCell sx={{ px: 1 }}>
                                    <Button
                                        variant="outlined"
                                        size="small"
                                        onClick={() => handleSetMinPrice(item.id)}
                                    >
                                        {minPrices[item.id] || "Set min price"}
                                    </Button>
                                </TableCell>
                                <TableCell sx={{ px: 1 }}> {/* Actions Column */}
                                    <Box display="flex" gap={1}>
                                        {/* Save Button */}
                                        <Button
                                            variant="contained"
                                            size="small"
                                            sx={{ textTransform: "none", backgroundColor: "green", color: "#fff" }}
                                            onClick={() => handleSaveMinPrice(item.id)} // Save Action
                                        >
                                            Save
                                        </Button>

                                        {/* Delete Button */}
                                        <Button
                                            variant="contained"
                                            color="error"
                                            size="small"
                                            sx={{ textTransform: "none" }}
                                            onClick={() => handleDeleteMinPrice(item.id)} // Delete Action
                                        >
                                            Delete
                                        </Button>
                                    </Box>
                                </TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <Grid container justifyContent="space-between" alignItems="center" p={4}>
                <Grid item>
                    <Typography variant="body2" color="textSecondary">
                        {`Showing ${startIndex + 1} to ${Math.min(startIndex + entriesPerPage, data.length)} of ${data.length} entries`}
                    </Typography>
                </Grid>

                <Grid item>
                    <Pagination
                        count={totalPages}
                        page={currentPage}
                        onChange={(e, value) => setCurrentPage(value)}
                        color="primary"
                    />
                </Grid>
            </Grid>
        </Paper>
    );
};

export default InventoryTable;
