import { Link } from "react-router-dom";

export default function Index() {
  return <div>
    <p>Ini adalah beranda</p>
    <p>Menuju ke <Link to='/about'>about</Link> </p>
    </div>
}
