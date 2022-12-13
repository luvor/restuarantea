import { createSlice } from '@reduxjs/toolkit'
import tables from '../../data/tables'
import menu from '../../data/menu'

const mainSlice = createSlice({
  name: 'main',
  initialState: {
    tables: tables,
    tableID: null,
    menu: menu,
    search: {
      searchQuery: '',
      searchResults: [],
      searchResultsCount: 0,
      searchResultsPage: 0,
      searchResultsPerPage: 0,
    },
    favorites: [],
  },
  reducers: {
    setSearchQuery(state, action) {
      state.search.searchQuery = action.payload
    },
    setSearchResults(state, action) {
      state.search.searchResults = action.payload
    },
    setSearchResultsCount(state, action) {
      state.search.searchResultsCount = action.payload
    },
    setSearchResultsPage(state, action) {
      state.search.searchResultsPage = action.payload
    },
    setSearchResultsPerPage(state, action) {
      state.search.searchResultsPerPage = action.payload
    },

    setTableID(state, action) {
      state.tableID = action.payload
    },

    setFavorites(state, action) {
      state.favorites = action.payload
    },
    pushFavorite(state, action) {
      state.favorites.push(action.payload)
    },
    removeFavorite(state, action) {
      state.favorites = state.favorites.filter((item) => item !== action.payload)
    },
  },
})

export const { setSearchQuery, setSearchResults, setSearchResultsCount, setSearchResultsPage, setSearchResultsPerPage, setTableID, setFavorites, pushFavorite, removeFavorite } = mainSlice.actions

export default mainSlice.reducer
