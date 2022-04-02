import * as ReactDOMClient from 'react-dom/client';
import Banner from './banner';
import Museums from './museums';

const container = document.getElementById("root");
const root = ReactDOMClient.createRoot(container);

root.render(
    <>
        <Banner/>
        <Museums/>
    </>
);