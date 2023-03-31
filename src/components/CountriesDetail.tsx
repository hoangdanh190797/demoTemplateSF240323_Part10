import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import { useParams, useNavigate, Link, NavLink } from "react-router-dom";
import '../styles/components/_countryDetail.scss';

export default function CountriesDetail() {

    const { countryName } = useParams<any>();    
    const countriesAll = useAppSelector((state) => state.countriesAll.countriesAll);
    //Clear Code cho nay duoc
    const itemNew = countriesAll.find((item:any) => item.name.common === countryName)
    return (
        <div id='countryDetail_'>
            <div className='countryDetail_content'>
                <div className='countryDetail_content_button'>
                    <Link to={`/`}>
                        <button>Back</button>
                    </Link>
                </div>
                <div className='countryDetail_info'>
                    <div className='countryDetail_info_flag'>
                        <img src={itemNew?.flags.svg} alt="" />
                    </div>
                    <div className='countryDetail_info_detail'>
                        <div>
                            <h1>{itemNew?.name.common}</h1>
                        </div>
                        <br />
                        <div>
                            <div>
                                <span className='spOne'>Native Name: </span><span className='spTwo'>{itemNew?.name.common}</span>
                                <br />
                                <span className='spOne'>Population: </span><span className='spTwo'>{itemNew?.population}</span>
                                <br />
                                <span className='spOne' >Region: </span><span className='spTwo'>{itemNew?.region}</span>
                                <br />
                                <span className='spOne' >Sub Region: </span><span className='spTwo'>{itemNew?.subregion}</span>
                                <br />
                                <span className='spOne'>Capital: </span><span className='spTwo'>{itemNew?.capital}</span>
                            </div>
                            <br />
                            <div>
                                <span className='spOne'>Top Level Domain: </span><span className='spTwo'>{itemNew?.tld}</span>
                                {/* <span>Currencies: </span><span>{itemNew?.currencies?.EUR.name}</span> */}
                                {/* <span>Languages: </span><span>{itemNew?.languages.fra}</span> */}
                            </div>
                        </div>
                        <br />
                        <div>
                            <h2>Border Countries:</h2>
                            <button>France</button>
                            <button>Germany</button>
                            <button>Netherlands</button>
                        </div>
                        <br />
                    </div>
                </div>
            </div>
        </div>
    )
}
