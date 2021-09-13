import React from 'react';
import { OptionContainer } from './styles';
import HomeIcon from "@material-ui/icons/Home";
import AnnouncementIcon from "@material-ui/icons/Announcement";
import LiveTvIcon from "@material-ui/icons/LiveTv";

export const NavbarOptionComponent: React.FC = () => {

	const array = [
		{
			"name": "Home",
			"icon": <HomeIcon />
		},
		{
			"name": "Live Mass",
			"icon": <LiveTvIcon />
		},
		{
			"name": "Announcements",
			"icon": <AnnouncementIcon />
		}
	]

	return (
		<>
			{array.map((item, index) => {
				return (
					<OptionContainer key={index}>
				    	<p style={{padding:"5px"}}>{item.icon}</p>
						<p style={{padding:"5px"}}>{item.name}</p>
					</OptionContainer>
				);
			})}
		</>
	);
};