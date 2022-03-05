import { useState, useEffect } from "react";
import { FileUploader } from "./components/fileUploader";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Wrapper from "./components/wrapper";
import { UsersList } from "./components/usersList";
import { data } from "./api/fake_api";

function App() {
    const [users] = useState(data);
    const [matchingObj, setMatchingObj] = useState();

    useEffect(() => {
        return console.log("UPD");
    }, [matchingObj]);

    const onSuccess = savedFiles => {
        savedFiles.map(file => {
            // find obj filename matching usr
            const matchedObject = users.filter(item => findObjectContainFileName(item));
            function findObjectContainFileName(e) {
                return file.originalname.toLowerCase().includes(e.name.toLowerCase());
            }

            // simple validation
            if (matchedObject.length > 0) {
                setMatchingObj(matchedObject.map(el => el.attachements.push(file)));
            } else {
                alert(`Please note: ${file.originalname} doesn't match with any profile name.`);
            }

            return null;
        });
    };

    return (
        <Wrapper>
            <div className="App">
                <FileUploader onSuccess={onSuccess} />
                <UsersList users={users} />
                <ToastContainer />
            </div>
        </Wrapper>
    );
}

export default App;
