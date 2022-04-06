import {
  configureStore,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";

//Firebase Key = AIzaSyAlPLoKE3UtWjgLJwbh9gSVHZv09g4Fcoc

//https://socio-app-e242a-default-rtdb.firebaseio.com/users.json

export const userLoginThunk = createAsyncThunk("/login", async (formData) => {
  console.log(formData.password);
  const response = await fetch(
    "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAlPLoKE3UtWjgLJwbh9gSVHZv09g4Fcoc",
    {
      method: "POST",
      body: JSON.stringify({
        email: formData.email,
        password: formData.password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const data = await response.json();
  console.log(data);

  const responseUser = await fetch(
    `https://socio-app-e242a-default-rtdb.firebaseio.com/users.json`
  );

  const dataUser = (await responseUser.json()) || [];
  console.log(dataUser);

  const user = dataUser.find((curr) => {
    if (curr.localId == data.localId) {
      return curr;
    }
  });
  console.log(user);
  return user;
});

export const createPostThunk = createAsyncThunk(
  "/createPost",
  async (formData) => {
    const response = await fetch(
      `https://socio-app-e242a-default-rtdb.firebaseio.com/posts.json`
    );

    const data = (await response.json()) || [];

    data.unshift(formData);

    const responseCreate = await fetch(
      `https://socio-app-e242a-default-rtdb.firebaseio.com/posts.json`,
      {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(data);
    return data;
  }
);

export const userSignupThunk = createAsyncThunk("/signup", async (formData) => {
  const response = await fetch(
    "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAlPLoKE3UtWjgLJwbh9gSVHZv09g4Fcoc",
    {
      method: "POST",
      body: JSON.stringify({
        email: formData.email,
        password: formData.password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const data = await response.json();
  console.log(data);
  const responseUser = await fetch(
    `https://socio-app-e242a-default-rtdb.firebaseio.com/users.json`
  );

  const dataUser = (await responseUser.json()) || [];
  console.log(dataUser);

  console.log(formData);

  dataUser.push({ ...formData, ...data, profilePic: "", likedPosts: [] });
  console.log(dataUser);

  //Creating User and storing it in db
  const userSignupResponse = await fetch(
    `https://socio-app-e242a-default-rtdb.firebaseio.com/users.json`,
    {
      method: "PUT",
      body: JSON.stringify(dataUser),
    }
  );

  const newData = { ...data, ...formData };

  return newData;
});

const postSlice = createSlice({
  name: "postSlice",
  initialState: {
    posts: [],
  },
  reducers: {
    setPost(state, action) {
      state.posts = action.payload;
    },
  },
  extraReducers: {
    [createPostThunk.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.posts = action.payload;
    },
    [createPostThunk.rejected]: (state, action) => {
      console.log(action.payloadl);
    },
    [createPostThunk.pending]: (state, action) => {
      console.log(action.payload);
    },
  },
});

const userSlice = createSlice({
  name: "userSlice",
  initialState: {
    loggedIn: false,
    email: "",
    firstName: "",
    lastName: "",
    tokenId: "",
    profilePic: "",
    likedPosts: [],
  },
  reducers: {},
  extraReducers: {
    [userLoginThunk.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.loggedIn = true;
      state.email = action.payload.email;
      state.tokenId = action.payload.localeId;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
    },
  },
});

const store = configureStore({
  reducer: {
    userSlice: userSlice.reducer,
    postSlice: postSlice.reducer,
  },
});

const postSliceActions = postSlice.actions;

export { postSliceActions };

export default store;
