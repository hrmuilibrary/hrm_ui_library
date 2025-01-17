import React, { ReactElement } from 'react'
import { Empty } from '../../components/Empty'
import no_mobile_image from '../../assets/images/no_mobile_image.svg'

type TProps = {
  message: string
}
export const GoToWebPage = ({ message }: TProps): ReactElement => {
  return <Empty paragraphMessage={message} mainMessage={''} illustration={no_mobile_image} />
}
