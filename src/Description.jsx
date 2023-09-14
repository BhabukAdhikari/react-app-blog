const Description = () => {
    return (
        <div className>
            <div className="container">
                <div className="row mt-5">
                    {/* main-blog-side  */}
                    <div className="col-12 col-md-12 col-lg-8">
                        {/* first-card-starts  */}
                        <div className="card mb-0">
                            <img src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*WJ6t0O7V4J_G2TqZeadrVw.jpeg" className="card-image" alt="Image" />
                            <div className="card-body">
                                {/* text-part-of-card  */}
                                <h2 className="post-title mt-3">
                                    <a>Why should you use React Js for frontend Apps?
                                    </a>
                                </h2>
                                {/* profile-and-avatar  */}
                                <div className="profile mb-3">
                                    <a>
                                        <span className="ms-2 avatar-name">
                                            <span className>
                                                BY
                                            </span>
                                            Rajiv Chaulagain
                                        </span>
                                        | <span className="text-secondary small">4th August, 2023</span>
                                    </a>
                                </div>
                                <div className="post-para">
                                    <p>
                                        In this interview, correspondent Polly Nash talks to fire fighter Cami Schafer about
                                        one of the many frightening effects of climate change; the ever-growing threat of
                                        wildfires around the world. Last year California was hit by the Dixie Fire, the
                                        largest single forest fire in the state’s history. Burning for four months, the
                                        Dixie Fire destroyed over a thousand buildings and devastated entire towns. Cami
                                        Schafer, who was fighting this fire alongside her colleagues, gives insights into
                                        her daily work, her struggles and most importantly, what kept her sane and motivated
                                        during the demanding operation.
                                        <br />
                                        <br />
                                        “You try not to be emotionally attached but you can’t really help it. Those are
                                        people’s houses, people’s livelihood, that’s all they have. But then we have to
                                        hustle and keep going the next day.”
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                     {/* side-bar-right */}
          <div className="col-12 col-md-12 col-lg-4">
            <div className="side-bar-right">
              {/* search-bar-starts  */}
              <div className="search-part">
                <form>
                  <label className="search-label section-title ">Search</label>
                  <div className="search-bar">
                    <input className="search-input" placeholder="Search ..." />
                    <button type="submit" className="search-btn">
                      <i className="magnifying-glass fa-solid fa-magnifying-glass" />
                    </button>
                  </div>
                </form>
              </div>
              {/* search-bar-ends  */}
              {/* sidebar-widget-starts  */}
              <div className="sidebar-widget"><label className="sidebar-widget-topic section-title">Popular
                posts</label>
                <ul className="thumbnail-items p-0">
                  {/* post-1  */}
                  <li className="post-list d-flex mb-3">
                    <a>
                      <img className="thumbnail" src="https://modtel.travelerwp.com/wp-content/uploads/2022/04/Rectangle-3-150x150.jpg" alt="Meet the Steve Jobs of the Travel Industry" decoding="async" loading="lazy" />
                    </a>
                    <div className="thumb-list-caption ps-3">
                      <h3 className="thumb-list-title"><a>
                        Meet the Steve Jobs of the Travel Industry</a></h3>
                      <p className="thumb-list-date">May 6, 2022</p>
                    </div>
                  </li>
                  {/* post-2  */}
                  <li className="post-list d-flex mb-3">
                    <a>
                      <img className="thumbnail" src="https://modtel.travelerwp.com/wp-content/uploads/2022/04/Rooftop-View-1-150x150.jpg" alt="A Seaside Reset in Laguna Beach" decoding="async" loading="lazy" />
                    </a>
                    <div className="thumb-list-caption ps-3">
                      <h3 className="thumb-list-title"><a>
                        A Seaside Reset in Laguna Beach</a></h3>
                      <p className="thumb-list-date">April 6, 2022</p>
                    </div>
                  </li>
                  {/* post-3  */}
                  <li className="post-list d-flex mb-3">
                    <a>
                      <img className="thumbnail" src="https://modtel.travelerwp.com/wp-content/uploads/2022/04/wili-150x150.jpg" alt="Tiptoe through the Tulips of Washington" decoding="async" loading="lazy" />
                    </a>
                    <div className="thumb-list-caption ps-3">
                      <h3 className="thumb-list-title"><a>Tiptoe through the Tulips of Washington</a>
                      </h3>
                      <p className="thumb-list-date">April 6, 2022</p>
                    </div>
                  </li>
                </ul>
              </div>
              {/* sidebar-widget-ends  */}
            </div>
          </div>
          {/* side-bar-right-ends  */}
                </div>
            </div>
            {/* side-bar-right-ends  */}
        </div>
    );
}

export default Description