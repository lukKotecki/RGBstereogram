import React from 'react'

export default function HowItWorks(){
  return (
    <div className="page-content">
      <h2>How It Works</h2>
      <p>This tool combines three input images into a single RGB stereogram by processing
      the pixel data and shifting color channels according to user-provided values.
      Upload images, adjust channel multipliers, and download your generated stereogram.</p>
      <p>The algorithm cycles through the raster scan of the canvas, dividing it into
      chunks, and alternates between source images to build a composite where each
      color (red, green, blue) is derived from a different picture.</p>
    </div>
  )
}
