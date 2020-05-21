import styled from 'styled-components';

const BoardContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 15px);
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
  border: solid 2px #fff;
`;

export default BoardContainer;
