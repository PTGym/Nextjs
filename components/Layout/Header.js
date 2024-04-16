export default function Header() {
  return (
    <header className="sticky-top">
      <div className="row align-items-center mt-3">
        <div className="col-2">
          로고
        </div>
        <div className="col-6">
          <div className="input-group rounded">
            <input type="text" className="form-control" placeholder="검색 내용을 입력해보세요. (예:로고디자인)" />
            <button className="input-group-text"><i className="bi bi-search"></i></button>
          </div>
        </div>
        <div className="col-4">
          <div className="d-flex">
            <span className="item">알림</span>
            <span className="item">찜목록</span>
            <span className="item">주문 관리</span>
          </div>
        </div>
      </div>
    </header>
  )
}

