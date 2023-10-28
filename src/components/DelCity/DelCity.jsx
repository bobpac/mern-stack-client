

export default function DelCity({ handleDelCity , cities, user}) {

  return (
    <>
    {cities.map(city =>(
      <div key={city._id}>
        {city.city}  , {city.state_code} <button onClick={handleDelCity} id={city._id}> Delete </button>
      </div> )   
    )}
    </>
  )
}