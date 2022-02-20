import React, { useContext } from 'react';

import classes from './MeetupItem.module.css';
import Card from '../ui/Card';

import FavoriteContext from '../../store/Favorites-context';

function MeetupItem({ ...props }) {

    const { meetup } = props;

    const { title, address, description, image, id } = meetup;

    const favoritesCtx = useContext(FavoriteContext);

    const isItemFavorite = favoritesCtx.isFavorite(id);

    const handleFavoriteStatus = () => {
        if (isItemFavorite) {
            favoritesCtx.removeFavorite(id);
        } else {
            favoritesCtx.addFavorite({
                id: id,
                title: title,
                address: address,
                description: description,
                image: image
            });
        }
    }

    return (
        <Card>
            <li className={classes.item}>
                <div>
                    <img src={image} alt='logo' className={classes.image} />
                </div>
                <div className={classes.content}>
                    <h3>{title}</h3>
                    <address>{address}</address>
                    <p>{description}</p>
                </div>
                <div className={classes.actions}>
                    <button onClick={handleFavoriteStatus}>{isItemFavorite ? 'Remove from Favorites' : 'Add to Favorites'}</button>
                </div>
            </li>
        </Card>

    );
}

export default MeetupItem;