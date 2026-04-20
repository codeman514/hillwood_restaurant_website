import {Link} from "react-router-dom"
export default function Title() {
    return (
        <div className="row justify-content-between" style={{backgroundColor: "#ffcc00"}}>
            <Link className="col-3 h1 custom-nav-link" to ="/">山林茶餐廳</Link>
            <nav className="col-6 row align-items-center">
                <ul className="row list-inline mb-0">
                    <li className="col"><Link className="custom-nav-link" to ="/">首頁</Link></li>
                    <li className="col"><Link className="custom-nav-link" to="/menu">菜單</Link></li>
                    <li className="col"><Link className="custom-nav-link" to="/about">關於我們</Link></li>
                    <li className="col"><Link className="custom-nav-link" to="/login">會員登入</Link></li>
                </ul>
            </nav>
        </div>
    )
}