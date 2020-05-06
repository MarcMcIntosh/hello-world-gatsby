import { useState, useEffect } from 'react'
import { mergePrismicPreviewData } from 'gatsby-source-prismic';

/**
 * Prismic preview hook
 * @param {object} staticData Data object from Gatsby page
 */
export default function withPreviewData(staticData) {
  if (window.__PRISMIC_PREVIEW_DATA__) {
    return mergePrismicPreviewData({
      staticData,
      previewData: window.__PRISMIC_PREVIEW_DATA__
    })
  }
  return staticData;
}
