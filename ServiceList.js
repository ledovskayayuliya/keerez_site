import React from 'react';
import Service from './Service'
export default function ServiceList({services}) {
if(services.length === 0){
    return (
        <div className='empty-search'>
            <h3>unfortunately no services matched your search parameters</h3>
        </div>
    )
}
return <section className='serviceslist'>
    <div className='serviceslist-center'>
        {
            services.map(item => {
                return <Service key={item.id} service={item}/>;
            })
        }
    </div>
</section>;
}
