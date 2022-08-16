import React,{useState,useEffect} from "react";
import axios from "axios";

export default function ListaCarros(){
    
    const [carros,setCarros]=useState([])

    useEffect(()=>{
        axios.get('https://reactapiexemplo1.matheuslucena3.repl.co')
            .then(res=>{
                const dadosCarros=res.data
                setCarros({dadosCarros})
            })
    }

    )

    return(
        <div>
            {carros.map(
                carros=> <div key={carros.id}>{carros.marca} - {carros.modelo}</div>
            )}
        </div>

        )
}