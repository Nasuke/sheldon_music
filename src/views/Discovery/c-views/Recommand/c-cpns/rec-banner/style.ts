
import styled from 'styled-components'
import downloadUrl from '@/assets/img/download.png';

export const BannerWrapper = styled.div`

  .content {
    display: flex;
    position: relative;
    ${(props) => props.theme.mixin.wrapV2};
    height: 270px;
  }
`


export const BannerLeft = styled.div`
  width: 730px;

  .item {
    overflow: hidden;
    height: 270px;
    .image {
      width: 100%;
    }
  }

  .dots {
    display: flex;
    justify-content: center;
    position: absolute;
    top: 239px;
    left: 0;
    width: 730px;
    height: 20px;
    text-align: center;

    >li {
      margin: 0 2px;

      .item {
        display: block;
        width: 20px;
        height: 20px;
        border-radius: 50%;
      }
    }
  }
`

export const BannerRight = styled.a.attrs({
  href: "https://music.163.com/#/download",
  target: "_blank"
})`
  width: 254px;
  height: 270px;
  background: url(${require('@/assets/img/download.png')});
`
export const BannerControl = styled.div`



  .btn {
    position: absolute;
    top:50%;
    transform: translateY(-50%);
    width: 37px;
    height: 63px;
    background-image: url(${require("@/assets/img/banner_sprite.png")});
    background-color: transparent;
    cursor: pointer;

    &:hover {
      background-color: rgba(0, 0, 0, .1);
    }
  }

  .left {
    left: -68px;
    background-position: 0 -360px;
  }
  .right {
    right: -68px;
    background-position: 0 -508px;
  }
`

