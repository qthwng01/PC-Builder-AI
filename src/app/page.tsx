import { Fragment } from 'react'
import Build from '@/components/build'
import ListItem from '@/components/list-item'
import ItemDetail from '@/components/item-detail'

export default function Home() {
  return (
    <Fragment>
      <Build />
      <ListItem />
      <ItemDetail />
    </Fragment>
  )
}
