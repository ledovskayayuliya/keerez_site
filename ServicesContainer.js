import React from 'react'
import ServicesFilter from './ServiceFilter'
import ServicesList from './ServiceList'
import {ServiceConsumer, withServiceConsumer} from '../context'
import Loading from './Loading'

function ServicesContainer({context}){
    const {loading,sortedServices,services} = context;
    if (loading) {
        return <Loading/>;
    }
    return (
        <>
            <ServicesFilter services={services}/>
            <ServicesList services={sortedServices}/>
        </>
        );
    }


export default withServiceConsumer(ServicesContainer)




//import React from 'react'
//import ServicesFilter from './ServiceFilter'
//import ServicesList from './ServiceList'
//import {ServiceConsumer} from '../context'
//import Loading from './Loading'
//export default function ServicesContainer() {
    //return (
        //<ServiceConsumer>
//{
    //(value)=>{
        //const {loading,sortedServices,services} = value
        //if (loading) {
            //return <Loading/>;
        //}
        //return (
            //<div>
                //Hello From Services Container
                //<ServicesFilter services={services}/>
                //<ServicesList services={sortedServices}/>
            //</div>
            //);
    //}
//}
        //</ServiceConsumer>
    //);
//}