import React from 'react'
import IStandardInterface from 'src/common/interfaces/IStandardInterface'
import styled from 'styled-components'

interface IProfilePictureWithBlobCPProps extends IStandardInterface {
  color?: string
}

/**
 * @author rafaelvictor01
 * @return ADD DESCRIPTION
 */
export default function ProfilePictureWithBlobCP(
  props: IProfilePictureWithBlobCPProps
): JSX.Element {
  return (
    <ProfilePictureWithBlobSCP>
      <svg id={'10015.io'} viewBox={'0 0 200 200'}>
        <defs>
          <clipPath id={'blob'}>
            <path
              fill="#FF0066"
              d="M45.2,-77.8C59.1,-70.4,71.1,-59.2,78.6,-45.6C86.1,-32,89.1,-16,89.2,0.1C89.4,16.2,86.7,32.3,79.5,46.5C72.4,60.8,60.9,73.1,46.9,80.7C32.9,88.3,16.4,91.3,0.5,90.4C-15.4,89.6,-30.9,84.9,-44.4,77C-57.9,69.1,-69.5,57.9,-78.3,44.6C-87.1,31.2,-93.2,15.6,-93.3,0C-93.4,-15.7,-87.4,-31.3,-78.9,-45.4C-70.5,-59.4,-59.6,-71.9,-46,-79.4C-32.4,-87,-16.2,-89.8,-0.3,-89.3C15.7,-88.9,31.4,-85.2,45.2,-77.8Z"
              transform="translate(100 100)"
            />
          </clipPath>
        </defs>
        <image
          x={'0'}
          y={'0'}
          width={'100%'}
          height={'100%'}
          clipPath={'url(#blob)'}
          xlinkHref={'./profilePicture.jpg'}
          preserveAspectRatio={'xMidYMid slice'}
        />
      </svg>
    </ProfilePictureWithBlobSCP>
  )
}

const ProfilePictureWithBlobSCP = styled.div`
  svg {
    width: 200px;
    fill: ${props => props.theme.colors.primary};
  }

  img {
    width: 170px;
  }

  @media screen and (max-width: 350px) {
    svg {
      width: 180px;
    }
  }
`
