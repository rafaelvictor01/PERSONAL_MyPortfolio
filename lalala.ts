import styled from 'styled-components'

const lalala = styled.div`
  .section {
    padding: 2rem 0 4rem;
  }

  .section_title {
    font-size: ${props => props.theme.fontSizeForSmallDevices.h1FontSize};
    @media screen and (min-width: 960px) {
      font-size: ${props => props.theme.fontSizeForLargeDevices.h1FontSize};
    }
  }

  .section_subtitle {
    display: block;
    margin-bottom: ${props => props.theme.marginBottom.mb3};
    font-size: ${props => props.theme.fontSizeForSmallDevices.smallFontSize};
    @media screen and (min-width: 960px) {
      font-size: ${props => props.theme.fontSizeForLargeDevices.smallFontSize};
    }
  }

  .section_title,
  .section_subTitle {
    text-align: center;
  }
`
