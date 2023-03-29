import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import { useParams, useNavigate, Link, NavLink } from "react-router-dom";

export default function CountriesDetail() {

    const { countryName } = useParams<any>();    
    const countriesAll = useAppSelector((state) => state.countriesAll.countriesAll);
    //Clear Code cho nay duoc
    const itemNew = countriesAll.find((item:any) => item.name.common === countryName)
    return (
        <>
            <div>
                <div>
                    <Link to={`/`}>
                        <button>Back</button>
                    </Link>
                </div>
                <div>
                    <div>
                        <img src={itemNew?.flags.svg} alt="" />
                    </div>
                    <div>
                        <div>
                            <h1>{itemNew?.name.common}</h1>
                        </div>
                        <br />
                        <div>
                            <div>
                                <span>Native Name: </span><span>{itemNew?.name.common}</span>
                                <br />
                                <span>Population: </span><span>{itemNew?.population}</span>
                                <br />
                                <span>Region: </span><span>{itemNew?.region}</span>
                                <br />
                                <span>Sub Region: </span><span>{itemNew?.subregion}</span>
                                <br />
                                <span>Capital: </span><span>{itemNew?.capital}</span>
                            </div>
                            <br />
                            <div>
                                <span>Top Level Domain: </span><span>{itemNew?.tld}</span>
                                <br />
                                {/* <span>Currencies: </span><span>{itemNew?.currencies?.EUR.name}</span> */}
                                <br />
                                {/* <span>Languages: </span><span>{itemNew?.languages.fra}</span> */}
                            </div>
                        </div>
                        <br />
                        <div>
                            <h1>Border Countries:</h1>
                            <button>France</button>
                            <button>Germany</button>
                            <button>Netherlands</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
