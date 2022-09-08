import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const SeeMoreButton = ({ to }) => {
  const navigate = useNavigate();

  return <Block onClick={() => navigate(to)}>더보기</Block>;
};

const Block = styled.div`
  margin-left: 40px;
  cursor: pointer;
  color: ${props => props.theme.ownColor};
  word-break: keep-all;
  font-weight: 600;
  &:hover {
    color: ${props => props.theme.ownColorHover};
  }
`;

export default SeeMoreButton;
