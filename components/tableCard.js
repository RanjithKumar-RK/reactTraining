import React from 'react';
import { Card, CardContent, IconButton } from '@material-ui/core';
import MailOutline from '@material-ui/icons/MailOutline';
import PersonOutline from '@material-ui/icons/PersonOutline';
import PauseCircleOutline from '@material-ui/icons/PauseCircleOutline';
import HowToRegOutlined from '@material-ui/icons/HowToRegOutlined';
import SentimentDissatisfiedOutlinedIcon from '@material-ui/icons/SentimentDissatisfiedOutlined';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import Brightness1Icon from '@material-ui/icons/Brightness1';


class TableCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            jobDetails: this.props.jobDetails
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            jobDetails: nextProps.jobDetails
        })
    }

    render() {
        return (
            <div style={{ marginBottom: "15px", marginTop: "15px" }}>
                <Card>
                    <CardContent>
                        <div style={{ display: "flex", flexDirection: "row", flex: 1, alignItems: "center" }}>
                            <div style={{ flex: 0.3 }}>
                                <div style={{ fontWeight: 700 }}>{this.state.jobDetails.role}</div>
                                <div style={{ fontWeight: 100 }}>{this.state.jobDetails.published}</div>
                            </div>
                            <div style={{ flex: 0.1, display: "flex", flexDirection: "column", alignItems: "center" }}>
                                <div>
                                    <div style={{ fontWeight: 700, display: "flex", alignItems: "center" }}><MailOutline style={{ color: "indigo", marginRight: "5px", fontSize: 18 }} />Invited</div>
                                    <div style={{ fontWeight: 100 }}>{this.state.jobDetails.invited}</div>
                                </div>
                            </div>
                            <span style={{ border: ".2px solid grey", height: "30px", }} />
                            <div style={{ flex: 0.15, display: "flex", flexDirection: "column", alignItems: "center" }}>
                                <div>
                                    <div style={{ fontWeight: 700, display: "flex", alignItems: "center" }}><HowToRegOutlined style={{ color: "lightblue", marginRight: "5px", fontSize: 18 }} />Shortlisted</div>
                                    <div style={{ fontWeight: 100, textAlign: "left" }}>{this.state.jobDetails.shortlisted}</div>
                                </div>
                            </div>
                            <span style={{ border: ".2px solid grey", height: "30px", }} />
                            <div style={{ flex: 0.1, display: "flex", flexDirection: "column", alignItems: "center" }}>
                                <div>
                                    <div style={{ fontWeight: 700, display: "flex", alignItems: "center" }}><PauseCircleOutline style={{ color: "orange", marginRight: "5px", fontSize: 18 }} />On Hold</div>
                                    <div style={{ fontWeight: 100 }}>{this.state.jobDetails.onhold}</div>
                                </div>
                            </div>
                            <span style={{ border: ".2px solid grey", height: "30px", }} />
                            <div style={{ flex: 0.1, display: "flex", flexDirection: "column", alignItems: "center" }}>
                                <div>
                                    <div style={{ fontWeight: 700, display: "flex", alignItems: "center" }}><SentimentDissatisfiedOutlinedIcon style={{ color: "red", marginRight: "5px", fontSize: 18 }} />Rejected</div>
                                    <div style={{ fontWeight: 100, textAlign: "left" }}>{this.state.jobDetails.rejected}</div>
                                </div>
                            </div>
                            <span style={{ border: ".2px solid grey", height: "30px", }} />
                            <div style={{ flex: 0.1, display: "flex", flexDirection: "column", alignItems: "center" }}>
                                <div>
                                    <div style={{ fontWeight: 700, display: "flex", alignItems: "center" }}><BookmarkBorderIcon style={{ color: "green", marginRight: "5px", fontSize: 18 }} />Hired</div>
                                    <div style={{ fontWeight: 100, textAlign: "left" }}>{this.state.jobDetails.hired}</div>
                                </div>
                            </div>
                            <span style={{ border: ".2px solid grey", height: "30px", }} />
                            <div style={{ flex: 0.15, display: "flex", justifyContent: "center", alignItems: "center" }}>
                                <div><IconButton><PersonOutline style={{ fontSize: 24 }} /></IconButton> </div>
                                <div><IconButton><Brightness1Icon style={{ fontSize: 7 }} /><Brightness1Icon style={{ fontSize: 7 }} /><Brightness1Icon style={{ fontSize: 7 }} /></IconButton></div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        );
    }
}

export default TableCard;