/** @format */

import { ImageResponse } from 'next/og';

export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export const dynamic = 'force-static';
export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#0b0d12',
        color: '#faf7f2',
        fontSize: 20,
        fontWeight: 600,
        borderRadius: 8,
      }}>
      C
    </div>,
    { ...size },
  );
}
