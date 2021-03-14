import React, {useState, useEffect} from "react";
import { withApollo } from 'react-apollo';
import {GET_LIBRARY_BOOKS} from "./queries/getLibraryBooks";

const DemoComponent = ({client, update}) => {
    console.log("demo comp!!");
    let result = [];
    const [books, updateBooks] = useState([]);

    const getBooks = async () => {
        result = await client.query({
            query: GET_LIBRARY_BOOKS,
        });
        console.log("getBooks data ", result);
        updateBooks(result.data.getLibraryBooks);
    };

    useEffect(() => {
        console.log("use effect called!!");
        getBooks();
    }, [update]); // eslint-disable-line react-hooks/exhaustive-deps
    
    // console.log(result);

    // if (error) return "Error Fetching Library Books List";
    // if (loading) return "Loading";

    // const readCacheData = () => {
    //     const dataR = client.readQuery({query: GET_LIBRARY_BOOKS});
    //     console.log(dataR);
    // };

    // if (!loading && data.getLibraryBooks.length) {
    //     readCacheData();
    // }

    return (
        <React.Fragment>
            <div className={"books-list"}>
                {
                    books.length > 0 ? (
                        books.map(book => (
                            <div key={book._id}>
                                <p>{book.name.firstName + " " + book.name.lastName}</p>
                                <p>{book.copies}</p>
                            </div>
                        ))
                    ) : (
                        <p className={"empty-list-message"}>"No Data"</p>
                    )
                }
            </div>
        </React.Fragment>
    );
};

export default withApollo(DemoComponent);
