import './Footer.css'

export default function footer(){

    return (
        <footer className='footer'>
            <p>
                © {new Date().getFullYear()} Projeto de consumo de API
            </p>
        </footer>
    )
}

