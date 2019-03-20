import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import LoginForm from './components/LoginForm';

class App extends Component {
    componentWillMount() {
        const config = {
            apiKey: "AIzaSyDTPIj4Vc5ZwQcATW9CHnLaSqkmL7p5w-c",
            authDomain: "manager-ae0cc.firebaseapp.com",
            databaseURL: "https://manager-ae0cc.firebaseio.com",
            projectId: "manager-ae0cc",
            storageBucket: "manager-ae0cc.appspot.com",
            messagingSenderId: "497133538784"
          };
          firebase.initializeApp(config);
    }

    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

        return (
            <Provider store={store}>
                <LoginForm />
            </Provider>
        );
    }
}

export default App;