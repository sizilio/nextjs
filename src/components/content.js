import Styles from '../../styles/scss/content.module.scss'
import Image from 'next/image'

export default function Content() {
    return (
        <div className="container mt-2 mt-md-5 mb-4 mb-md-5 p-3 p-md-5">
            <div className="row">
                <div className="col-12 col-md-4 offset-md-4">
                    <div className="card shadow">
                        <div className={Styles.index + " pt-5 pb-4 px-5 text-center shadow"}>
                            <Image
                                src="/vinicius-sizilio.jpg"
                                alt="Vinícius Sizílio"
                                width={120}
                                height={120}
                                className={Styles.image}
                            />
                            <h1 className={Styles.name + " mt-3"}>Vinícius Sizílio</h1>
                            <h2 className={Styles.idd}>Desenvolvedor FullStack</h2>
                            <p className={Styles.email}>vinicius.sizilio@gmail.com</p>
                            <a href="https://www.linkedin.com/in/vinicius-sizilio/" className="btn btn-secondary">
                                LinkedIn
                            </a>
                        </div>
                        <div className={Styles.label}>
                            <span>PHP</span>
                            <span>NextJS</span>
                            <span>Flutter</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}