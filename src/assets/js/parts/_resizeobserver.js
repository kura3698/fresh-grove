const observeHeaderBlockSize = new ResizeObserver((entries) => {
    const header = entries[0]
  
    if (header.borderBoxSize) {
      const { blockSize } = header.borderBoxSize[0]
      const roundedBlockSize = Math.round(blockSize)
  
      document.documentElement.style.setProperty('--header-block-size', `${roundedBlockSize}px`)
    }
  })
  
  document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header')
  
    if (header) observeHeaderBlockSize.observe(header)
  })