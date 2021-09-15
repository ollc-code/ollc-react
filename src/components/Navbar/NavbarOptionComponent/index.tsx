import React from 'react';
import { NavbarOption } from '../NavbarOption';
import HomeIcon from "@material-ui/icons/Home";
import LiveTvIcon from "@material-ui/icons/LiveTv";
import AnnouncementIcon from "@material-ui/icons/Announcement";


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
				console.log(item.icon.type);
				return (
					<NavbarOption name={item.name} icon={item.icon} key={index} />
				);
			})}
		</>
	);
};