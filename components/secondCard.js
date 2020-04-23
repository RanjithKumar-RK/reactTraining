import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import {
    Chart,
    PieSeries,
    Legend,
    Title
} from '@devexpress/dx-react-chart-material-ui';
import { Palette } from '@devexpress/dx-react-chart';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';

export default function SecondCard(props) {
    const { data } = props;
    console.log(data.chartData);
    const schemeColors = ["red", "green", "black", "blue", "yellow", "pink", "orange"];

    return (
        <div style={{ flex: 1 }}>
            <Card>
                <CardContent>
                    <div style={{ height: "120px", display: "flex", flexDirection: "row" }}>
                        <Chart
                            data={data.chartData}
                            width={150}
                            height={150}
                        >
                            <Palette scheme={schemeColors} />
                            <PieSeries
                                valueField="count"
                                argumentField="tag"
                                innerRadius={0.5}
                            />
                        </Chart>
                        <div style={{ marginLeft: "20px", marginRight: "20px" }}>
                            <div style={{ display: "flex", alignItems: "center" }}>
                                <PersonOutlineOutlinedIcon style={{ fontSize: 26, color: "#1589FF", paddingRight: "5px" }} />
                                <span style={{ fontSize: 24, fontWeight: 700, paddingRight: "5px" }}>{data.total}</span>  <span style={{ fontWeight: 200 }}>Applicants</span>
                            </div>
                            <div style={{ display: "flex", flexDirection: "row", flex: 1, flexWrap: "wrap", paddingTop: "20px", paddingBottom: "20px" }}>
                                {data.chartData.map((values, index) => {
                                    return (
                                        <div style={{ display: "flex", flexDirection: "row", paddingRight: "10px", flex: 0.3, flexBasis: "auto", paddingBottom: "10px" }}>
                                            <div style={{ width: "2px", height: "20px", marginRight: "3px", backgroundColor: schemeColors[index] }} />
                                            <div style={{ fontSize: 16, fontWeight: 700, paddingRight: "5px" }} > {values.count} </div>
                                            <div style={{ fontSize: 14, fontWeight: 300 }}> {values.tag} </div>
                                        </div>
                                    )
                                })
                                }
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}