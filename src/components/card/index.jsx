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

    return (
           
        <div>
            {infoCard.map((info) =>
                
                <div className='card' key={info.id}>
                    {console.log(info)}
                    <a href="" className="linkSong">
                    <div className="childCard">
                        <div className="viewSong">
                                <p>{info.viewSong}</p>
                            </div>
                            <div className="imgSong">
                                <img src={info.imgSong} alt={info.imgSong} />
                            </div>
                            <div className="nameSong">
                                <span>{info.nameSong}</span>
                            </div>
                            <div className="authorSong">
                                <span>{info.authorSong}</span>
                            </div>
                    </div>
                    </a>
                </div>
            )}
        </div>
      )
}

export default Card;




