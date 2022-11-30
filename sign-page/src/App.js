import { Route, Routes } from "react-router-dom";
import StatusUpdate from "./components/StatusUpdate";
import StatusUpdates from "./components/StatusUpdates";
import BulkUpdate from "./components/BulkUpdate";
import SignIn from "./components/SignIn";

const App = () => {
return <div>
    <Routes>
    <Route path="StatusUpdate" element={<StatusUpdate />} />
    <Route path="StatusUpdates" element={<StatusUpdates />} />
    <Route path="BulkUpdate" element={<BulkUpdate />} />
    <Route path="SignIn" element={<SignIn />} />
    </Routes>
</div>
}

export default App;

// Our-domain.com/StatusUpdate => StatusUpdate Component
// Our-domain.com/StatusUpdates => StatusUpdates Component