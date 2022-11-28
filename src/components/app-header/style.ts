
import styled from 'styled-components'

export const HeadWrapper = styled.div`
  height: 75px;
  background-color: #242424;
  font-size: 14px;

  .content {
    display: flex;
    justify-content: space-between;
    ${(props) => props.theme.mixin.wrapV1}
  }

  .divider {
    height: 5px;
    background-color: ${(props) => props.theme.color.primary}
  }


`


export const HeadLeft = styled.div`
  display: flex;

  .logo {
    display: block;
    width: 176px;
    height: 70px;
    background-position: 0 0;
    /* 移开文字 */
    text-indent: -9999px;
  }

  .title_list {
    display: flex;
    line-height: 70px;
    .item {
      position: relative;
      a {
        display: block;
        padding: 0 20px;
        color: #ccc;
      }
      :last-of-type a {
        position: relative;
        ::after {
          position: absolute;
          content: "";
          width: 28px;
          height: 19px;
          background-image: url(${require("@/assets/img/sprite_01.png")});
          background-position: -190px 0;
          top: 20px;
          right: -15px;
        }
      }
      &:hover a, .active {
        color: #fff;
        background: #000;
        text-decoration: none;
      }
      .active .icon {
        position: absolute;
        display: inline-block;
        width: 12px;
        height: 7px;
        bottom: -1px;
        left: 50%;
        transform: translate(-50%, 0);
        background-position: -226px 0;
      }
    }
  }
`

export const HeadRight = styled.div`
  display: flex;
  align-items: center;
  color: #787878;
  font-size: 12px;

  > .search {
    width: 158px;
    height: 32;
    border-radius: 16px;
    input {
      &::placeholder {
        font-size: 12px;
      }
    }
  }

  .center {
    width: 90px;
    height: 32px;
    line-height: 32px;
    margin: 0 16px;
    color: #ccc;
    text-align: center;
    border: 1px solid #666;
    border-radius: 16px;
    cursor: pointer;

    &:hover {
      color: #fff;
      border-color: #fff;
    }
  }

`
