import React from 'react';
import { NavbarContainer } from './styles';
import { NavbarOptionComponent } from '../OptionComponent';
import { FlexRow } from '../Common/commonStyles';

const Navbar: React.FC = () => {
	return (
		<NavbarContainer style={{ width: '100%', background: 'red' }}>
			<FlexRow
				style={{
					justifyContent: 'space-between',
					width: '100%',
					padding: '0px 10px',
				}}
			>
				<h3>Some text</h3>
				<FlexRow style={{ padding: '0 5px', gap: '20px' }}>
					<NavbarOptionComponent />
				</FlexRow>
			</FlexRow>
		</NavbarContainer>
	);
};

export default Navbar;
