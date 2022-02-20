import React, { createContext, useState } from 'react';

const FavoriteContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorite: (favoriteMeetup) => { },
    removeFavorite: (meetupId) => { },
    isFavorite: (meetupId) => { }
});

export const FavoritesContextProvider = (props) => {
    const { children } = props;
    const [userFavorites, setUserFavorites] = useState([]);

    const handleAddFavorite = (favoriteMeetup) => {
        setUserFavorites((prevFavorites) => { return prevFavorites.concat(favoriteMeetup) })
    };

    const handleRemoveFavorite = (meetupId) => {
        setUserFavorites((prevFavorites) => {
            return prevFavorites.filter(meetup => meetup.id !== meetupId)
        })
    };

    const handleItemIsFavorite = (meetupId) => {
        return userFavorites.some(meetup => meetup.id === meetupId);
    };

    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addFavorite: handleAddFavorite,
        removeFavorite: handleRemoveFavorite,
        isFavorite: handleItemIsFavorite
    }

    return (<FavoriteContext.Provider value={context}>
        {children}
    </FavoriteContext.Provider>);
};

export default FavoriteContext;