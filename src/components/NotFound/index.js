import './index.css'

const NotFound = () => (
  <div className="error-container">
    <img
      src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
      alt="not found"
      className="error-img"
    />
    <h1 className="error-heading">Lost Your Way?</h1>
    <p className="error-text">
      Sorry, we cannot find that page. You will find lots to explore on the home
      page
    </p>
  </div>
)
export default NotFound
