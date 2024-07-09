import "./write.css"

export default function Write() {
  return (
    <div className="write">
        <img  className=" writeImg" src="https://images.pexels.com/photos/3195834/pexels-photo-3195834.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
       <form className="writeform">
        <div className="writeFormGroup">
            <label htmlFor="fileinput">
            <i className="writeIcon fa-solid fa-plus"></i>
            </label>
            <input type="file" id="fileinput" style={{display:"none"}}/>
            <input type="text" placeholder="Title" className="writeInput"  autoFocus={true}/>
        </div>
            <div className="writeFormGroup">
                <textarea placeholder="Tell your story..." type="text" className="writeInput  writeText" ></textarea>
            </div>
            <button className="writeSubmit">Publish</button>
       </form>
    </div>
  )
}
