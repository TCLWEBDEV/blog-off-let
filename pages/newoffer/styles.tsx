import styled from 'styled-components';

interface Props {
  isDragActive?: any;
  dragActive?: any;
  dragReject?: any;
  isDragReject?: any;
  img?: any;
}
interface Type {
  type?: 'default' | 'error' | 'success';
}

export const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 104px auto;
  gap: 48px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 48px 0;
  @media(max-width: 600px) {
    width: 100%;
    height: 100%;
  }
`;

export const SearchInput = styled.div`
  fieldset{
    border-radius: 12px;
  }
`;

export const DropContainer = styled.div<Props>`
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center;
  background-color: #f8f8fa;
  box-sizing: border-box;
  border-radius: 8px;
  ${(props) => props.isDragActive && props.dragActive};
  ${(props) => props.isDragReject && props.dragReject};
  text-align: center;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 104px;
  height: 104px;
  margin-top: 12px;
  border: solid 1px #e0e3eb;
  margin-right: 12px;
  &:hover {
    background-color: #f0f1f5;
  }
  @media(max-width: 600px) {
    width: 54px;
    height: 54px;
    margin-top: 12px;
  }
`;
const messageResult = {
  default: '#212E63',
  error: '#FC4F4F',
  success: '#14C87C',
};
export const UploadMessage = styled.p<Type>`
  display: flex;
  color: ${(props) => messageResult[props.type || 'default']};
  justify-content: center;
  align-items: center;
  padding: 32px;
`;

export const Ghost = styled.div`

  background-color: transparent;
  height: 600px;

`;

export default Container;
// add rotas para deploy (nova api)
