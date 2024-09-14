import './SearchInput.css'

export const SearchInput=({userInput,handleUserInput,clearInput})=>{

  return(
    <>
    <div className='search-input-section'>

        <div className="search-input-contianer">
        
          <input type="text" name="" id="" placeholder="Search for Movies ..." value={userInput} onChange={handleUserInput}/>

        </div>
        {userInput && 
        
          <button className='input-button' onClick={clearInput}>
             <img src="https://logowik.com/content/uploads/images/close1437.jpg" alt=""  width="32px" height="32Px" style={{objectFit:"contain"}}/>
          </button>
          
        }
       
    
    </div>
    
    
    </>
  )
}