import styled from 'styled-components'

const Block = styled.div`
 {
	position:absolute;
	background: transparent;
  border: 4px solid #000;
  padding: 1em;
	border-radius: 1em;
	width: 95%;
	margin-left : 0.1vw;
}
  :after, :before {
	bottom: 100%;
	left: ${props => props.left || '40%' };
  border: solid transparent;
	content: " ";
	height: 0;
	width: 0;
	position: absolute;
	pointer-events: none;
}

:after {
	border-color: rgba(136, 183, 213, 0);
	border-bottom-color: #5F6164; 
	border-width: 30px;
  margin-left: -30px;
}
 :before {
	border-color: rgba(194, 225, 245, 0);
	border-bottom-color: #000;
	border-width: 36px;
  margin-left: -36px;
}
`

export default Block