import React from 'react'

const Copyright = () => {
    return (
        <main className="copyright-area copyright-style-one">
            <section className="container">
                <details className="row align-items-center">
                    <div className="col-lg-6 col-md-8 col-sm-12 col-12">
                        <nav className="copyright-left">
                            <ul className="ft-menu link-hover">
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Terms And Condition</a></li>
                                <li><a href="/contact">Contact Us</a></li>
                            </ul>
                        </nav>
                    </div>
                    <article className="col-lg-6 col-md-4 col-sm-12 col-12">
                        <div className="copyright-right text-center text-md-end">
                            <p className="copyright-text">© Doob {new Date().getFullYear()}</p>
                        </div>
                    </article>
                </details>
            </section>
        </main>
    )
}
export default Copyright;