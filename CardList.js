import React from 'react';
import Card from './Card';

const CardList = ({robot}) => {
    const cardComponenet = robot.map((user, i)  => {
        return <Card key ={i} id={robot[i].id} name={robot[i].name} email={robot[i].email}/>
    })
   return (
    <div>
   
{cardComponenet}

    </div>

   ); 
}

export default CardList;