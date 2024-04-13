import { configureStore } from '@reduxjs/toolkit'
import moviereducer from "./reducer/MovieSlice"
import tvreducer from "./reducer/TVSlice"
import personreducer from "./reducer/PeopleSlice"

export const store = configureStore({
  reducer: {
    movie : moviereducer,
    tv: tvreducer,
    person : personreducer
  },
})