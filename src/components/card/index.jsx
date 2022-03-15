import React from 'react'
import PropTypes  from 'prop-types';
import muonroimasaocon from '../../asset/imgSong/muonroimasaocon.png';
import './card.scss';
// Card.protoType = {
//     infoCard: PropTypes.array,
// };


// Card.defaultProps = {
//     infoCard: [],
// };

function Card({infoCard}) {

    console.log(infoCard);
    // const {infoCard} = props;
    
    
    return (
           
        <div className='card'>
            <a href="" className="linkSong">
            <div className="childCard">
                <div className="viewSong">
                        <p>{infoCard.viewSong}</p>
                    </div>
                    <div className="imgSong">
                        <img src={infoCard.imgSong} alt={infoCard.imgSong} />
                    </div>
                    <div className="nameSong">
                        <span>{infoCard.nameSong}</span>
                    </div>
                    <div className="authorSong">
                        <span>{infoCard.authorSong}</span>
                    </div>
            </div>
            </a>
        </div>
      )
}

export default Card;




