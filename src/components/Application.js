import React from 'react';
import { Route } from 'react-router-dom';

import NoteListContainer from '../containers/NoteListContainer';
import EmptyState from './EmptyState';
import NoteViewContainer from '../containers/NoteViewContainer';
import Styles from '~/styles.css';

const Application = () => (
  <div className={Styles.container}>
    <header className={Styles.header}>The header</header>
    <NoteListContainer />
    <Route exact path="/" component={EmptyState} />
    <Route
      path="/:id"
      component={NoteViewContainer}
    />
  </div>
);

export default Application;