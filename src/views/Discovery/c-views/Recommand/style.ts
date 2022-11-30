import styled from 'styled-components';


export const RecommendWrapper = styled.div``


export const RecommendSection = styled.div`
  display: flex;
  background-image: url(${require('@/assets/img/wrap-bg.png')});
  border: 1px solid #d3d3d3;
  ${(props) => props.theme.mixin.wrapV2}
`

export const RecommendLeft = styled.div`
  padding: 20px;
  width: 729px;
`
export const RecommendRight = styled.div`
  width: 250px;
  margin-left: 1px;
`

