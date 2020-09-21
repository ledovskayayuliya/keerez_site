import React, { Component } from 'react';
import items from './data'

const ServiceContext=React.createContext();
// <ServiceContext.Provider value={'hello'}
 class  ServiceProvider extends Component {
    state={
        services:[],
        sortedServices:[],
        featuredServices:[],
        loading:true
    };
    //getData

    componentDidMount(){
        //this.getData
        let services=this.formatData(items);
        let featuredServices=services.filter(service=>service.featured===true);
        this.setState({
            services,featuredServices,sortedServices:services,loading:false
        });
    }

    formatData(items){
        let tempItems=items.map(item=>{
           let id=item.sys.id
           let images=item.fields.images.map(image=>image.fields.file.url);
           let service={...item.fields,images,id};
           return service;
        });
        return tempItems;
    }
    getService=(slug)=>{
        let tempServices=[...this.state.services];
        const service=tempServices.find(service=>service.slug===slug);
        return service;
    };


    render() {
        return (
        <ServiceContext.Provider value={{...this.state,getService:this.getService}}>
            {this.props.children}
        </ServiceContext.Provider>
        );
    }
}

const ServiceConsumer=ServiceContext.Consumer;

export {ServiceProvider,ServiceConsumer,ServiceContext};
