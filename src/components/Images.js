
import img1 from "../asserts/images/img1.jpg"

function Images()
{
  return(
    <div>
    <div class="image">
        <img src={img1}alt="sale image"></img>
        <div class="image__offer">
            <h2>Udemy Flash Sale! 24 hours to save!</h2>
            <p>Get the top courses for just 499</p>
        </div>
    </div>
    </div>
  )
}

export default Images