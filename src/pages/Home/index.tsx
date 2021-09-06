import React from 'react';
import {
	PageContainer,
	PageBody,
	PageContent,
} from '../../components/Common/commonStyles';
import Sidebar from '../../components/Sidebar';

const Home: React.FC = () => {
	return (
		<PageContainer>
			<PageBody>
				<Sidebar />
			</PageBody>
		</PageContainer>
	);
};

export default Home;
