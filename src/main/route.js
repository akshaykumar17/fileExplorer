import React from 'react';
import {Route} from 'react-router';

import Collection from '../features/galleryViewer/components/Collection';
import { component as PageWrapper } from '../features/pageWrapper';

export default(
    <Route path='/' component={PageWrapper} >
        <Route path='/collection' component={Collection} />
        <Route path='/collection/:id' component={Collection} />
    </Route>
)
