import React from 'react'
import Card from './Card';
function Tours({tours,removeTour}){

    // function removeHandler(id) {
    //     console.log(id);
    //     props.removeTours(id);
    // }

    return (
        <div className='container'>
            <div>
                <h2 className='title'>Plan with Love</h2>
            </div>
            <div className='cards'>
                {
                    tours.map((tour) => {
                        return <Card key={tour.id}{...tour} removeTour={removeTour}></Card>;
                    })
                }
            </div>
        </div>
    )
}

export default Tours;