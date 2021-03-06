import React from 'react'
import '../MovieCard.css';
import { Card } from "react-bootstrap";
import StarRatingComponent from 'react-star-rating-component';
import '../MovieCard.css';
const MovieCard = ({ movie }) => {
    return (
        <div className="div">
            <div className="c">
            <Card style={{ width: '19rem' , height: '570px',marginLeft:'0'}} >
                    <Card.Img  variant="top" src={movie.posterURL}  style={{ height: "300px" ,  width: '19rem'}} />
                    <Card.Body>
                    <Card.Title>{movie.title}</Card.Title>
                    <Card.Text>
                        {movie.description}
                    </Card.Text>        
                    <Card.Text>
                        <StarRatingComponent 
                        name={"name"}
                        value={movie.rating}
                        editing={false}
                        starCount={5}  
                        />
                    </Card.Text>
                    </Card.Body>
            </Card>
           </div>
        </div>
    )
}

export default MovieCard