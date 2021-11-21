import React from 'react';
import { NavLink } from "react-router-dom";

export default class Nav extends React.Component {
    render() {
        return (


            <nav class="navbar navbar-expand-sm navbar-light bg-light" data-toggle="affix">
                <div class="mx-auto d-sm-flex d-block flex-sm-nowrap">
                    {/* <a class="navbar-brand" href="#">Brand</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample11" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button> */}
                    <div class="collapse navbar-collapse text-center" id="navbarsExample11">
                        <ul class="navbar-nav">

                            <li class="nav-item active mx-3">
                                {/* <Link className="Nav__link" to="/table">Tabla</Link> */}
                                {/* <NavLink className="navbar-item flex" activeClassName="is-active" to="/table">
                                    Stock
                                </NavLink> */}

                                <NavLink className="navbar-item flex" activeClassName="is-active"
                                    to={{
                                        pathname: `/table/stocks`,
                                        state: {
                                            db: 'stocks'
                                            // whatever you need to send with the route transition
                                        },
                                    }}>
                                    Stock
                                </NavLink>

                            </li>
                            <li class="nav-item active mx-3">
                                {/* <Link className="Nav__link" to="/add">Agregar</Link> */}
                                <NavLink className="navbar-item" activeClassName="is-active" to="/add">
                                    Agregar
                                </NavLink>
                            </li>

                            <li class="nav-item active mx-3">
                                {/* <Link className="Nav__link" to="/add">Agregar</Link> */}
                                <NavLink className="navbar-item" activeClassName="is-active" to="/upload">
                                    Cargar
                                </NavLink>
                            </li>

                            {/* <li className="Nav__item">
                                <Link className="Nav__link" to="/path3">Link 3</Link>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </nav>

        );
    }
}