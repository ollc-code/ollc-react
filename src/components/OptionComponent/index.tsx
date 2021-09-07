import React from 'react';
import { OptionContainer } from './styles';
import HomeIcon from '../../images/home_icon.png';

export const NavbarOptionComponent: React.FC = () => {
	return (
		<>
			{[...Array(3)].map((index) => {
				return (
					<OptionContainer key={index}>
						<img src={HomeIcon} alt='home_icon' />
						<p>Home</p>
					</OptionContainer>
				);
			})}
		</>
	);
};
