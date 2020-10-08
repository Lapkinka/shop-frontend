import React, {Component} from 'react';
import API from '../../api'

import './MainPage.css';

export default class MainPage extends Component {
    componentDidUpdate(prevProps, prevState) {
        console.warn('componentDidUpdate')
        if (this.state.id !== prevState.id && this.state.id) {
            console.warn(this.state.id, 'this.state.id componentDidUpdate');
            (async () => {
                try {
                    const {data} = await API.get(`/${this.state.id}/`);
                    const newDate = this.state.data
                    newDate.push({...data, endPoint: `/${this.state.id}/`})
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
        const {context: {theme, lang, toggleTheme, toggleLang}} = this.props
        console.warn(theme, 'theme')
        console.warn(lang, 'lang')
        return (
            <div className="block">
                {/*  <h1 className="block__header">My React App!</h1>*/}
                <input type='number' pattern='^[ 0-9]+$' value={this.state.id} onChange={this.handleChangeId}/>
                {this.state.data.length > 0 && this.state.data.map((elem, index) => <div
                    key={index}>{Object.keys(elem).map(prop =>
                    <div key={prop.id}>
                        {prop}:{elem[prop]}
                    </div>)}
                </div>)}
                <button onClick={toggleTheme}>{theme.nameRu}</button>
                <button onClick={toggleLang}>{lang.name}</button>
            </div>
        );
    }

    handleChangeId = ({currentTarget}) => {
        this.setState({id: currentTarget.value}, (() => {
            const {id} = this.state;
            console.warn(id, 'id to cb')
            this.setState({id: 1000})
        }))
    }
}
