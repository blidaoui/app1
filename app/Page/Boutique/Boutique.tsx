import React from 'react'
import Header from './Header'
import MenuCategorie from './MenuCategorie'
import CardCategorie from './CardCategorie'
import HeaderNav from '@/app/components/Navbar/Header'

function Boutique() {
  return (
    <div>
      <HeaderNav />
      <Header />
      <MenuCategorie />
      <CardCategorie />
    </div>
  )
}

export default Boutique
