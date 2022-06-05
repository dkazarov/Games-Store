import React from 'react';

export const CartPreview = ({ previewCart }) => {
  return (
    <>
      {previewCart ? (
        <div
          style={{
            position: 'absolute',
            right: 0,
            top: 75,
            width: '300px',
            height: '300px',
            backgroundColor: 'rgba(255, 255, 255, .8)',
            borderEndStartRadius: '15px',
          }}>
        </div>
      ) : (
        false
      )}
    </>
  );
};
