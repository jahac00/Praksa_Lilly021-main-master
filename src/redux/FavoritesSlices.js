import { createSlice } from '@reduxjs/toolkit';

const FavoritesSlices = createSlice({
  name: 'FavoritesSlices',
  initialState: {
    items: []
  },
  reducers: {
    addToFavorites: (state, action) => {
      let index = state.items.findIndex(t => t.idDrink === action.payload.idDrink);

      if (index === -1) 
        state.items = [...state.items, action.payload];
    },
    removeFromFavorites: (state, action) => {
      state.items = state.items.filter(t => t.idDrink !== action.payload.idDrink);
    },
    }
  }
);

export const { addToFavorites } = FavoritesSlices.actions;

export default FavoritesSlices.reducer;

