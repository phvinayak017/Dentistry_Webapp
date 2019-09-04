import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
var moment = require('moment');


const styles = {
    main: { marginLeft: "40%" },
    card: { display: 'flex', maxWidth: "400px", margin: '20px' },
    image: { height: '150px', width: "250px" },
    time: { marginTop: '65px', marginLeft: '50px', width: "250px" },
    heading: { marginLeft: "1%" }
}
export default class Doglist extends Component {
    getDisplayDate = date => {
        // current = new Date()
        // diff = Math.floor((current - date) / 1000)
        // if(diff<3600)
        var diff = moment(date).fromNow()
        return diff
    }

    render() {
        const { state } = this.props.location;
        console.log(state)
        return (
            <div>
                <h2 style={styles.heading}>Liked List </h2>
                {state.map((dog, id) => {
                    return (
                        <Card style={styles.card} >
                            <CardMedia
                                style={styles.image}
                                image={dog.url}
                            />
                            <p style={styles.time}> {this.getDisplayDate(dog.when)}</p>
                        </Card>
                    )
                })}
            </div>
        )
    }
}
