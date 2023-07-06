import "./Search.css"
import Button from "../UI/Button"
const Search = props =>{
    return(
        <form action="#">
        <input type="text" placeholder="Search Item" className="search_input" />
        <Button className="btn search-btn">
          <i class="fa-solid fa-magnifying-glass-plus"></i>
        </Button>
      </form>
    )
}

export default Search;