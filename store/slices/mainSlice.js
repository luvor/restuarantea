import { createSlice } from '@reduxjs/toolkit'

import food from '../../data/food.json'
import tables from '../../data/tables'

const mainSlice = createSlice({
  name: 'main',
  initialState: {
    tables: tables,
    tableID: null,
    menu: null,
    search: {
      searchQuery: '',
      searchResults: [],
      searchResultsCount: 0,
      searchResultsPage: 0,
      searchResultsPerPage: 0,
    },
    favorites: [],
    order: [],
    orderSum: 0,
  },
  reducers: {
    fetchMenu(state) {
      state.menu = food
    },

    addToOrder(state, action) {
      state.orderSum += action.payload.price
      state.order.push(action.payload)
    },
    removeFromOrder(state, action) {
      state.orderSum -= action.payload.price
      state.order = state.order.filter((item) => item.title !== action.payload.title)
    },
    clearOrder(state) {
      state.order = []
      state.orderSum = 0
    },

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

export const {
  setSearchQuery,
  setSearchResults,
  setSearchResultsCount,
  setSearchResultsPage,
  setSearchResultsPerPage,
  setTableID,
  setFavorites,
  pushFavorite,
  removeFavorite,
  fetchMenu,
  addToOrder,
  removeFromOrder,
  clearOrder,
} = mainSlice.actions

export default mainSlice.reducer
