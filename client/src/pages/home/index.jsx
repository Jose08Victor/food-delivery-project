import { useState } from 'react'
import { ExploreMenu } from '../../components/exploreMenu'
import { Header } from '../../components/header'
import './styles.css'
import { FoodDisplay } from '../../components/foodDisplay'
import { AppDownload } from '../../components/appDownload'

export const Home = () => {

  const [category, setCategory] = useState("All");

  return (
    <div>
      <Header />

      <ExploreMenu category={category} setCategory={setCategory} />

      <FoodDisplay category={category} />

      <AppDownload />
    </div>
  )
}