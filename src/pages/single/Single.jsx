import Sidebar from "../../components/sidebar/Sidebar"
import SinglePst from "../../components/singlePost/SinglePst"
import "./single.css"

export default function Single() {
  return (
    <div className="single">
        <SinglePst/>
        <Sidebar/>

    </div>
  )
}
