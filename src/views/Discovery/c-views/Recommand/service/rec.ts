
import hyRequest from '@/service'

export function getBanner() {
  return hyRequest.get({
    url: '/banner'
  })
}
