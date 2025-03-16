import { Button } from '../button/button';
import './search.css'

export const SearchBar = () => {
    return (
        <div className="searchBar">

            <Button style={{ fontWeight: "var(--fontLWeight)", padding: "0px 15px", color: "var(--textDark)", borderRight: "1px solid var(--borderColor)" }}

                text="Anywhere" variant="default" />
            <Button style={{ fontWeight: "var(--fontLWeight)", padding: "0px 15px", color: "var(--textDark)", borderRight: "1px solid var(--borderColor)" }}
                text="Any week" variant="default" />
            <Button style={{ fontWeight: "var(--fontLWeight)", padding: "0px 15px", color: "var(--secondaryColor)" }} text="Add Guests" variant="default" />
            <Button variant='search' icon={<i class="fi fi-br-search"></i>} />


        </div>
    );
};


