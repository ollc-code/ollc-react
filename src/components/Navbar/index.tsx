import React from 'react';
import { NavbarContainer } from './styles';
import { NavbarOptionComponent } from '../NavbarOptionComponent';
import { FlexRow } from '../Common/commonStyles';

const Navbar: React.FC = () => {
	return (
		<NavbarContainer style={{ 
			justifyContent: 'space-between',
			padding: '0px 30px'}}
			>
				<h3>OLLC Dev</h3>
				<FlexRow>
					<NavbarOptionComponent />
				</FlexRow>
		</NavbarContainer>
	);
};

export default Navbar;