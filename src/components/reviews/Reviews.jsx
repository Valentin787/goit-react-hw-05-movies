import PropTypes from "prop-types"
import s from './Reviews.module.css'

const Reviews = ({ reviews }) => {
  console.log(reviews)
  return (
    <ul className={s.container}>
      {reviews?.map(({id,author,content,created_at}) => {
        return <li key={id}>
          <h3 className={s.authorTitle}>Author: {author}</h3>
          <p className={s.textReviews}>{content}</p>
          <p className={s.authorDate}>Date: {created_at.slice(0, 10)}</p>
          <hr/>
        </li>
      })}
      { reviews.length !== 0 || ("Anyone write reviews.. :( <->  But, you can be first!!")}
      
    </ul>
  )
}
Reviews.propTypes = {
reviews: PropTypes.arrayOf(
  PropTypes.shape({
    id:PropTypes.string.isRequired,
    author:PropTypes.string.isRequired,
    content:PropTypes.string.isRequired,
    created_at:PropTypes.string.isRequired
    })
  )
}

export default Reviews

