import'./SearchList.css'

export const SearchList=({searchList})=>{

 

  return(
    <>
    <div className="searchlist-container">
      {searchList.map((data)=>(

        <div className="content-container" key={data.id}>
          <img src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`} alt="" width="50px" height="50px"  style={{objectFit:"contain"}}/>
          <h3>{data.title} </h3>
        </div>

      ))}
   
    </div>
    
    
    </>
  )
}