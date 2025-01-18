import React from 'react'
import Microsoft from '../../assets/images/microsoft.png'
import Nike from '../../assets/images/nike.png'
import Google from '../../assets/images/google.png'
import WalMart from '../../assets/images/walmart.png'
import Daraz from '../../assets/images/daraz.png'

const OurClients = () => {

    const ourClients = [
        {
            name: 'microsft',
            image: Microsoft,
        },
        {
            name: 'nike',
            image: Nike,
        },
        {
            name: 'microsft',
            image: Google,
        },
        {
            name: 'walmart',
            image: WalMart,
        },
        {
            name: 'daraz',
            image: Daraz,
        },
    ];

    const duplicate = [...ourClients , ...ourClients]
    return (
        <div className="h-[200px] bg-primaryC">
            <div>
                <div className='flex items-center gap-[50px] overflow-hidden'>
                    {duplicate.map((client, i) => (
                        <div className='min-w-[150px]'>
                            <img className='w-full h-auto' src={client.image} alt={client.name} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default OurClients;