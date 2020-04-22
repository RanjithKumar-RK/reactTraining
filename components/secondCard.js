import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import StarRatings from 'react-star-ratings';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';


export default function SecondCard(props) {
    const { data } = props;

    return (
        <div style={{ flex: 1 }}>
            <Card>
                <CardContent>
                    <div style={{ height: "120px" }}>
                        
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}