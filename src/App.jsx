import './App.css'
import Button from "./components/Button.jsx";
import bag1 from "./assets/bag_1.png"
import bag2 from "./assets/bag_2.png"
import bag3 from "./assets/bag_3.png"
import bag4 from "./assets/bag_4.png"
import ourStory from "./assets/our_story.png"
import brand from "./assets/brand.png"
import Product from "./components/Product.jsx";
import Tile from "./components/Tile.jsx";


function App() {
  return ( <>
      <h1>Handbags & Purses</h1>
        <nav>
            <Button text="to the collection" disabled={false}/>
            <Button text="shop all bags" disabled={false}/>
            <Button text="pre-orders" disabled={true}/>
        </nav>
  <main className="page-container">
            <Product
                  label ="Best seller"
                  image = {bag1}
                  imageAlt="bag1"
                  nameBag= "The handy bag"
                  price = "400"
            />
            <Product
                  label ="Best seller"
                  image = {bag2}
                  imageAlt="bag2"
                  nameBag= "The stylish bag"
                  price = "250"
              />
              <Product
                  label ="Best seller"
                  image = {bag3}
                  imageAlt="bag3"
                  nameBag= "The simple bag"
                  price = "300"
              />
              <Product
                  label ="Best seller"
                  image = {bag4}
                  imageAlt="bag4"
                  nameBag= "The trendy bag"
                  price = "150"
              />
  </main>
          <footer>
              <Tile titleStory="the brand">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, aspernatur distinctio dolores exercitationem laboriosam minima nulla odit omnis optio tenetur!</p>
              <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci animi aspernatur dignissimos dolore dolorum ex, in laudantium necessitatibus perspiciatis quaerat tempore. Ab incidunt itaque magni nam nemo pariatur similique?</p>
              </Tile>
              <Tile imageSubject={brand} imageSubjectAlt="descriptionbrand"> </Tile>
              <Tile imageSubject={ourStory} imageSubjectAlt="descriptionofourstory"> </Tile>
              <Tile titleStory="our story">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, aspernatur distinctio dolores exercitationem laboriosam minima nulla odit omnis optio tenetur!</p>
                  <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci animi aspernatur dignissimos dolore dolorum ex, in laudantium necessitatibus perspiciatis quaerat tempore. Ab incidunt itaque magni nam nemo pariatur similique?</p>
              </Tile>
          </footer>
      </>
  )
}

export default App
