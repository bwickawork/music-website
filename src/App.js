import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

import Nav from "./components/nav/Nav";
import HomeScreen from "./screens/Home/HomeScreen";

import './styles/App.css';
import NewsScreen from "./screens/News/NewsScreen";
import Article0Screen from "./screens/News/Articles/Article0Screen";
import AboutScreen from "./screens/About/AboutScreen";
import VideosScreen from "./screens/Videos/VideosScreen";
import ContactScreen from "./screens/Contact/ContactScreen";
import ArticleAwardsScreen from "./screens/News/Articles/ArticleAwardsScreen";
import Video2022Screen from "./screens/Videos/Subpages/Video2022Screen";
import Video2021Screen from "./screens/Videos/Subpages/Video2021Screen";
import Video2020Screen from "./screens/Videos/Subpages/Video2020Screen";
import Video2019Screen from "./screens/Videos/Subpages/Video2019Screen";
import VideoMasterScreen from "./screens/Videos/Subpages/VideoMasterScreen";

export default function App() {
  return (
    <>
      <div style={{ margin: '0 auto', padding: '0 0px', width: '100%' }}>
        <Router basename={process.env.PUBLIC_URL}>
          <Nav />
          {/* <Banner /> */}
          <Route path="/about" exact>
            <About />
          </Route>
          <Route path="/news" exact>
            <News />
          </Route>
          <Route path="/news/seniors" exact>
            <Article0Screen />
          </Route>
          <Route path="/news/awards" exact>
            <ArticleAwardsScreen />
          </Route>
          <Route path="/videos" exact>
            <Videos />
          </Route>
          <Route path="/videos/recital22" exact>
            <Video2022Screen />
          </Route>
          <Route path="/videos/recital21" exact>
            <Video2021Screen />
          </Route>
          <Route path="/videos/recital20" exact>
            <Video2020Screen />
          </Route>
          <Route path="/videos/recital19" exact>
            <Video2019Screen />
          </Route>
          <Route path="/videos/master-class" exact>
            <VideoMasterScreen />
          </Route>
          <Route path="/contact" exact>
            <Contact />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
        </Router>
      </div>
    </>
  );
}

function Home() {
  return <HomeScreen />
}

function News() {
  return <NewsScreen />
}

function About() {
  return <AboutScreen />
}

function Videos() {
  return <VideosScreen />
}

function Contact() {
  return <ContactScreen />
}

function Topics() {
  let match = useRouteMatch();
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>
            Props v. State
          </Link>
        </li>
      </ul>

      {/* The Topics page has its own <Switch> with more routes
          that build on the /topics URL path. You can think of the
          2nd <Route> here as an "index" page for all topics, or
          the page that is shown when no topic is selected */}
      <Switch>
        <Route path={`${match.path}/:topicId`}>
          <Topic />
        </Route>
        <Route path={match.path}>
          <h3>Please select a topic.</h3>
        </Route>
      </Switch>
    </div>
  );
}

function Topic() {
  let { topicId } = useParams();
  return <h3>Requested topic ID: {topicId}</h3>;
}