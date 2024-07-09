import "./singlepst.css"

export default function SinglePst() {
  return (
    <div className="singlePost">
      <div className="singlepostWrapper">
        <img src="https://images.pexels.com/photos/6942525/pexels-photo-6942525.jpeg?auto=compress&cs=tinysrgb&w=6000" alt="" className="singlepostImg" />



        <h1 className="singlepostTitle">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          <div className="singlepostEdit">
          <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
          <i className="singlePostIcon fa-solid fa-trash"></i>
          </div>

        </h1>
        <div className="singlePostInfo">
             <span className="singlepostAuthor">Author: <b>Abin</b></span>
             <span className="singlepostDate"> 1 hour ago</span>
        </div>
        <p className="singlePostDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed perferendis est quo delectus corporis dolores eligendi necessitatibus dolorum molestiae dolor incidunt, sit dicta ut sint numquam perspiciatis totam, beatae libero.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In quisquam facere soluta ab unde, ipsa labore vitae quam ut quo ipsum saepe fugit repellat officia magnam, expedita enim fuga sapiente?
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore temporibus sed dignissimos enim maiores, iure rerum harum eligendi est ut consequuntur molestiae necessitatibus ab voluptas architecto exercitationem ducimus dolor perferendis.
        </p>

      </div>
    </div>
  )
}
