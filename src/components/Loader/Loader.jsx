import { ThreeDots } from 'react-loader-spinner';
import s from './Loader.module.css';

function Loader() {
    return (
        <div className={s.div}>
            <ThreeDots visible={true} height="80" width="80" color="darkslategrey" radius="9" ariaLabel="three-dots-loading" wrapperStyle={{}} wrapperClass="" />
        </div>
    );
}

export default Loader;
