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
      <svg id={'10015.io'} viewBox={'0 0 480 480'}>
        <defs>
          <clipPath id={'blob'}>
            <path
              fill={'#474bff'}
              d={
                'M441.5,303.5Q438,367,386.5,408Q335,449,274.5,436.5Q214,424,158.5,411Q103,398,83,345Q63,292,58,238.5Q53,185,68,122Q83,59,148.5,60.5Q214,62,273.5,49Q333,36,380,78Q427,120,436,180Q445,240,441.5,303.5Z'
              }
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
`
