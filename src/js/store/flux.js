const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favorites: [],
			favoritess: [],
			peopleList: []
		},
		actions: {
	
			setFavorites: name => {
				const store = getStore();
				setStore({ favorites: [...store.favorites, name] });
			},
			setFavoritess: name => {
				const store = getStore();
				setStore({ favoritess: [...store.favoritess, name] });
			},
			deleteFavorites: name => {
				const favs = getStore().favorites;
				favs.splice(name, 1);
				setStore({ favorites: favs });
				localStorage.setItem(
				  "favorites",
				  JSON.stringify(getStore().favorites)
				);
			  },
			  deleteFavoritess: name => {
				const favs = getStore().favoritess;
				favs.splice(name, 1);
				setStore({ favoritess: favs });
				localStorage.setItem(
				  "favoritess",
				  JSON.stringify(getStore().favoritess)
				);
			  }
		}
	};
};

export default getState;

