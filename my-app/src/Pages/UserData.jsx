import { useState,useEffect } from 'react'
import DataTable from 'datatables.net-dt'
import '../styles/UserData.css'


import Simple from '../component/Navbar'


function UserData(){
    const [arr,setArr]=useState([])
    
    let table = new DataTable('#myTable');

    

    useEffect(()=>{
getData()
    },[])


    const getData=async()=>{

        await fetch("https://assignment-i42w.onrender.com/userData").then((res)=>{
            res.json().then((res)=>{
                setArr(res)
                console.log(res)
            })
        })
    }

    return (
       





<div>
<Simple/>
<table id="myTable" className="display">
    <thead>
        <tr>
        <th>Name</th>
        <th>Age</th>
        <th >Sex</th>
        <th >Mobile</th>
        <th >Address</th>
        <th >Govt ID</th>
        <th >Guardian Name</th>
        <th >Guardian Email</th>
        <th >Emergency No </th>
        <th >Nationality</th>
        </tr>
    </thead>
    <tbody>
    {arr.map((el)=>{
            return  <tr key={el.govtID}>
            <td>{el.name}</td>
            <td>{el.Age}</td>
            <td>{el.sex}</td>
            <td>{el.mobile}</td>
            <td>{el.address}</td>
            <td>{el.govtID}</td>
            <td>{el.guardian_label+"."+el.guradianname}</td>
            <td>{el.email}</td>
            <td>{el.emergency}</td>
           <td>{el.nationality}</td>
          </tr>
        })}
     
    </tbody>
</table>





</div>



        
    )
}

export default UserData