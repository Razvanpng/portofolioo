import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Razvan Stirbu — Software Engineer Portfolio'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#131314',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '80px',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span
            style={{
              color: '#e8e6e3',
              fontSize: 130,
              fontWeight: 900,
              textTransform: 'uppercase',
              lineHeight: 1,
              letterSpacing: '-6px',
            }}
          >
            RAZVAN
          </span>
          <span
            style={{
              color: '#e8e6e3',
              fontSize: 130,
              fontWeight: 900,
              textTransform: 'uppercase',
              lineHeight: 1,
              letterSpacing: '-6px',
              marginLeft: 130,
            }}
          >
            STIRBU
          </span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ width: 64, height: 3, background: '#d97736' }} />
          <span
            style={{
              color: '#d97736',
              fontSize: 18,
              textTransform: 'uppercase',
              letterSpacing: '4px',
            }}
          >
            SOFTWARE ENGINEER · APPLIED INFORMATICS
          </span>
        </div>
      </div>
    ),
    { ...size }
  )
}