import './App.css'
import Typewriter from 'typewriter-effect';

function App() {

    return (
        <main>

            <section className="advice">
                <div className="icon-container">
                    <img className="logo-icon" src="/ONLYICON.svg" alt="logo GTS"/>
                    <img className="logo-name" src="/ONLYNAME.svg" alt="logo GTS"/>


                </div>
                <h1 className="advice__title">Nuestro sitio web estará disponible pronto.</h1>


                <div className="sub-title-container">
                    <Typewriter
                        options={{
                            loop: true,
                            cursor: '',

                        }}
                        onInit={(typewriter) => {
                            typewriter.typeString(
                                '<strong>Estamos trabajando en algo increíble.</strong>'
                            )
                                .pauseFor(200)
                                .deleteAll()
                                .typeString(
                                    '<strong>¡Volveremos pronto!</strong>'
                                )
                                .pauseFor(200)
                                .deleteAll()
                                .typeString(
                                    '<strong>Gracias por tu paciencia.</strong>'
                                )
                                .changeDeleteSpeed(1)
                                .pauseFor(200)
                                .deleteAll()
                                .start();

                        }}
                    />
                </div>

            </section>
            <section className="city-stuff">
                <ul className="skyscrappers__list">
                    <li className="skyscrapper__item skyscrapper-1"/>
                    <li className="skyscrapper__item skyscrapper-2"/>
                    <li className="skyscrapper__item skyscrapper-3"/>
                    <li className="skyscrapper__item skyscrapper-4"/>
                    <li className="skyscrapper__item skyscrapper-5"/>
                </ul>
                <ul className="tree__container">
                    <li className="tree__list">
                        <ul className="tree__item tree-1">
                            <li className="tree__trunk"/>
                            <li className="tree__leaves"/>
                        </ul>
                        <ul className="tree__item tree-2">
                            <li className="tree__trunk"/>
                            <li className="tree__leaves"/>
                        </ul>
                        <ul className="tree__item tree-3">
                            <li className="tree__trunk"/>
                            <li className="tree__leaves"/>
                        </ul>
                        <ul className="tree__item tree-4">
                            <li className="tree__trunk"/>
                            <li className="tree__leaves"/>
                        </ul>
                        <ul className="tree__item tree-5">
                            <li className="tree__trunk"/>
                            <li className="tree__leaves"/>
                        </ul>
                        <ul className="tree__item tree-6">
                            <li className="tree__trunk"/>
                            <li className="tree__leaves"/>
                        </ul>
                        <ul className="tree__item tree-7">
                            <li className="tree__trunk"/>
                            <li className="tree__leaves"/>
                        </ul>
                        <ul className="tree__item tree-8">
                            <li className="tree__trunk"/>
                            <li className="tree__leaves"/>
                        </ul>
                    </li>
                </ul>
                <ul className="crane__list crane-1">
                    <li className="crane__item crane-cable crane-cable-1"/>
                    <li className="crane__item crane-cable crane-cable-2"/>
                    <li className="crane__item crane-cable crane-cable-3"/>
                    <li className="crane__item crane-stand"/>
                    <li className="crane__item crane-weight"/>
                    <li className="crane__item crane-cabin"/>
                    <li className="crane__item crane-arm"/>
                </ul>
                <ul className="crane__list crane-2">
                    <li className="crane__item crane-cable crane-cable-1"/>
                    <li className="crane__item crane-cable crane-cable-2"/>
                    <li className="crane__item crane-cable crane-cable-3"/>
                    <li className="crane__item crane-stand"/>
                    <li className="crane__item crane-weight"/>
                    <li className="crane__item crane-cabin"/>
                    <li className="crane__item crane-arm"/>
                </ul>
                <ul className="crane__list crane-3">
                    <li className="crane__item crane-cable crane-cable-1"/>
                    <li className="crane__item crane-cable crane-cable-2"/>
                    <li className="crane__item crane-cable crane-cable-3"/>
                    <li className="crane__item crane-stand"/>
                    <li className="crane__item crane-weight"/>
                    <li className="crane__item crane-cabin"/>
                    <li className="crane__item crane-arm"/>
                </ul>
            </section>
        </main>
    )
}

export default App
