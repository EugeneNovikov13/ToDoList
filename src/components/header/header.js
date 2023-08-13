import styles from './header.module.css';
import { AddBlock, Search, SortButton } from './components';

export const Header = () => {
	return (
		<div className={styles.header}>
			<AddBlock />
			<Search	/>
			<SortButton />
		</div>
	);
};
