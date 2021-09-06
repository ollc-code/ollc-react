import React from 'react';
import { SidebarContainer } from './styles';
import { SidebarOptionComponent } from '../OptionComponent';

const Sidebar: React.FC = () => {
	return (
		<SidebarContainer>
			<SidebarOptionComponent />
		</SidebarContainer>
	);
};

export default Sidebar;
