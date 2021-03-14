import React, {useState} from "react";
import DemoComponent from "./DemoComponent";

const LibraryBooks = () => {
    const [update, setUpdate] = useState(false);
    return (
        <div className={"books-list"}>
            <DemoComponent
                update={update}
            />
            <button
                onClick={() => {
                    setUpdate(!update);
                }}
            >Update</button>
        </div>
    );
};

export default LibraryBooks;
