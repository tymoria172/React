import React from 'react'
import Carousel from 'react-elastic-carousel'
import { useState } from 'react'
import './CarouselComponent.css'

function CarouselComponent() {
  const [items, setstate] = useState([
    {id: 1, title: 'item #1', img:"https://cdn.discordapp.com/attachments/882022012170678324/907648093665787904/zap.PNG"},
    {id: 2, title: 'item #2', img:"https://cdn.discordapp.com/attachments/882022012170678324/907698493093732352/charizard.PNG"},
    {id: 3, title: 'item #3', img:"https://cdn.discordapp.com/attachments/882022012170678324/907698496939892736/gengar.PNG"},
    {id: 4, title: 'item #4', img:"https://cdn.discordapp.com/attachments/882022012170678324/907698498676338688/grama.PNG"},
    {id: 5, title: 'item #4', img:"https://cdn.discordapp.com/attachments/882022012170678324/907698499859140658/gyarados.PNG"}
  ])
  return (
<Carousel isRTL={false} enableAutoPlay autoPlaySpeed={15000}>
{items.map(item => <div key={item.id} >
<img src={item.img} alt="" width="100%" height="100%"/>

</div>)}
</Carousel>
  )
}

export default CarouselComponent
