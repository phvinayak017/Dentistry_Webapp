import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Fab from '@material-ui/core/Fab';
import LikeIcon from '@material-ui/icons/Done';
import FavoriteIcon from '@material-ui/icons/Favorite';
import DislikeIcon from '@material-ui/icons/Clear';
import Axios from 'axios'


const styles = {
    main: { position: 'absolute', left: "50%", top: "15%" },
    card: { maxWidth: '650px', position: 'absolute', left: "40%", top: "25%" },
    image: { height: '450px', width: "500px" },
    btn: { margin: '20px', marginLeft: '80px' },
}

export default class Cards extends Component {
    static navigationOptions = {
        title: 'Home',
        headerStyle: {
            backgroundColor: '#536dfe',
        },
        headerTintColor: '#fff',
    }
    constructor(props) {
        super(props);
        this.state = {
            current: "https://images.dog.ceo/breeds/terrier-american/n02093428_8744.jpg",
            likedImages: [],
        }
    }

    componentDidMount() {
    }

    getNext = () => {
        const url = "https://dog.ceo/api/breeds/image/random"
        Axios
            .get(url)
            .then(({ data: { message: url } }) => {
                this.setState({
                    current: url,
                })
            })
    }

    handleLike = () => {
        this.setState(state => ({ likedImages: [...state.likedImages, { url: state.current, when: new Date() }] }))
        // console.log(time)
        this.getNext()
    }

    handleDislike = () => {
        this.getNext()
    }

    handleShow = () => {
        this.props.history.push('/doglist', this.state.likedImages)
    }

    render() {
        return (
            <div style={styles.root}>
                <h2 style={styles.main}>Dog Matcher</h2>
                <Card style={styles.card} >
                    <CardActionArea >
                        <CardMedia
                            style={styles.image}
                            image={this.state.current}
                        />
                    </CardActionArea>
                    <CardActions style={{ alignItems: "center" }}>
                        <Fab
                            style={styles.btn}
                            size="medium"
                            color="primary"
                            aria-label="add"
                            onClick={this.handleDislike}>
                            <DislikeIcon />
                        </Fab>
                        <Fab
                            style={styles.btn}
                            size="medium"
                            color="primary"
                            aria-label="add"
                            onClick={this.handleShow}>
                            <FavoriteIcon />
                        </Fab>
                        <Fab
                            style={styles.btn}
                            size="medium"
                            color="primary"
                            aria-label="add"
                            onClick={this.handleLike} >
                            <LikeIcon />
                        </Fab>
                    </CardActions>
                </Card>
            </div>
        )
    }
}
