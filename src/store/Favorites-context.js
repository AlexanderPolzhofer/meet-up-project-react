import { createContext, useState } from 'react';

const FavoriteContext = createContext({
    favorites: [],
    totalFavorites: 0
});

export const FavoritesContextProvider = (props) => {
    const { children } = props;
    const [userFavorites, setUserFavorites] = useState([]);

    const handleAddFavorite = () => { };

    const handleRemoveFavorite = () => { };

    const handleItemIsFavorite = () => { };


    return (<FavoriteContext.Provider>
        {children}
    </FavoriteContext.Provider>);
};

export default FavoriteContext;