const { useState } = React;

const Navbar = (props) => {
  return (
    <>
      <header className="nav-container">
        <div className="logo">
          <a href="">Website title/Logo</a>
        </div>
        <label
          for="switch"
          className="toggle"
          onClick={props.switchModalHandler}
        >
          <div className="hamberger-menu"></div>
          <div className="hamberger-menu"></div>
          <div className="hamberger-menu"></div>
        </label>
        <nav className={!props.showModal ? "menu" : "menu showMenu"}>
          <input type="checkbox" id="switch" />
          <ul className="menu-list">
            <li>
              <a href="#item1">item1</a>
            </li>
            <li>
              <a href="#item2">item2</a>
            </li>
            <li>
              <a href="#item3">item3</a>
            </li>
            <li>
              <a href="#item4">item4</a>
            </li>
          </ul>
          <button className="close-btn" onClick={props.switchModalHandler}>
            X
          </button>
        </nav>
      </header>
    </>
  );
};

const ContentBox = (props) => {
  return (
    <>
      <div className="content-box">{props.children}</div>
    </>
  );
};

const MyApp = () => {
  const [bannerText, setBannerText] = useState("Welcome Message");
  const [isVisible, setIsVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const bannerTextHandler = () => {
    if (bannerText !== "Have a Good Time!") {
      setBannerText("Have a Good Time!");
    } else {
      return;
    }
  };

  const showMoreBoxHandler = () => {
    if (isVisible !== true) {
      setIsVisible(true);
    } else {
      return;
    }
  };

  const switchModalHandler = () => {
    setShowModal((current) => !current);
  };

  return (
    <>
      <Navbar showModal={showModal} switchModalHandler={switchModalHandler} />
      <div className="banner" onClick={bannerTextHandler}>
        {bannerText}
      </div>
      <section className="container">
        <div className="section-title">Section Title</div>
        <ContentBox>Content Box 1</ContentBox>
        <ContentBox>Content Box 2</ContentBox>
        <ContentBox>Content Box 3</ContentBox>
        <ContentBox>Content Box 4</ContentBox>
        <div className="action-btn-container">
          <button className="action-btn" onClick={showMoreBoxHandler}>
            Call to Action
          </button>
        </div>
        {isVisible && (
          <>
            <ContentBox>Content Box 1</ContentBox>
            <ContentBox>Content Box 2</ContentBox>
            <ContentBox>Content Box 3</ContentBox>
            <ContentBox>Content Box 4</ContentBox>
          </>
        )}
      </section>
    </>
  );
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<MyApp />);
