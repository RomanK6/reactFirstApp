import profileReducer, { addPostActionCreator, deletePost } from './profile-reducer';

let state = {
        postsData : [
            {id: 0, post: 'My first post!', likes: 44},
            {id: 1, post: 'Second post', likes: 15},
            {id: 2, post: 'Lorem ipsum', likes: 24},
        ],
        profile: null,
        status: '',
    }

test('length post shold be incremented', () => {
    // 1. test data
    let action = addPostActionCreator('Hello world!!!')
    // 2. action
    let newState = profileReducer(state, action)
    // 3. expectation
    expect(newState.postsData.length).toBe(4);
  });

test('new post shold be added', () => {
    // 1. test data
    let action = addPostActionCreator('Hello world!!!')
    // 2. action
    let newState = profileReducer(state, action)
    // 3. expectation
    expect(newState.postsData[3].post).toBe('Hello world!!!');
});

test('after deleting length of postData shold be decrement', () => {
    // 1. test data
    let action = deletePost(2)
    // 2. action
    let newState = profileReducer(state, action)
    // 3. expectation
    expect(newState.postsData.length).toBe(2);
});

test('after deleting length of postData sholdn`t be decrement if id is incorrect', () => {
    // 1. test data
    let action = deletePost(1000)
    // 2. action
    let newState = profileReducer(state, action)
    // 3. expectation
    expect(newState.postsData.length).toBe(3);
});