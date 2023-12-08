import { Routes, Route } from 'react-router-dom';
import { createUserDocumentFromAuth, onAuthStateChangedListener, getCategoriesAndDocuments } from "./utils/firebase/firebase.utils";
import { useEffect } from 'react';
import { setCurrentUser } from './store/user/user.action';
import { setCategoriesMap } from './store/categories/category.action';
import { useDispatch } from 'react-redux';

import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import Authentication from './routes/authentication/authentication.component';
import Shop from './routes/shop/shop.component';
import CheckOut from './routes/checkout/checkout.component';

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {
            if(user) {
                createUserDocumentFromAuth(user);
            }
            dispatch(setCurrentUser(user));
        })

        return unsubscribe;
    }, []);

    return(
        <Routes>
            <Route path='/' element={<Navigation />}>
                <Route index element={<Home />}></Route>
                <Route path='shop/*' element={<Shop />}></Route>
                <Route path='auth' element={<Authentication />}></Route>
                <Route path='checkout' element={<CheckOut />}></Route>
            </Route>
        </Routes>
    );
};

export default App;
