import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadMoreEvents } from "../Utils/EventSlice";
import Card from "./Card";




const CardList = () => {
    const dispatch = useDispatch();
    const { eventCards, showShimmer, allLoaded } = useSelector((state) => state.events);

    useEffect(() => {
        dispatch(loadMoreEvents()); // Load the first set initially

        const handleScroll = () => {
            if (!allLoaded && window.scrollY + window.innerHeight >= document.body.scrollHeight) {
                dispatch(loadMoreEvents());
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [dispatch, allLoaded]);

    return (
        <div className="card-list">
            {eventCards.map((card, index) => (
                <Card key={index} eventdata={card} />
            ))}
            {/* {showShimmer && <Shimmer />} */}
            {allLoaded && <div className="message">You have seen all the cards!</div>}
        </div>
    );
};

export default CardList;
