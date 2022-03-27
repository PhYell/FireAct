import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const BookPage = () => {
    const { id, type } = useParams();

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const [data, setData] = useState();

    // useEffect(() => {
    //     fetch(`https://openlibrary.org/${type}/${id}.json`)
    //         .then((res) => res.json())
    //         .then((data) => console.log(data));
    // }, []);

    useEffect(() => {
        fetch(`https://openlibrary.org/${type}/${id}.json`)
            .then((res) => res.json())
            .then((data) => setData(data))
            .catch((err) => {
                setError(err.message);
                setData(null);
            })
            .finally(() => {
                setLoading(false);
                console.log(data);
            });
    }, []);

    return (
        <main className="book-page centered panel">
            <h2 className="title">{data?.title}</h2>
            {/* <p className="author-name">{data?.authors}</p> */}
        </main>
    );
};

export default BookPage;
