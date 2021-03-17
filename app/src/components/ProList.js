import { useEffect } from "react";
import { connect } from "react-redux";
import { fetchData } from "../store";

const ProList = (props) => {
    useEffect(() => {
        props.fetchData();
    }, []);
    return (
        <div className="pro-wrapper">
            {props.isLoading ? <h3>Loading List...</h3> : null}
            {props.error ? <p style={{ color: "red"}}>{props.error}</p> : null}
            {props.pros.map((pro) => (
                <div key={pro.index} className="proDiv">
                    <h3>{pro.name}</h3>
                    <p>In Game Name: {pro.personaname}</p>
                    <p>Team: {pro.team_name}</p>
                    <p>Country: {(pro.country_code).toUpperCase()}</p>
                
                
                </div>
            ))}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        isLoading: state.isLoading,
        pros: state.pros,
        error: state.error
    };
};
export default connect(mapStateToProps, { fetchData })(ProList);