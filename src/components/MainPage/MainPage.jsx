import React, {Component} from 'react';
import API from '../../api'

import './MainPage.css';

export default class MainPage extends Component {
    componentDidUpdate(prevProps, prevState) {
        if (this.state.id !== prevState.id && this.state.id) {
            console.warn(this.state.id, 'this.state.id');
            (async () => {
                try {
                    const {data} = await API.get(`/${this.state.id}/`);
                    console.warn(data, 'data')
                    const newDate = this.state.data
                    newDate.push({...data, endPoint: `/${this.state.id}/`})
                    console.warn(newDate, 'newDate')
                    this.setState({data: newDate})
                } catch (e) {
                    throw new Error(e)
                }
            })()
        }
    }

    state = {
        id: '',
        data: []
    }

    render() {
        console.warn(this.state.data, 'this.state.data')
        return (
            <div className="block">
                {/*  <h1 className="block__header">My React App!</h1>*/}
                <input type='number' pattern='^[ 0-9]+$' value={this.state.id} onChange={this.handleChangeId}/>
                {this.state.data.length > 0 && this.state.data.map(elem => <div>{Object.keys(elem).map(prop =>
                    <div>
                        {prop}:{elem[prop]}
                    </div>)}
                </div>)}
            </div>
        );
    }

    handleChangeId = ({currentTarget}) => {
        this.setState({id: currentTarget.value})
    }
}
