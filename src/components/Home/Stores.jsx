
import'./Stores.css'
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react'
import { fetchStores } from '../../rtk/slices/StoresSlice'

function Stores(){

    const stores = useSelector(state => state.stores);
    console.log(stores);
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(fetchStores());
    }, []);

    return(
        <>
            <div className='stores' id='stores'>
                <div className='container'>
                    <h1>Fulfil your satisfaction with Gebhaly's Online Shopping Experience Gebhaly brings USA, UK, UAE, China and Turkey Best Online stores to your door in Egypt</h1>
                    <div>
                        {stores.map((store) => (
                        <Link to={store.link}><img class="rounded-circle" src={store.image} alt="" /></Link>
                        ))}                    
                    </div>
                </div>
            </div>
        </>
    )
}

export default Stores;