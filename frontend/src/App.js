import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Paper from '@material-ui/core/Paper';
import "assets/scss/material-kit-react.scss?v=1.9.0";

// pages for this product
import Footer from 'views/components/Footer'
import HomeScreen from 'views/home/HomeScreen'
import NewBlogScreen from 'views/blog/NewBlogScreen'
import BlogScreen from 'views/blog/BlogScreen'
import SigninScreen from 'views/sign/SigninScreen'
import SignupScreen from 'views/sign/SignupScreen'
import TopNav from 'views/components/TopNav'

import Image from 'assets/img/light-bg.jpg'

const styles = {
    paperContainer: {
        backgroundImage: `url(${Image})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    }
};

function App() {
    return (
        <BrowserRouter>

            <TopNav />
            <Paper style={styles.paperContainer}>
                <Switch>
                    <Route exact path="/" component={HomeScreen} />
                    <Route exact path="/signin" component={SigninScreen} />
                    <Route exact path="/signup" component={SignupScreen} />
                    <Route exact path="/blog/new" component={NewBlogScreen} />
                    <Route path="/blog" component={BlogScreen} />
                    <Route path="/:any" component={HomeScreen} />
                </Switch>
                <Footer />
            </Paper>


        </BrowserRouter >
    );
}

export default App;
