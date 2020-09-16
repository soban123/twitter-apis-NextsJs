import React , { useState  } from 'react'

export default function tweets() {

const [ data , setData ] = useState([]);
const [ topic , setTopic ] = useState("");
const [ count , setCount ] = useState(1) ; 
const [ date , setDate ] = useState( "2011-07-11" ) ; 

const GetData = ( ) =>{

    fetch( `/tweets/?topic=${topic}&count=${count}&date=${date} `)
    .then( res => res.json() )
    .then( newdata => { setData(newdata) ; console.log(newdata) }  )
}

    return (
        <>
        <div>
            <h1> Search Tweets By Topic </h1>
            <span>
            <h3>Topic</h3>
            <input value={ topic } onChange={ (e) => setTopic(`${e.target.value}`) } />
            </span>
            <span>
            <h3>Count</h3>
            <input value={ count } onChange={ (e) => setCount(e.target.value) } />
            </span>
            <span>
            <h3>Date</h3>
            <input value={ date } onChange={ (e) => setDate(e.target.value) } />
            </span>
            <button className="btn btn-primary" onClick={GetData}> Click To Get Tweets </button>
        </div>

        <table className="table">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">text</th>
      <th scope="col">likes</th>
      <th scope="col">Tweets Handle</th>
      <th scope="col">Retweets Count</th>
      <th scope="col">Loation</th>
      <th scope="col">Created At</th>
    </tr>
  </thead>
  <tbody>
   

    {
        data.map( (tweet , index) => {
            return( 
                <tr key={index}>
                <th scope="row">{index+1}</th>
                <td>{tweet.text}</td>
                <td>{tweet.favorite_count}</td>
                <td>{tweet.user.name}</td>
                <td>{tweet.retweet_count}</td>
                <td>{tweet.user.location}</td>
                <td>{tweet.created_at}</td>
              </tr>
             )
        } )
    }
 
  </tbody>
</table>

        </>

    )
}
