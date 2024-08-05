import Card from './Card'

function Tours({tours,removeTour}){
    return(
        <div>
            
            <div className='flex flex-wrap justify-center '>
                {
                    tours.map((tour) => {
                        return <Card key={tour.id} {...tour} removeTour={removeTour}></Card>
                    })
                }
            </div>
        </div>
        
    );
}
export default Tours;