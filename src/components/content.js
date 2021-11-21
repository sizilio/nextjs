import { Container, Row, Col, Navbar, Nav, NavDropdown, Form, FormControl, Button, Card } from 'react-bootstrap'
import Styles from '../../styles/scss/content.module.scss'
import Image from 'next/image'

export default function Content() {
    return (
        <div className="container mt-4 mt-md-5 mb-4 mb-md-5 p-3 p-md-5 d-flex justify-content-center">
            <div className="card p-5">
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <Image
                        src="/vinicius-sizilio.jpg"
                        alt="Vinícius Sizílio"
                        width={120}
                        height={120}
                        className={Styles.image}
                    />
                    <h1 className={Styles.name + " mt-3"}>Vinícius Sizílio</h1>
                    <h2 className={Styles.idd}>Desenvolvedor FullStack</h2>
                    <span className={Styles.email}>vinicius.sizilio@gmail.coom</span>
                    <div className="mt-4"> 
                        <span className={Styles.label}>PHP</span>
                        <span className={Styles.label}>Flutter</span>
                        <span className={Styles.label}>NextJS</span>
                    </div>
                </div>
            </div>
        </div>
    )
}