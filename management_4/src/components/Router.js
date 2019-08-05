import React, { Component } from 'react';
import { Router, Scene, Actions } from 'react-native-router-flux';
import LoginPage from './LoginPage';
import EmployeesView from './EmployeesView';
import DetailsView from './DetailsView';
import EmployeeCreateView from './EmployeeCreate';


const MainRouter = () => {
    return (
        <Router>
            <Scene key="root" hideNavBar>
                <Scene key='auth'>
                    <Scene key='loginPage' component={LoginPage} title='Please Login' />
                </Scene>
                <Scene key="main" initial>
                    <Scene
                        key='employeesView'
                        rightTitle='Add'
                        onRight={() => Actions.EmployeeCreateView()}
                        component={EmployeesView}
                        title='Employees' />
                    <Scene key="EmployeeCreateView"
                        title="Create"
                        component={EmployeeCreateView} />
                    <Scene key="DetailsView"
                        title="Employee Details"
                        component={DetailsView} />
                </Scene>
            </Scene>
        </Router>
    )
}

export default MainRouter;