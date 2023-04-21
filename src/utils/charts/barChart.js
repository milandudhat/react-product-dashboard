import React from 'react'
import Box from '@mui/material/Box'
import Chart from "react-google-charts";


const BarChart = () => {
    const responseArr = [
        ["Name", "Percentage", { role: "annotation" }, { role: "link" }],
        ["Google", 55, "55%", "https://www.google.com"],
        ["Facebook", 40, "40%", "https://www.facebook.com"],
        ["Amazon", 25, "25%", "https://www.amazon.com"],
        ["Microsoft", 30, "30%", "https://www.microsoft.com"]
    ];
    return (
        <>
            <Box sx={{ display: 'flex' }}>
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <h1>BarChart</h1>
                    <Chart
                        width={"600px"}
                        height={"300px"}
                        chartType="ColumnChart"
                        loader={<div>Loading Chart</div>}
                        data={responseArr}
                        options={{
                            chart: {
                                title: "Company Percentage",
                                subtitle: "Google, Facebook, Amazon, and Microsoft",
                            },
                            legend: { position: "none" },
                            vAxis: {
                                title: "Percentage",
                            },
                        }}
                        chartEvents={[{
                            eventName: "select", callback: ({ chartWrapper }) => {
                                const chart = chartWrapper.getChart(); const selection = chart.getSelection(); if (selection.length === 1) {
                                    const [selectedItem] = selection;
                                    const { row } = selectedItem;
                                    window.open(responseArr[row + 1][3], "_blank");
                                }
                            },
                        },
                        ]}
                    />
                </Box>
            </Box>
        </>
    )
}

export default BarChart