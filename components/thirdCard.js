import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import StarRatings from 'react-star-ratings';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';


export default function ThirdCard(props) {
    const { data } = props;

    return (
        <div style={{ flex: 1 }}>
            <Card>
                <CardContent>
                    <div style={{ height: "120px" }}>
                        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                            <div style={{ fontSize: 16, fontWeight: 700, paddingBottom: "10px" }}>
                                MY TASKS
                        </div>
                            <div style={{ fontSize: 12, color: "#1589FF", fontWeight: 400 }}>
                                View All
                        </div>
                        </div>
                        <div>
                            {
                                data.tasks.map((task, index) => {
                                    return (
                                        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                                            <div>
                                                <div style={{ fontSize: 15, fontWeight: 700 }} >{task.taskName}</div>
                                                <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                                                    <div style={{ fontSize: 14, fontWeight: 100, paddingRight: "10px" }}>{task.taskDate}</div>
                                                    <StarRatings
                                                        rating={parseInt(task.rating)}
                                                        starDimension="14px"
                                                        starSpacing="1px"
                                                        starRatedColor="#FFD300"
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <NavigateNextIcon style={{ fontSize: 16, color: "#1589FF" }} />
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}