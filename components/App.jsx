import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { withRouter, Switch, Route, Redirect, Link } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import {Wrapper, Tile7} from './Skeleton.jsx';
import {WorkTile1, WorkTile2, WorkTile3, WorkTile4, WorkTile5, WorkTile6} from './WorkTiles.jsx';
import {LeisureTile1, LeisureTile2, LeisureTile3, LeisureTile4, LeisureTile5, LeisureTile6} from './LeisureTiles.jsx';
import {HomeTile1, HomeTile2, HomeTile3, HomeTile4, HomeTile5, HomeTile6} from './HomeTiles.jsx';
import {OrganizationsTile1, OrganizationsTile2, OrganizationsTile3, OrganizationsTile4, OrganizationsTile5, OrganizationsTile6} from './OrganizationsTiles.jsx';
import {EducationTile1, EducationTile2, EducationTile3, EducationTile4, EducationTile5, EducationTile6} from './EducationTiles.jsx';
import {SkillsTile1, SkillsTile2, SkillsTile3, SkillsTile4, SkillsTile5, SkillsTile6} from './SkillsTiles.jsx';
import {AboutTile1, AboutTile2, AboutTile3, AboutTile4, AboutTile5, AboutTile6} from './AboutTiles.jsx';
import LeftNavigation from './LeftNavigation.jsx';
import RightNavigation from './RightNavigation.jsx';
import './../index.less';

const App = ({ location }) => {
  const timeout = {enter: 1000, exit: 1000};
  return(
    <div>
      <LeftNavigation/>
      <Wrapper>
        <TransitionGroup component={null}>
          <CSSTransition key={location.key} timeout={timeout} classNames="slideDown">
            <Switch location={location}>
              <Route exact path="/" component={HomeTile6} />
              <Route path="/home" component={HomeTile6} />
              <Route path="/work" component={WorkTile6} />
              <Route path="/about" component={AboutTile6} />
              <Route path="/skills" component={SkillsTile6} />
              <Route path="/education" component={EducationTile6} />
              <Route path="/organizations" component={OrganizationsTile6} />
              <Route path="/leisure" component={LeisureTile6} />
              <Route render={() => <div>Not Found</div>} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
        <TransitionGroup component={null}>
            <CSSTransition key={location.key} timeout={timeout} classNames="slideLeft">
              <Switch location={location}>
                <Route exact path="/" component={HomeTile5} />
                <Route path="/home" component={HomeTile5} />
                <Route path="/work" component={WorkTile5} />
                <Route path="/about" component={AboutTile5} />
                <Route path="/skills" component={SkillsTile5} />
                <Route path="/education" component={EducationTile5} />
                <Route path="/organizations" component={OrganizationsTile5} />
                <Route path="/leisure" component={LeisureTile5} />
                <Route render={() => <div>Not Found</div>} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        <TransitionGroup component={null}>
          <CSSTransition key={location.key} timeout={timeout} classNames="slideRight">
            <Switch location={location}>
              <Route exact path="/" component={HomeTile4} />
              <Route path="/home" component={HomeTile4} />
              <Route path="/work" component={WorkTile4} />
              <Route path="/about" component={AboutTile4} />
              <Route path="/skills" component={SkillsTile4} />
              <Route path="/education" component={EducationTile4} />
              <Route path="/organizations" component={OrganizationsTile4} />
              <Route path="/leisure" component={LeisureTile4} />
              <Route render={() => <div>Not Found</div>} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
        <TransitionGroup component={null}>
          <CSSTransition key={location.key} timeout={timeout} classNames="slideLeft">
            <Switch location={location}>
              <Route exact path="/" component={HomeTile3} />
              <Route path="/home" component={HomeTile3} />
              <Route path="/work" component={WorkTile3} />
              <Route path="/about" component={AboutTile3} />
              <Route path="/skills" component={SkillsTile3} />
              <Route path="/education" component={EducationTile3} />
              <Route path="/organizations" component={OrganizationsTile3} />
              <Route path="/leisure" component={LeisureTile3} />
              <Route render={() => <div>Not Found</div>} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
        <TransitionGroup component={null}>
          <CSSTransition key={location.key} timeout={timeout} classNames="slideUp">
            <Switch location={location}>
              <Route exact path="/" component={HomeTile2} />
              <Route path="/home" component={HomeTile2} />
              <Route path="/work" component={WorkTile2} />
              <Route path="/about" component={AboutTile2} />
              <Route path="/skills" component={SkillsTile2} />
              <Route path="/education" component={EducationTile2} />
              <Route path="/organizations" component={OrganizationsTile2} />
              <Route path="/leisure" component={LeisureTile2} />
              <Route render={() => <div>Not Found</div>} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
        <TransitionGroup component={null}>
          <CSSTransition key={location.key} timeout={timeout} classNames="slideRight">
            <Switch location={location}>
              <Route exact path="/" component={HomeTile1} />
              <Route path="/home" component={HomeTile1} />
              <Route path="/work" component={WorkTile1} />
              <Route path="/about" component={AboutTile1} />
              <Route path="/skills" component={SkillsTile1} />
              <Route path="/education" component={EducationTile1} />
              <Route path="/organizations" component={OrganizationsTile1} />
              <Route path="/leisure" component={LeisureTile1} />
              <Route render={() => <div>Not Found</div>} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </Wrapper>
      <RightNavigation/>
    </div>
  )
};

export default withRouter(App);
