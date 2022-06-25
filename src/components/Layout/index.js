
import Container from "../component"
import Footer from "../Footer/Footer"
import Navbar from "../Navbar/Navbar"

const Layout = ({children})=> {
    return(
        <>
            <Navbar/>
                <main>
                    <Container>{children}</Container>
                </main>
            <Footer/>
        </>
    )
}
export default Layout