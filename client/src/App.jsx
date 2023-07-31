import Header from './components/header/Header.jsx';
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom';
import {ConfigProvider, theme} from 'antd';

import MSAAVariant1 from './pages/saa/maarek/M-SAA-Variant-1.jsx';
import MSAAVariant2 from './pages/saa/maarek/M-SAA-Variant-2.jsx';
import MSAAVariant3 from './pages/saa/maarek/M-SAA-Variant-3.jsx';
import MSAAVariant4 from './pages/saa/maarek/M-SAA-Variant-4.jsx';
import MSAAVariant5 from './pages/saa/maarek/M-SAA-Variant-5.jsx';
import MSAAVariant6 from './pages/saa/maarek/M-SAA-Variant-6.jsx';
import NSAAVariant1 from './pages/saa/neil/N-SAA-Variant-1.jsx';
import NSAAVariant2 from './pages/saa/neil/N-SAA-Variant-2.jsx';
import NSAAVariant3 from './pages/saa/neil/N-SAA-Variant-3.jsx';
import NSAAVariant4 from './pages/saa/neil/N-SAA-Variant-4.jsx';
import NSAAVariant5 from './pages/saa/neil/N-SAA-Variant-5.jsx';
import NSAAVariant6 from './pages/saa/neil/N-SAA-Variant-6.jsx';
import ISAAVariant1 from './pages/saa/indus/I-SAA-Variant-1.jsx';
import ISAAVariant2 from './pages/saa/indus/I-SAA-Variant-2.jsx';
import ISAAVariant3 from './pages/saa/indus/I-SAA-Variant-3.jsx';
import ISAAVariant4 from './pages/saa/indus/I-SAA-Variant-4.jsx';
import ISAAVariant5 from './pages/saa/indus/I-SAA-Variant-5.jsx';
import ISAAVariant6 from './pages/saa/indus/I-SAA-Variant-6.jsx';
import MDEVVariant1 from './pages/dev/maarek/M-DEV-Variant-1.jsx';
import MDEVVariant2 from './pages/dev/maarek/M-DEV-Variant-2.jsx';
import MDEVVariant3 from './pages/dev/maarek/M-DEV-Variant-3.jsx';
import MDEVVariant4 from './pages/dev/maarek/M-DEV-Variant-4.jsx';
import MDEVVariant5 from './pages/dev/maarek/M-DEV-Variant-5.jsx';
import MDEVVariant6 from './pages/dev/maarek/M-DEV-Variant-6.jsx';
import NDEVVariant1 from './pages/dev/neil/N-DEV-Variant-1.jsx';
import NDEVVariant2 from './pages/dev/neil/N-DEV-Variant-2.jsx';
import NDEVVariant3 from './pages/dev/neil/N-DEV-Variant-3.jsx';
import NDEVVariant4 from './pages/dev/neil/N-DEV-Variant-4.jsx';
import NDEVVariant5 from './pages/dev/neil/N-DEV-Variant-5.jsx';
import NDEVVariant6 from './pages/dev/neil/N-DEV-Variant-6.jsx';
import IDEVVariant1 from './pages/dev/indus/I-DEV-Variant-1.jsx';
import IDEVVariant2 from './pages/dev/indus/I-DEV-Variant-2.jsx';
import IDEVVariant3 from './pages/dev/indus/I-DEV-Variant-3.jsx';
import IDEVVariant4 from './pages/dev/indus/I-DEV-Variant-4.jsx';
import IDEVVariant5 from './pages/dev/indus/I-DEV-Variant-5.jsx';
import IDEVVariant6 from './pages/dev/indus/I-DEV-Variant-6.jsx';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Header/>}>
            <Route path="saa/maarek/v-1" element={<MSAAVariant1/>}/>
            <Route path="saa/maarek/v-2" element={<MSAAVariant2/>}/>
            <Route path="saa/maarek/v-3" element={<MSAAVariant3/>}/>
            <Route path="saa/maarek/v-4" element={<MSAAVariant4/>}/>
            <Route path="saa/maarek/v-5" element={<MSAAVariant5/>}/>
            <Route path="saa/maarek/v-6" element={<MSAAVariant6/>}/>

            <Route path="saa/neil/v-1" element={<NSAAVariant1/>}/>
            <Route path="saa/neil/v-2" element={<NSAAVariant2/>}/>
            <Route path="saa/neil/v-3" element={<NSAAVariant3/>}/>
            <Route path="saa/neil/v-4" element={<NSAAVariant4/>}/>
            <Route path="saa/neil/v-5" element={<NSAAVariant5/>}/>
            <Route path="saa/neil/v-6" element={<NSAAVariant6/>}/>

            <Route path="saa/indus/v-1" element={<ISAAVariant1/>}/>
            <Route path="saa/indus/v-2" element={<ISAAVariant2/>}/>
            <Route path="saa/indus/v-3" element={<ISAAVariant3/>}/>
            <Route path="saa/indus/v-4" element={<ISAAVariant4/>}/>
            <Route path="saa/indus/v-5" element={<ISAAVariant5/>}/>
            <Route path="saa/indus/v-6" element={<ISAAVariant6/>}/>

            <Route path="dev/maarek/v-1" element={<MDEVVariant1/>}/>
            <Route path="dev/maarek/v-2" element={<MDEVVariant2/>}/>
            <Route path="dev/maarek/v-3" element={<MDEVVariant3/>}/>
            <Route path="dev/maarek/v-4" element={<MDEVVariant4/>}/>
            <Route path="dev/maarek/v-5" element={<MDEVVariant5/>}/>
            <Route path="dev/maarek/v-6" element={<MDEVVariant6/>}/>

            <Route path="dev/neil/v-1" element={<NDEVVariant1/>}/>
            <Route path="dev/neil/v-2" element={<NDEVVariant2/>}/>
            <Route path="dev/neil/v-3" element={<NDEVVariant3/>}/>
            <Route path="dev/neil/v-4" element={<NDEVVariant4/>}/>
            <Route path="dev/neil/v-5" element={<NDEVVariant5/>}/>
            <Route path="dev/neil/v-6" element={<NDEVVariant6/>}/>

            <Route path="dev/indus/v-1" element={<IDEVVariant1/>}/>
            <Route path="dev/indus/v-2" element={<IDEVVariant2/>}/>
            <Route path="dev/indus/v-3" element={<IDEVVariant3/>}/>
            <Route path="dev/indus/v-4" element={<IDEVVariant4/>}/>
            <Route path="dev/indus/v-5" element={<IDEVVariant5/>}/>
            <Route path="dev/indus/v-6" element={<IDEVVariant6/>}/>
        </Route>
    )
)

const App = () => {

    const {darkAlgorithm} = theme;

    return (
        <>
            <ConfigProvider theme={{algorithm: darkAlgorithm}}>
                <RouterProvider router={router}/>
            </ConfigProvider>
        </>
    )
};

export default App;
