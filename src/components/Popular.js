import p1 from "../asserts/images/p1.jpg"
import p2 from "../asserts/images/p2.jpg"
import p3 from "../asserts/images/p3.jpg"
import p4 from "../asserts/images/p4.jpg"


function Popular()
{
  return(
    <div>
    <div class="popular">
        <h1 class="popular__title">Most Popular</h1>
        <p class="popular__subtitle">Pick the best fit</p>
        <div class="popular__container">
            <div class="course-card">
                <img src={p1}></img>
                <h3>2023 Python Data Visualisation Masterclass</h3>
                <p>Col Steele</p>
                <p>4.7⭐⭐⭐⭐</p>
                <p>449<del>1999</del></p>
            </div>

            <div class="course-card">
                <img src={p2}></img>
                <h3>Web development Bootcamp 2023| Advance</h3>
                <p>Col Steele</p>
                <p>4.9⭐⭐⭐⭐⭐</p>
                <p>449<del>1999</del></p>
            </div>

            <div class="course-card">
                <img src={p3}></img>
                <h3>Master UI/UX design with Figma</h3>
                <p>Col Steele</p>
                <p>3.9⭐⭐⭐⭐</p>
                <p>449<del>1999</del></p>
            </div>

            <div class="course-card">
                <img src={p4}></img>
                <h3>Basic to advance Java core Training</h3>
                <p>Col Steele</p>
                <p>3.2⭐⭐⭐⭐</p>
                <p>449<del>1999</del></p>
            </div>

            <div class="course-card">
                <img src={p1}></img>
                <h3>2023 Python Data Visualisation Masterclass</h3>
                <p>Col Steele</p>
                <p>4.7⭐⭐⭐⭐</p>
                <p>449<del>1999</del></p>
            </div>

            <div class="course-card">
                <img src={p2}></img>
                <h3>Web development Bootcamp 2023| Advance</h3>
                <p>Col Steele</p>
                <p>4.9⭐⭐⭐⭐⭐</p>
                <p>449<del>1999</del></p>
            </div>

            <div class="course-card">
                <img src={p3}></img>
                <h3>Master UI/UX design with Figma</h3>
                <p>Col Steele</p>
                <p>3.9⭐⭐⭐⭐</p>
                <p>449<del>1999</del></p>
            </div>

            <div class="course-card">
                <img src={p4}></img>
                <h3>Basic to advance Java core Training</h3>
                <p>Col Steele</p>
                <p>3.2⭐⭐⭐⭐</p>
                <p>449<del>1999</del></p>
            </div> 
        </div>
    </div>
    </div>
  )
}

export default Popular