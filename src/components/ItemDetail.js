import React from 'react'
import Counter from './Counter/Counter'

export default function ItemDetail({item}) {
    return (
        <div >
            
            <img src={item.image} alt="" />
            <div className="card-body">
                 <h4 className="card-title">{item.title}</h4>
                 <p className="card-text">{item.text}</p>
                 <p className="card-text">{item.price}</p>
                <Counter initial={1} stock={10} />
            </div>
        </div>
        
      
    );
}

  // <div className="card mb-3" style="max-width: 540px;">
        //     <div className="row g-0">
        //         <div className="col-md-4">
        //             <img src={item.image} class="img-fluid rounded-start" alt=""/>
        //         </div>
        //         <div className="col-md-8">
        //         <div className="card-body">
        //             <h5 className="card-title">{item.title}</h5>
        //             <p className="card-text">{item.text}</p>
        //             <p className="card-text">{item.price}</p>
        //             <Counter initial={1} stock={10} />
        //         </div>
        //         </div>
        //     </div>
        // </div> 