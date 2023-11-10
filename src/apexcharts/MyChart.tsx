import Chart from "react-apexcharts";
import "./MyChart.css";

export default function MyChart() {
    const series = [
        {
            name: "Miss rate",
            data: [0.02, 0.08, 0.06, 0.08, 0.02, 0.05]
        },
        {
            name: "average reaction rate",
            data: [5000, 2684, 3289, 2324, 2123, 2535]
        },
    ];

    const options: ApexCharts.ApexOptions = { //型大事！プロパティがミスってるとコンパイラがエラー吐いてくれる！
        title: {
            text: "Miss rate & Average reaction rate",
            align: "center",
            style: {
                fontSize: "26px",
            }
        },
        colors: ["#aaaaff", "#88ff88"],
        theme: {
            palette: "palette1",
        },

        xaxis: {
            categories: ["CD", "CE", "CF", "CG", "CA", "CB"],
            title: {
                text: "Interval"
            },
        },
        yaxis: [
            {
                title: {
                    text: "Miss rate"
                },
                max: 0.08
            },
            {
                opposite: true,
                title: {
                    text: "Average reaction rate"
                },
                max: 5000,
                decimalsInFloat: 0
            },
        ]
    };

    return (
        <div className="my-chart">
            <Chart
                type="bar"
                width="100%"
                height="100%"
                series={series}
                options={options}
            />
        </div>
    )
}
