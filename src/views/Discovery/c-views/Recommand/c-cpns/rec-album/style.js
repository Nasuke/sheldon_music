import styled from "styled-components";


export const AlbumWrapper = styled.div`
  margin-top: 30px;

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    height: 186px;
    margin: 20px 0 37px;
    border: 1px solid #d3d3d3;
    background: #f5f5f5;

    .roll-list {
      width: 640px;
      height: 150px;
    }


    .arrow {
      width: 17px;
      height: 17px;
      cursor: pointer;
    }
    .left {
      background-position: -260px -75px;
    }
    .right {
      background-position: -300px -75px;
    }
  }
`
