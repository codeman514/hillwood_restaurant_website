export default function Title() {
    return (
        <div className="row justify-content-between" style={{backgroundColor: "#ffcc00"}}>
            <h1 className="col-3">山林茶餐廳</h1>
            <nav className="col-6 row align-items-center">
                <ul className="row list-inline mb-0">
                    <li className="col"><a className="custom-nav-link" href="#">首頁</a></li>
                    <li className="col"><a className="custom-nav-link" href="#">菜單</a></li>
                    <li className="col"><a className="custom-nav-link" href="#">關於我們</a></li>
                    <li className="col"><a className="custom-nav-link" href="#">會員登入</a></li>
                </ul>
            </nav>
        </div>
    )
}