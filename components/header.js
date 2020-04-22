import React from 'react';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import TabPanel from './tabPanel';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import '../App.css';
import Search from '@material-ui/icons/Search';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import NativeSelect from '@material-ui/core/NativeSelect';
import TableCard from './tableCard';
import FirstCard from './firstCard';
import SecondCard from './secondCard';
import ThirdCard from './thirdCard';


class Header extends React.Component {
    constructor(props) {
        super(props);
        this.mounted = false;
        this.state = {
            activeIndex: 0,
            currentFilter: "jobRoles",
            loader: true,
            errorStatus: false,
            filterValue: "",
            renderData: {}
        }
        this.response = {}
    }

    changeTab = (event, newValue) => {
        if (this.mounted) {
            this.setState({
                activeIndex: newValue
            })
        }
    };

    changeFilter = (event) => {
        if (this.mounted) {
            this.setState({
                currentFilter: event.target.value
            })
        }
    }

    changeFilterValue = (event) => {
        if (this.mounted) {
            this.setState({
                filterValue: event.target.value
            }, () => {
                this.filterData();
            })
        }
    }

    filterData = () => {
        var temp = []
        if (this.state.filterValue != "" || null) {
            this.response.jobs.map((jobsList) => {
                if (jobsList.role.toLowerCase().includes(this.state.filterValue.toLowerCase())) { temp.push(jobsList) }
            })
        }
        else {
            temp = this.response.jobs
        }
        var tempState = { ...this.response };
        tempState.jobs = temp;
        this.setState({
            renderData: tempState
        })
    }

    componentDidMount = async () => {
        this.mounted = true;
        if (this.mounted) {
            var tableData = {}
            tableData = await this.callApi('http://localhost:3000/active');
            console.log(tableData)
            if (tableData.status) {
                this.response = tableData.data;
                this.setState({
                    renderData: tableData.data,
                })
            }
            else if (!tableData.status) {
                this.setState({
                    errorStatus: true,
                })
            }
            var cardData = {}
            cardData = await this.callApi('http://localhost:3000/cardData');
            if (cardData.status) {
                this.cardDetails = cardData.data;
            }
            else if (!cardData.status) {
                this.setState({
                    errorStatus: true,
                })
            }
            this.setState({
                loader: false
            })
        }
    }

    callApi = (url) => {
        return fetch(url)
            .then(res => res.json())
            .then(
                (result) => {
                    return {
                        status: true, data: result
                    }
                },
                (error) => {
                    return {
                        status: false
                    }
                }
            )
    }

    componentWillUnmount() {
        this.mounted = false;
    }

    render() {
        return (
            <div>
                <Tabs
                    value={this.state.activeIndex}
                    indicatorColor="primary"
                    textColor="primary"
                    onChange={this.changeTab}
                >
                    <Tab label="Dashboard" />
                    <Tab label="Assesments" />
                    <Tab label="Candidates" />
                </Tabs>

                <TabPanel value={this.state.activeIndex} index={0} style={{ backgroundColor: "#D3D3D3" }}>
                    {!this.state.loader &&
                        <>
                            <div style={{ marginBottom: "20px", display: "flex", flexDirection: "row", flex: 1, justifyContent: "space-between" }}>
                                <div style={{ display: "flex", flex: 0.29 }}>
                                    <FirstCard data={this.cardDetails[0]} />
                                </div>
                                <div style={{ display: "flex", flex: 0.39 }}>
                                    <SecondCard data={this.cardDetails[1]} />
                                </div>
                                <div style={{ display: "flex", flex: 0.29 }}>
                                    <ThirdCard data={this.cardDetails[2]} />
                                </div>
                            </div>
                            <Card>
                                <CardContent>
                                    <div style={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center"
                                    }}
                                    >
                                        <span>
                                            <b>Job Roles</b>
                                        </span>
                                        <span style={{
                                            border: "1px solid black",
                                            borderRadius: "20px",
                                            padding: "5px",
                                            display: "flex",
                                            alignItems: "center"
                                        }}>
                                            <Search style={{ color: "grey" }} />
                                            <span style={{ marginRight: "5px" }}></span>
                                            <input placeholder="Search" style={{ outline: "none", border: "none" }} type="text" value={this.state.filterValue} onChange={this.changeFilterValue}></input>
                                            <span style={{ marginRight: "5px" }}></span>
                                     |
                                    <span style={{ marginRight: "5px" }}></span>
                                            <NativeSelect
                                                value={this.state.currentFilter}
                                                onChange={this.changeFilter}
                                                inputProps={{ border: 0, outline: 0 }}
                                            >
                                                <option value={"jobRoles"}>Job Roles</option>
                                                <option value={"invited"}>Invited Count</option>
                                            </NativeSelect>
                                        </span>
                                    </div>

                                    <div>
                                        {this.state.renderData != null &&
                                            <div>
                                                <span>
                                                    Active ({this.response.count})
                                            </span>
                                                {
                                                    this.state.renderData.jobs.length > 0 &&
                                                    this.state.renderData.jobs.map((value, index) => {
                                                        return (
                                                            <TableCard jobDetails={value} />
                                                        );
                                                    })
                                                }
                                                {
                                                    this.state.renderData.jobs.length == 0 &&
                                                    <div>No Result found</div>
                                                }
                                            </div>
                                        }
                                    </div>
                                </CardContent>
                            </Card>
                        </>
                    }
                </TabPanel>
                <TabPanel value={this.state.activeIndex} index={1}>Assesment Page</TabPanel>
                <TabPanel value={this.state.activeIndex} index={2}>Candidates Page</TabPanel>

            </div >
        )
    };
}

export default Header;