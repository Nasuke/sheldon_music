export function formatCount(count:number) {
  if (count > 1e5) {
    return Math.floor(count / 1e4) + '万'
  } else {
    return count
  }
}


export function formatImgSize(
  imgUrl: string,
  width: number,
  height: number = width
) {
  return imgUrl + `?param=${width}x${height}`
}
