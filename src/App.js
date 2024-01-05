import Navbar from "./components/Navbar"
import Categories from "./components/Categories"
import Images from"./components/Images"
import Recommended from"./components/Recommended"
import Topics from "./components/Topics"
import Popular from"./components/Popular"
import Footer from "./components/Footer"

function App()
{
    return(
        <div>
            <Navbar></Navbar>
            <Categories></Categories>
            <Images></Images>
            <Recommended></Recommended>
            <Topics></Topics>
            <Popular></Popular>
            <Footer></Footer>
        </div>
    )
}

export default App