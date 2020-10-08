import React, {Component} from 'react';
import {CONTEXT_OPTIONS} from './constants'

const {Provider, Consumer} = React.createContext();

class ContextProvider extends Component {
    state = {theme: CONTEXT_OPTIONS.themes.light, lang: CONTEXT_OPTIONS.languages.ru};

    render() {
        const {theme, lang} = this.state
        return (
            <Provider
                value={{
                    theme,
                    toggleTheme: () => this.setState({
                        theme: CONTEXT_OPTIONS.themes[this.state.theme.shortName === 'light' ? 'dark' : 'light']
                    }),
                    lang,
                    toggleLang: () => {
                        this.setState({
                            lang: CONTEXT_OPTIONS.languages[this.state.lang.shortName === 'ru' ? 'en' : 'ru']
                        });
                    }
                }}
            >
                {this.props.children}
            </Provider>
        );
    }
}

export {ContextProvider, Consumer as ContextConsumer};