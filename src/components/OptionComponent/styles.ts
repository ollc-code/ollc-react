import styled from 'styled-components';

export const OptionContainer = styled.div`
	display: flex;
	flex-direction: column;
	jusitfy-content: center;
	align-items: center;
	>img: {
		height: 18px;
		object-fit: contain;
		padding: 10px;
	}
	> p {
		font-size: 11px;
	}
	&:hover {
		background-color: #e9ecf6;
	}
`;
