import React, { useRef } from 'react';


const AddNewPlace = () => {

    const nameRef = useRef();
    const travellerRef = useRef();
    const timeRef = useRef();
    const priceRef = useRef();
    const disRef = useRef();
    const urlRef = useRef();

    const handleAddPlace = e =>{
        const title = nameRef.current.value;
        const name = travellerRef.current.value;
        const time = timeRef.current.value;
        const price = priceRef.current.value;
        const dis = disRef.current.value;
        const img = urlRef.current.value;

        const newPlace = {
            title,
            name,time,price,dis,img
           
        };
        console.log(newPlace);

        fetch('https://howling-spider-32011.herokuapp.com/services', {
            method: "POST",
                body:JSON.stringify(newPlace),
                mode:"cors",
                headers: {"content-type":"application/json"}
        })
        .then(res => res.json())
        .then(data =>{
            if(data.insertedId){
                alert('Successfully Added');
                e.target.reset()
            }
        })

        e.preventDefault();
       
    }
    return (
        <div> 
            <h2 className = 'text-center fw-bold'>Add A New Place</h2>
        
          <form onSubmit = {handleAddPlace} className="w-50 mx-auto bg-dark mt-4 p-5 rounded">

             <input className ='form-control pt-2 mt-2' ref ={nameRef} type="text" placeholder ='Place Name' />
             <input className ='form-control pt-2 mt-2' ref ={travellerRef} type="text" placeholder ='traveller Name' />
             <input className ='form-control pt-2 mt-2' ref ={timeRef} type="number" placeholder ='Duration Day' />
             <input className ='form-control pt-2 mt-2' ref ={priceRef} type="number" placeholder ='Price' />
             <input className ='form-control pt-2 mt-2' ref ={disRef} type="text" placeholder = 'Discription' />
             <input className ='form-control pt-2 mt-2' ref ={urlRef} type="text" placeholder = 'Image Url' />
             <input className =' btn btn-primary mt-2' type='submit' value="booking" />
        </form>

        {/* <form action=""></form> */}
        </div>
    );
};

export default AddNewPlace;