export default function App() {
  let list = [1, 1, 1];
  return (
    <div className="container-fluid">
      <div
        className="alert-warning m p-0 fs-1 mb-3 fw-bold"
        style={{ height: "60px" }}
      >
        {" "}
        Instagram
      </div>
      {list.map((item) => (
        <div>
          <div>
            <div className="row align-items-center" style={{ height: "80px" }}>
              <div className=" col-2">
                <img
                  className="rounded-circle"
                  src="https://picsum.photos/60"
                  alt=""
                />
              </div>
              <div className="col-10 fs-1">vrushdhone</div>
            </div>
          </div>
          <div className="d-flex align-items-center justify-content-center">
            <img src="https://picsum.photos/600" alt="" />
          </div>
          <p className="alert-primary">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio
            aperiam delectus optio eius dolor tempora quasi consequuntur fugiat
            totam minima, inventore non quod corrupti molestiae cupiditate,
            tempore nobis beatae, amet adipisci harum fugit consectetur sequi
            neque nesciunt! Delectus similique aliquid earum officia fuga
            aspernatur ducimus quo dignissimos? Iste, sunt accusamus! Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            recusandae eius laudantium alias sed ea, aliquam at dolorem beatae
            magni!
          </p>
        </div>
      ))}
    </div>
  );
}
