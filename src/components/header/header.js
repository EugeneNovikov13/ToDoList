import { useState } from 'react';
import { HeaderContext } from '../../context';
import styles from './header.module.css';
import { AddBlock, Search, SortButton } from './components';

export const Header = ({ sorted }) => {
	const [activeAddInput, setActiveAddInput] = useState(true);

	return (
		<HeaderContext.Provider
			value={{
				activeAddInput: activeAddInput,
				setActiveAddInput: setActiveAddInput,
			}}
		>
			<div className={styles.header}>
				<AddBlock />

				<Search
					activeAddInput={activeAddInput}
					setActiveAddInput={setActiveAddInput}
				/>
				<SortButton sorted={sorted} />
			</div>
		</HeaderContext.Provider>
	);
};
