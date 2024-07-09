import "./sidebar.css"

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT ME</span>
            <img className="sidebarImage" src="https://images.pexels.com/photos/26100285/pexels-photo-26100285/free-photo-of-a-woman-in-a-dark-room.jpeg?auto=compress&cs=tinysrgb&w=3000" alt=""/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci provident magni beatae dolor? .</p>
        </div>
        <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
            <li className="sidebarlistItem">Life</li>
            <li className="sidebarlistItem">Music</li>
            <li className="sidebarlistItem">Style</li>
            <li className="sidebarlistItem">Sport</li>
            <li className="sidebarlistItem">Cinema</li>
            <li className="sidebarlistItem">Tech</li>
        </ul>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                <div className="sidebarSocial">
                <i className="sidebarIcon fa-brands fa-facebook"></i>
                <i className="sidebarIcon fa-brands fa-twitter"></i>
                <i className="sidebarIcon fa-brands fa-pinterest"></i>
                <i className="sidebarIcon fa-brands fa-instagram"></i>
                </div>

            </div>

        </div>
    </div>
  )
}
