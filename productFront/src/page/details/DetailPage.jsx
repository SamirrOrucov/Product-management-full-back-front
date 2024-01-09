import React, { useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import "./detail.scss"
function DetailPage() {
    const { id } = useParams();
    const [dbData, setDbData] = useState([]);
    async function getFetch() {
      const response = await fetch("http://localhost:3000/"+id);
      const Data = await response.json();
      setDbData(Data);
    }
    useEffect(() => { 
        getFetch();
      }, []);
    
  return (
    <div className='detail'>
         
        <ul>
          <li>{dbData.title} </li>
          <li>{dbData.price} azn</li>
        </ul>
      
    
    </div>
  )
}

export default DetailPage