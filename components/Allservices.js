import React, { Component } from 'react'
import {FaComment,FaDumbbell,FaCarrot} from 'react-icons/fa';
import Title from './Title'
export default class Allservices extends Component {
    state={
        Allservices:[
            {
                icon:<FaComment/>,
                title:'online consultations',
                info:'Online consultations about training, healthy nutrition, preparation for bodybuilding competitions and other'
            },
            {
                icon:<FaDumbbell/>,
                title:'personal training plans',
                info:'Creature an individual training plan with all physiological factors, health and lifestyle'
            },
            {
                icon:<FaCarrot/>,
                title:'personal meal plans',
                info:'Creature an individual nutrition plan to achieve the desired results'
            }
        ]
    }
    render() {
        return (
            <section className='services'>
                <Title title='services'/>
                <div className='services-center'>
                    {this.state.Allservices.map((item,index)=>{
return <article key={index} className='service'>
    <span>{item.icon}</span>
    <h6>{item.title}</h6>
    <p>{item.info}</p>
</article>
                    })}
                </div>
            </section>
        );
    }
}
