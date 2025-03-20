import { CardList } from "../../components/cardlist/cardlist"
import { FilterBar } from "../../components/filterBar/filter"
import { Footer } from "../../components/footer/footer"
import { Header } from "../../components/header/header"

export const Home = () => {
    return (
        <div>
            <Header />
            <FilterBar />
            <CardList />
            <Footer />
        </div>
    )
}