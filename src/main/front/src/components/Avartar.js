
function Avartar(){

    const onChangeImg = (e) => {
        e.preventDefault();
        
        if(e.target.files){
          const uploadFile = e.target.files[0]
          console.log(uploadFile)
          const formData = new FormData()
          formData.append('files',uploadFile)
        }
      }
      

    return(
        <>
            <form>
                <label htmlFor="profile-upload" />
                <input type="file" id="profile-upload" accept="image/*" onChange={onChangeImg}/>
            </form>
       
        </>
    )

}

export default Avartar;