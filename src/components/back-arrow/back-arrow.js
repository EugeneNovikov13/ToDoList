import styles from './back-arrow.module.css';
import { useNavigate } from 'react-router-dom';

export const BackArrow = () => {
	const navigate = useNavigate();

	return <div className={styles.backArrow} onClick={() => navigate('/')}></div>;
};
