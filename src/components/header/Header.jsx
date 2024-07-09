import "./header.css"

export default function Header() {
  return (
    <div className='header'>
        <div className="headerTitle">
            <span className="headerTitleSm">React and Node</span>
            <span className="headerTitleLg">Blog</span>
        </div>
        <img className="headerImg" src="https://images.pexels.com/photos/2547907/pexels-photo-2547907.jpeg?auto=compress&cs=tinysrgb&w=3000" alt=""/>
    </div>
  )
}
