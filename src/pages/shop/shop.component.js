import React from 'react';
import { Route } from 'react-router-dom'
import CollectionPage from '../collection/collection.component'
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';



const ShopPage = ({ match }) => (

  <div className = 'collections-overview'>
    <Route  exact path={`${match.path}`} component={CollectionsOverview} />
    <Route path={`${match.path}/:collectionID`} component={CollectionPage} />
  </div>
);

export default ShopPage;
