import React from 'react'
import MenuItem from './MenuItem'
import './Menu.css'

function Menu() {
  return (
    <div className='menu'>
      <MenuItem title='Existing Inventory' />
      <MenuItem title='Used Inventory' />
      <MenuItem title='Trade-in' />
      <MenuItem title='Cybertruck' />
      <MenuItem title='Roadster' />
      <MenuItem title='Semi' />
      <MenuItem title='Charging' />
      <MenuItem title='Powerwall' />
      <MenuItem title='Commercial Solar' />
      <MenuItem title='Test Drive' />
      <MenuItem title='Find us' />
      <MenuItem title='Support' />
      <MenuItem title='United States' />
    </div>
  )
}

export default Menu