import React from 'react';
import { mergePrismicPreviewData } from 'gatsby-source-prismic';


const IS_BROWSER = (typeof window !== "undefined")
const GET_DEFAULT_STORE = () => (typeof window === "undefined") ? {} : window.__PRISMIC_PREVIEW_DATA__;


export const withPreview = (Component, getPreviewData = GET_DEFAULT_STORE) => (props) => {

    // make sure data is ccorrec
    const store = getPreviewData();
    const path  = props.location ? props.location.pathname : props.data.path;
    
    console.log("withPreview", { props, store, path, IS_BROWSER });

    if (IS_BROWSER && typeof store === 'object' && store.path && path === store.path) {
        /* const data = mergePrismicPreviewData({
            staticData: props.data,
            previewData: store
        }); */
        const data = { ...props.data, ...store };
        console.log({ data });
        return <Component {...props} data={data} />
    } else {
        return <Component {...props} />
    }
}