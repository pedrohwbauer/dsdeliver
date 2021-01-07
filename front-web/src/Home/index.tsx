import './styles.css'
import { ReactComponent as MainImage } from './main.svg'
import Footer from '../Footer'

function Home() {
  return (
    <>
      <div className="home-container">
        <div className="home-content">
          <div className="home-actions">
            <h1 className="home-title">
              Place your order <br />
                and we will <br />
                deliver it to you!
            </h1>
            <h3 className="home-subtitle">
              Place your order and in a few minutes we <br />
                will bring it to your door
            </h3>
            <a href="" className="home-btn-order">
              PLACE ORDER
            </a>
          </div>
          <div className="home-image">
            <MainImage />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Home