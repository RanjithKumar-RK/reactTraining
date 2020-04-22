import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import WorkIcon from '@material-ui/icons/Work';
import TrackChangesIcon from '@material-ui/icons/TrackChanges';

export default function FirstCard(props) {
    const { data } = props;

    return (
        <div style={{ flex: 1 }}>
            <Card>
                <CardContent>
                    <div style={{ height: "120px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                        <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                            <WorkIcon style={{ fontSize: 26, color: "lightblue", marginRight: "10px" }} />
                            <div style={{ fontSize: 26, fontWeight: 700, paddingRight: "10px" }} >{data.job}</div><div>Job Roles</div>
                        </div>
                        <div style={{ border: "0.1px solid grey", margin: "10px 0px 10px 0px" }} />
                        <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                            <TrackChangesIcon style={{ fontSize: 26, color: "lightblue", marginRight: "10px" }} />
                            <div style={{ fontSize: 26, fontWeight: 700, paddingRight: "10px" }} >{data.opening}</div><div>Open Positions</div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}