import { createSlice } from "@reduxjs/toolkit";

const profile = {
    firstName: 'Thor', 
    lastName: 'Odinson', 
    handle: '@godOfThunder',
    profilePicture: '/images/thor.jpg', 	
    bannerPicture: '/images/banner.jpg',
    bio: 'Faculty, Software Engineer, AI, Space, and renewable enthusiast. Retuits and likes are not endorsements.',
    website: 'youtube.com/thor',
    location: 'Boston, MA',	
    dateOfBirth: '7/7/1968',	
    dateJoined: '4/2009',
    followingCount: 340,	
    followersCount: 223
  }


  const profileSlice = createSlice({
    name: "profile",
    initialState: profile,
    reducers: {
      updateProfile(state, action) {
        const newState = action.payload;
        state.firstName = newState.firstName;
        state.lastName = newState.lastName;
        state.dateOfBirth = newState.dateOfBirth;
        state.bio = newState.bio;
        state.website = newState.website;
        state.location = newState.location;
    },
    }
   });

   export const {updateProfile} = profileSlice.actions;
   export default profileSlice.reducer;
  