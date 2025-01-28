import React, { useState } from "react";
import {
    Box,
    Grid,
    Card,
    Typography,
    TextField,
    Slider,
    Switch,
    FormControlLabel,
    ToggleButton,
    ToggleButtonGroup,
    Button,
} from "@mui/material";

const BargainingPriceRange = () => {
    const [bargaining, setBargaining] = useState("Normal");
    const [priceRange, setPriceRange] = useState([200, 500]);
    const [minPrice, setMinPrice] = useState(200);
    const [setForAll, setSetForAll] = useState(true);
    const [percentage] = useState({ increase: "+2.7%", decrease: "-2.7%" });

    // Price Slider Update
    const handlePriceChange = (event, newValue) => {
        setPriceRange(newValue);
    };

    const handleBargainingChange = (event, newBargaining) => {
        if (newBargaining !== null) setBargaining(newBargaining);
    };

    const handleSwitchChange = () => {
        setSetForAll(!setForAll);
    };

    return (

        <Box display="flex" justifyContent="center">
            <Card
                sx={{
                    width: "100%",
                    maxWidth: "900px",
                    backgroundColor: "transparent", // Make the background transparent
                    boxShadow: "none", // Remove the shadow if needed
                    fontFamily: 'sans-serif'
                }}
            >
                {/* Header Section */}
                <Grid container spacing={2} alignItems="center">
                    <Grid item xs={6}>
                        <Typography  color="#344767" fontWeight="bold" sx={{ fontFamily: ' sans-serif', fontWeight: 'bold', fontSize: '18px', mb: 2 }}>
                            For all the products
                        </Typography>
                        <Typography variant="subtitle2">
                            Set the minimum and maximum values for all the products.
                        </Typography>
                    </Grid>
                    <Grid item xs={6} textAlign="right">
                        <Typography variant="h6" fontWeight="bold" sx={{ mr: 4 }}>
                            Bargaining behaviour
                        </Typography>
                        <ToggleButtonGroup
                            value={bargaining}
                            exclusive
                            onChange={handleBargainingChange}
                            sx={{
                                mt: 2,
                                gap: 2, // Adds space between buttons
                                "& .MuiToggleButton-root": {
                                    borderRadius: "8px",
                                    textTransform: "none",
                                    padding: "6px 16px",
                                    fontSize: "0.875rem",
                                    "&.Mui-selected": {
                                        backgroundColor: "#000",
                                        color: "#fff",
                                    },
                                },
                            }}
                        >
                            <ToggleButton value="Low">Low</ToggleButton>
                            <ToggleButton value="Normal">Normal</ToggleButton>
                            <ToggleButton value="High">High</ToggleButton>
                        </ToggleButtonGroup>
                    </Grid>
                </Grid>

                <Grid container spacing={2} alignItems="center" sx={{ mb: 2 }}>
                    {/* Min Price */}
                    <Grid item xs={6} sm={4}>
                        <Typography variant="subtitle2" sx={{ mb: 1 }}>
                            Set the min price of the product
                        </Typography>
                        <TextField
                            type="number"
                            fullWidth
                            label="Min Price"
                            value={minPrice}
                            onChange={(e) => setMinPrice(e.target.value)}
                        />
                        {/* Percentage Display */}
                        <Box
                            display="flex"
                            justifyContent="flex-start"
                            gap={20} // Adjust gap between percentages
                            mt={1} // Margin top for spacing below the TextField
                            alignItems="center"
                        >
                            {/* Increase percentage */}
                            <Typography sx={{ color: "green", fontWeight: "bold" }}>
                                {`${percentage.increase}`}
                            </Typography>

                            {/* Decrease percentage */}
                            <Typography sx={{ color: "red", fontWeight: "bold" }}>
                                {`${percentage.decrease}`}
                            </Typography>
                        </Box>
                    </Grid>

                    {/* Max Price */}
                    <Grid item xs={6} sm={4} sx={{ mt: -4 }}>
                        <Typography variant="subtitle2" sx={{ mb: 1 }}>
                            Changing max price is unavailable right now
                        </Typography>
                        <TextField
                            label="Same as product price"
                            disabled
                            fullWidth
                            sx={{
                                backgroundColor: "#D9D9D9", // Custom background color
                                "& .MuiInputBase-root": {
                                    backgroundColor: "#D9D9D9", // Ensures consistent styling for the input area
                                },
                            }}
                        />
                    </Grid>
                </Grid>

                {/* Product Count and Slider */}
                <Grid container spacing={2} alignItems="center">
                    {/* Switch and Label */}
                    <Grid item xs={6}>
                        <FormControlLabel
                            control={
                                <Switch
                                    checked={setForAll}
                                    onChange={handleSwitchChange}
                                />
                            }
                            label="Set for all products"
                        />
                    </Grid>

                    {/* Flex Container for Label and TextField */}
                    <Grid item xs={6}>
                        <Grid container alignItems="center" justifyContent="flex-center" spacing={2}>
                            {/* Label */}
                            <Grid item>
                                <Typography variant="body1">
                                    Select products up to:
                                </Typography>
                            </Grid>

                            {/* TextField */}
                            <Grid item>
                                <TextField
                                    type="number"
                                    size="small"
                                    defaultValue={100}
                                    disabled={!setForAll}
                                    style={{ width: 120 }} // Adjust width if needed
                                    inputProps={{
                                        step: 10, // Increment/Decrement step
                                        min: 10,  // Minimum value
                                        max: 200, // Maximum value
                                    }}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

                <Box mt={1}>
                    <Typography variant="body1" fontWeight="bold" sx={{ mb: 1 }}>
                        Select products priced between
                    </Typography>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}
                    >
                        {/* Slider Section */}
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                width: "30%",
                            }}
                        >
                            <Slider
                                value={priceRange}
                                onChange={handlePriceChange}
                                valueLabelDisplay="auto"
                                min={100}
                                max={1000}
                                sx={{
                                    width: "100%",
                                }}
                            />
                            <Box display="flex" justifyContent="space-between">
                                <Typography variant="body2">${priceRange[0]}</Typography>
                                <Typography variant="body2">${priceRange[1]}</Typography>
                            </Box>
                        </Box>

                        {/* Save Button */}
                        <Button
                            variant="contained"
                            sx={{
                                backgroundColor: "#000",
                                padding: "6px 20px",
                                color: "#fff",
                                textTransform: "none",
                                "&:hover": { backgroundColor: "#333" },
                            }}
                        >
                            Save
                        </Button>
                    </Box>
                </Box>
            </Card>
        </Box>
    );
};

export default BargainingPriceRange;    