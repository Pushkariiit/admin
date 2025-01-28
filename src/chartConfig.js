// src/chartConfig.js

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    ArcElement, // Required for Pie charts
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  
  // Register the components
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    ArcElement, // For Pie charts
    Title,
    Tooltip,
    Legend
  );
  