// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {profileId: 0}

  onClickLeftArrow = () => {
    console.log('left arrow clicked')
    const {profileId} = this.state
    if (profileId > 0) {
      this.setState(prevState => ({profileId: prevState.profileId - 1}))
    }
  }

  onClickRightArrow = () => {
    this.setState(prevState => ({profileId: prevState.profileId + 1}))
  }

  render() {
    const {profileId} = this.state
    const {reviewsList} = this.props
    const wantedProfile = reviewsList[profileId]
    const {imgUrl, username, companyName, description} = wantedProfile
    return (
      <div className="background">
        <h1 className="heading">Reviews</h1>
        <div className="bg-container">
          <div className="cards-container">
            <button
              data-testid="leftArrow"
              type="button"
              onClick={this.onClickLeftArrow}
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                className="arrow"
                alt="left arrow"
              />
            </button>
            <div className="profile-details">
              <img src={imgUrl} className="profile" alt={username} />
              <p className="name">{username}</p>
              <p className="companyname">{companyName}</p>
              <p className="description">{description}</p>
            </div>
            <button
              data-testid="rightArrow"
              type="button"
              onClick={this.onClickRightArrow}
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                className="arrow"
                alt="right arrow"
              />
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default ReviewsCarousel
