import { Link } from 'react-router-dom';
import s from './Home.module.css';

function Home() {
    return (
        <>
            <h1 className={s.title}>Home</h1>
            <p className={s.text}>
                Introducing the <em className={s.em}>Contacts Web</em> – your all-in-one solution for seamless contact management on the go! With our intuitive interface, managing, accessing and
                updating your contacts has never been easier. Store and categorize names and numbers in one centralized location, and never lose touch with important connections again. Whether you
                need to search for specific contacts or add new ones, our app&#39;s user-friendly design ensures a smooth experience. Say goodbye to scattered contact lists and hello to streamlined
                organization with the
                <em className={s.em}> Contacts Web</em> –{' '}
                <Link to="/regidter" className={s.link}>
                    sign up today
                </Link>
                !
            </p>
        </>
    );
}

export default Home;
