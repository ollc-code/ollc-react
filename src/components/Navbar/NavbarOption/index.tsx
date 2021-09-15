import { SvgIconComponent } from "@material-ui/icons";
import React, { Key, SVGProps } from 'react';
import { pathToFileURL } from "url";
import { OptionContainer } from './styles';

interface NavbarProps {
	name: string,
	icon: string
}


export const NavbarOption : React.FC<NavbarProps> = (name, icon) => {
	return (
		<OptionContainer>
			<a>
				<p style={{padding:"5px"}}>{icon}</p>
				<p style={{padding:"5px"}}>{name}</p>
			</a>
		</OptionContainer>
	);
}
