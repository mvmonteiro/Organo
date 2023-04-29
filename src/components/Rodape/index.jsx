import './Rodape.css'

const Rodape = () => {
    return (<footer className="footer">
        <section>
            <ul>
                <li>
                    <a href="https://www.linkedin.com/in/marcusvmonteiro/" target="_blank">
                        <img src="./images/fb.png" alt="" />
                    </a>
                </li>
                <li>
                    <a href="twitter.com" target="_blank">
                        <img src="/images/tw.png" alt="" />
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/marcus_viniii/" target="_blank">
                        <img src="/images/ig.png" alt="" />
                    </a>
                </li>
            </ul>
        </section>
        <section>
            <img src="/images/logo.png" alt="" />
        </section>
        <section>
            <p>
                Desenvolvido por Marcus.
            </p>
        </section>
    </footer>)
}

export default Rodape