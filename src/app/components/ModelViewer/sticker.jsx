"use client"

import { useState } from 'react';
import { TextureLoader } from 'three';

const StickerPanel = ({ onStickerSelect }) => {
  const [stickerTexture, setStickerTexture] = useState(null);

  const handleStickerClick = (stickerSrc) => {
    const textureLoader = new TextureLoader();
    const texture = textureLoader.load(stickerSrc);
    setStickerTexture(texture);
    onStickerSelect(texture);
  };

  return (
    <div>
      <h3>Select a Sticker</h3>
      <button onClick={() => handleStickerClick('/stickers/sticker1.png')}>Sticker 1</button>
      <button onClick={() => handleStickerClick('/stickers/sticker2.png')}>Sticker 2</button>
      <button onClick={() => handleStickerClick('/stickers/sticker3.png')}>Sticker 3</button>
    </div>
  );
};

export default StickerPanel;
