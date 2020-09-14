import React,{Component} from 'react';
import API from '../../api'

import './MainPage.css';

export default class MainPage extends Component {
    componentDidUpdate(prevProps, prevState) {
        if (this.state.id !== prevState.id) {
            console.warn(this.state.id, 'this.state.id');
            (async () => {
                try {
                    let data = await API.get(`/${this.state.id}`);
                    this.setState({data})
                } catch (e) {
                    throw new Error(e)
                }
            })()
        }
    }

    state = {
        id: '',
        data: {}
    }

    render() {
        return (
            <div className="block">
                <h1 className="block__header">My React App!</h1>
                <input type='number' pattern='^[ 0-9]+$' value={this.state.id} onChange={this.handleChangeId}/>
                {Object.keys(this.state.data).length > 1 && <span>data:{this.state.data}</span>}
            </div>
        );
    }

    handleChangeId = ({currentTarget}) => {
        this.setState({id: currentTarget.value})
    }
}
