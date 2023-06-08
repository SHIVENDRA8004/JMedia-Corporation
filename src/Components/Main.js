import Body from "./Body";
import Header from "./Header";
import Test from "./Test";
const Main = ({ headQuarters, setLocation }) => {
    return (
        <div className="container-fluid App">
            <div className="row">
                <div className="col-12">
                    <Header />
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <Body headQuarters={headQuarters} setLocation={setLocation} />
                </div>
            </div>
        </div>
    );
};

export default Main;
