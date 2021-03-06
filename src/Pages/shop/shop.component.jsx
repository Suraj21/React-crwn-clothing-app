import React from 'react';
import {Route} from 'react-router-dom';
import { connect } from 'react-redux';

import CollectionsOverview from '../../Components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';
import { firestore, convertCollecitionsSnapshotToMap } from '../../firebase/firebase.utils';
import {updateCollections} from '../../redux/shop/shop.actions.js';
import WithSpinner from '../../Components/with-spinner/with-spinner.component';

const CollectionOverViewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {

    state = {
        loading:true
    };

    unsubscribeFromSnapshot = null;

    componentDidMount() {
        const {updateCollections} = this.props;
        const collectionRef = firestore.collection('collections');

        collectionRef.onSnapshot(async snapshot =>{
            const collectionMap = convertCollecitionsSnapshotToMap(snapshot);
            updateCollections(collectionMap);
            this.setState({loading: false});
        })
    }

    render() {
        const {match} = this.props;
        const {loading} = this.state;
        return ( 
            <div className='shop-page'>
                <Route exact path={`${match.path}`} render ={(props) => <CollectionOverViewWithSpinner isLoading={loading}{...props} /> } />
                <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSpinner isLoading={loading}{...props} />} />
            </div>
        );
    };
}

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionMap => 
        dispatch(updateCollections(collectionMap))
})


export default connect(null, mapDispatchToProps)(ShopPage);

