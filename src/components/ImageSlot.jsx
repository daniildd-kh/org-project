import { useState } from 'react'

export function ImageSlot({ image, variant = 'default' }) {
  const [hasImage, setHasImage] = useState(true)
  const src = `${import.meta.env.BASE_URL}section-images/${image.file}`

  return (
    <figure className={`image-slot ${variant}`}>
      {hasImage ? (
        <img src={src} alt={image.alt} onError={() => setHasImage(false)} />
      ) : (
        <div className="image-placeholder" aria-label={`Место для изображения ${image.file}`}>
          <strong>{image.file}</strong>
          <span>положить в public/section-images</span>
        </div>
      )}
    </figure>
  )
}
