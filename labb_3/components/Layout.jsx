import Header from './Header'
import Footer from './Footer'

const Layout = ({ children }) => {
    return (
        <div className="flex flex-col justify-between min-h-screen">
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    )
}

export default Layout
