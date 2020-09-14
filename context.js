import React, { Component } from 'react';

const ServiceContext=React.createContext();
// <ServiceContext.Provider value={'hello'}
 class  ServiceProvider extends Component {
    state={};
    render() {
        return (
        <ServiceContext.Provider value={'hello'}>
            {this.props.children}
        </ServiceContext.Provider>
        );
    }
}

const ServiceConsumer=ServiceContext.Consumer;

export {ServiceProvider,ServiceConsumer,ServiceContext};