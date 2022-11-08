const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favorites: [],
			peopleList: []
		},
		actions: {
	
			setFavorites: name => {
				const store = getStore();
				setStore({ favorites: [...store.favorites, name] });
			},
			deleteFavorites: name => {
				const favs = getStore().favorites;
				favs.splice(name, 1);
				setStore({ favorites: favs });
				localStorage.setItem(
				  "favorites",
				  JSON.stringify(getStore().favorites)
				);
			  }
		}
	};
};

export default getState;
