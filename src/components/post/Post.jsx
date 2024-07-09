import "./post.css"

export default function Post() {
  return (
    <div className="post">
        <img className="postimg" src="https://images.pexels.com/photos/5794705/pexels-photo-5794705.jpeg?auto=compress&cs=tinysrgb&w=3000" alt=""/>
        <div className="postinfo">
            <div className="postCats">
                <div className="postcat">Music</div>
                <div className="postcat">Life</div>
            </div>
            <span className="postTitle">Lorem ipsum, dolor sit amet  </span>
        </div>
        <hr/>
        <span className="postDate">1 hour ago</span>
        <p className="postDec">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum ducimus obcaecati eum ea est, ipsam repellat nam reiciendis dolores enim non, quasi veritatis? Placeat dolores fugit saepe eum rem magni!
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni molestiae, distinctio ipsum ut repudiandae quis sed dolores accusantium. Repellendus eaque nesciunt reiciendis amet facere hic numquam optio. Veniam, vero qui.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint nostrum reprehenderit cumque neque ipsum quasi cum laudantium illo, similique blanditiis nobis sapiente. Fugiat animi officia vel fuga dolorem repudiandae quisquam.
        </p>
 

    </div>
  )
}
