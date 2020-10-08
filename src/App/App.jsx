import React, {Component} from 'react';
import ErrorInfo from '../components/ErrorInfo/ErrorInfo';
import MainPage from '../components/MainPage/MainPage';
import {ContextConsumer} from '../Context';

export default class App extends Component {
    render() {
        return <ErrorInfo>
            <ContextConsumer>
                {context => <MainPage context={context}/>}
            </ContextConsumer>
        </ErrorInfo>

    }
}
