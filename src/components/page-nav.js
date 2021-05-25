import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route} from 'react-router-dom';
import SupervisorDashboard from '../pages/SupervisorDashboard';


class SignInForm extends Component {



    render() {

        return (

            <Router>

                <div className="FormCenter">

                    <form className="FormFields" onSubmit={this.handleSubmit}>

                        <div className="FormField">

                            <label className="FormField__Label" htmlFor="cnic">CNIC</label>

                            <input type="text" id="cnic" className="FormField__Input" placeholder="Enter your CNIC without dashes" name="cnic"/>

                        </div>

                        <div className="FormField">

                            <Link to={{
                                pathname: '/SupervisorDashboard'
                            }} className="FormField__Button mr-20">Sign In</Link>

                        </div>


                    </form>

                    <Route exact path="/SupervisorDashboard" component={SupervisorDashboard}>

                    </Route>


                </div>


            </Router>
        );
    }
}

export default SignInForm;