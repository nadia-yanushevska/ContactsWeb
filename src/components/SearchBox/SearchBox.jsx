import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { changeFilter } from '../../redux/filters/slice';
import { selectNameFilter } from '../../redux/filters/selectors';

import s from './SearchBox.module.css';
import { IoMdClose } from 'react-icons/io';

function SearchBox() {
    const dispatch = useDispatch();
    const filterValue = useSelector(selectNameFilter);

    useEffect(() => {
        return () => dispatch(changeFilter(''));
    }, []);

    return (
        <label className={s.label}>
            Find contacts
            <div className={s.div}>
                <input type="text" className={s.input} value={filterValue} onChange={e => dispatch(changeFilter(e.target.value))} />
                {filterValue && (
                    <button type="button" className={s.btn} onClick={() => dispatch(changeFilter(''))}>
                        <IoMdClose color="darkslategrey" size={28} />
                    </button>
                )}
            </div>
        </label>
    );
}

export default SearchBox;
