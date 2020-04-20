import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpenseDashboardPage = () => <div>this is my dashboard component.</div>;
const AddExpensePage = () => <div>this is my Add Expense component.</div>;
const EditExpensePage = () => <div>this is my Edit Expense component.</div>;
const HelpExpensePage = () => <div>this is my Help Expense component.</div>;
const NotFoundPage = () => <div>404 !!</div>;

const routes = (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={ExpenseDashboardPage} exact={true} />
            <Route path="/create" component={AddExpensePage} />
            <Route path="/edit" component={EditExpensePage} />
            <Route path="/help" component={HelpExpensePage} />
            <Route component={NotFoundPage} />
        </Switch>
    </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));
