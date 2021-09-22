import React from 'react';
import BenefitsItem from '../BenefitsItem/BenefitsItem';

const benefits = [
    {
        title: 'Delivery',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, et?',
    },
    {
        title: 'Product',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, et?',
    },
    {
        title: 'Payments',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, et?',
    },
]

const Benefits = () => {
    return(
        <div className="container mx-auto flex mb-20">
            {benefits.map(item => (
                <BenefitsItem key={item.title} item={item} />
            ))}
        </div>
    )
}

export default Benefits;

